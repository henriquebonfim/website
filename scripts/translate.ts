import fs from "fs";
import path from "path";

// --- Configuration ---
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const LOCALE_DIR = path.resolve("src/shared/i18n/locales");
const TARGET_LOCALES = ["es", "pt"];
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;

// Verified list of high-quality free models on OpenRouter
// Ordered by preference: Capabilities -> Speed -> Reliability
const MODELS = [
  "google/gemini-2.0-flash-exp:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "meta-llama/llama-3.1-405b-instruct:free",
  "mistralai/mistral-7b-instruct:free",
  "meta-llama/llama-3.2-3b-instruct:free", // Fastest fallback
];

// --- Interfaces ---
interface TranslationStats {
  totalParsed: number;
  translated: number;
  skipped: number;
  failed: number;
}

// --- Helpers ---

/**
 * Sleep for a given number of milliseconds
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom fetch with retry logic and exponential backoff
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = MAX_RETRIES,
): Promise<Response> {
  try {
    const response = await fetch(url, options);

    // If success or distinct client error (like 401 Unauthorized), return immediately
    if (response.ok || (response.status >= 400 && response.status < 429)) {
      return response;
    }

    // Handle Rate Limits (429) or Server Errors (5xx)
    if (retries > 0) {
      const isRateLimit = response.status === 429;
      const backoff = BASE_DELAY_MS * Math.pow(2, MAX_RETRIES - retries);
      console.warn(
        `    ⚠️ ${isRateLimit ? "Rate Limited" : "Server Error"} (${response.status}). Retrying in ${backoff}ms...`,
      );
      await delay(backoff);
      return fetchWithRetry(url, options, retries - 1);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`    ⚠️ Network error. Retrying...`);
      await delay(BASE_DELAY_MS);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

// --- Core Classes ---

class Translator {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async translate(text: string, targetLocale: string): Promise<string> {
    const prompt = `Translate the following internationalization string from English to ${targetLocale}.
        Rules:
        1. Preserve all formatting, punctuation, and casing.
        2. Preserve all variable placeholders exactly (e.g., {name}, {0}, <0>link</0>).
        3. Do not translate technical terms (e.g., React, AWS, API, Bun).
        4. Return ONLY the translation string, no explanations.

        Text: "${text}"`;

    for (const model of MODELS) {
      try {
        console.log(`    Trying model: ${model}`);
        const response = await fetchWithRetry(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.apiKey}`,
              "HTTP-Referer": "https://github.com/henriquebonfim/website",
              "X-Title": "Website CI Translation",
            },
            body: JSON.stringify({
              model: model,
              messages: [{ role: "user", content: prompt }],
              temperature: 0.3, // Low temperature for consistency
            }),
          },
        );

        if (!response.ok) {
          const body = await response.text();
          console.warn(
            `    ⚠️ Model ${model} failed: ${response.status} ${response.statusText}`,
          );
          continue; // Try next model
        }

        const data = await response.json();
        if (!data.choices || !data.choices[0]?.message?.content) {
          throw new Error("Invalid API response format");
        }

        let translation = data.choices[0].message.content.trim();

        // Cleanup: API sometimes wraps response in quotes specifically for short strings
        if (translation.startsWith('"') && translation.endsWith('"')) {
          translation = translation.slice(1, -1);
        }

        return translation;
      } catch (error) {
        console.warn(
          `    ⚠️ Error with model ${model}:`,
          error instanceof Error ? error.message : error,
        );
      }
    }

    throw new Error("All translation models failed.");
  }
}

class POParts {
  static extractMsgid(block: string): string {
    // block format: msgid "line1"\n"line2"
    const lines = block.split("\n");
    let text = "";
    lines.forEach((line) => {
      // clean: remove 'msgid ' prefix (first line only), remove wrapping quotes
      const cleaned = line
        .replace(/^msgid\s+/, "")
        .replace(/^"/, "")
        .replace(/"$/, "");
      text += cleaned;
    });
    // Unescape escaped quotes from parsing
    return text.replace(/\\"/g, '"');
  }

  static formatMsgstr(translation: string): string {
    // Escape quotes for PO file compliance
    return translation.replace(/"/g, '\\"');
  }
}

// --- Main Execution ---

async function processLocale(
  locale: string,
  translator: Translator,
): Promise<TranslationStats> {
  const filePath = path.join(LOCALE_DIR, `${locale}.po`);
  const stats: TranslationStats = {
    totalParsed: 0,
    translated: 0,
    skipped: 0,
    failed: 0,
  };

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return stats;
  }

  console.log(`\n📂 Processing ${locale}...`);
  const content = fs.readFileSync(filePath, "utf8");

  // Regex matches: msgid block followed immediately by msgstr ""
  // msgid "..."
  // "..."
  // msgstr ""
  const blockRegex =
    /(msgid "(?:[^"\\]|\\.)*"(?:\n"(?:[^"\\]|\\.)*")*)\nmsgstr ""/g;

  let match;
  let updatedContent = content;
  const replacements: { original: string; replacement: string }[] = [];

  // 1. Identify all missing translations
  while ((match = blockRegex.exec(content)) !== null) {
    stats.totalParsed++;
    const fullMatch = match[0];
    const msgidBlock = match[1];

    const sourceText = POParts.extractMsgid(msgidBlock);

    if (!sourceText.trim()) {
      stats.skipped++;
      continue;
    }

    console.log(
      `  📝 Translating: "${sourceText.substring(0, 40)}${sourceText.length > 40 ? "..." : ""}"`,
    );

    try {
      const translatedText = await translator.translate(sourceText, locale);
      const safeTranslation = POParts.formatMsgstr(translatedText);

      const replacement = `${msgidBlock}\nmsgstr "${safeTranslation}"`;
      replacements.push({ original: fullMatch, replacement });
      stats.translated++;
    } catch (error) {
      console.error(`  ❌ Failed to translate: "${sourceText}"`);
      stats.failed++;
    }
  }

  // 2. Apply updates
  if (replacements.length > 0) {
    for (const item of replacements) {
      updatedContent = updatedContent.replace(item.original, item.replacement);
    }
    fs.writeFileSync(filePath, updatedContent);
    console.log(`  💾 Saved ${locale}.po`);
  }

  return stats;
}

async function main() {
  if (!OPENAI_API_KEY) {
    console.error("❌ Error: OPENAI_API_KEY environment variable is missing.");
    process.exit(1);
  }

  console.log("🚀 Starting AI Translation...");
  console.log(`Target Locales: ${TARGET_LOCALES.join(", ")}`);

  const translator = new Translator(OPENAI_API_KEY);

  const totalStats: TranslationStats = {
    totalParsed: 0,
    translated: 0,
    skipped: 0,
    failed: 0,
  };

  for (const locale of TARGET_LOCALES) {
    const stats = await processLocale(locale, translator);
    totalStats.totalParsed += stats.totalParsed;
    totalStats.translated += stats.translated;
    totalStats.skipped += stats.skipped;
    totalStats.failed += stats.failed;
  }

  console.log("\n--- Summary ---");
  console.log(`✅ Translated: ${totalStats.translated}`);
  console.log(`⏭️  Skipped:    ${totalStats.skipped}`);

  if (totalStats.failed > 0) {
    console.error(`❌ Failed:     ${totalStats.failed}`);
    process.exit(1); // Fail the pipeline if any string failed so it can be retried
  } else {
    console.log(`✨ Success! All translations completed.`);
  }
}

main().catch((err) => {
  console.error("Critical Script Error:", err);
  process.exit(1);
});
