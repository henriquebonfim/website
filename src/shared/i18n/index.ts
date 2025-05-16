import { i18n } from "@lingui/core";

/**
 * Available locales in the application
 */
export const LOCALES = {
  en: "English",
  es: "Español",
  pt: "Português",
} as const;

/**
 * Default locale to use if the requested locale fails to load
 */
export const DEFAULT_LOCALE = "en";

/**
 * Dynamically load messages for a locale
 * @param {keyof typeof LOCALES} locale The locale to load
 * @throws {Error} If the locale catalog cannot be loaded
 */
export async function dynamicLoadMessages(locale: keyof typeof LOCALES) {
  try {
    const catalog = await import(`./locales/${locale}.po`);

    if (!catalog || !catalog.messages) {
      throw new Error(`No messages found in catalog for locale: ${locale}`);
    }

    i18n.loadAndActivate({ locale, messages: catalog.messages });

    // Set document lang attribute for accessibility and SEO
    document.documentElement.setAttribute("lang", locale);
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);

    // If the requested locale failed but isn't the default, try loading the default
    if (locale !== DEFAULT_LOCALE) {
      console.warn(`Falling back to ${DEFAULT_LOCALE} locale`);
      await dynamicLoadMessages(DEFAULT_LOCALE);
    } else {
      // If even the default locale failed, throw the error
      throw error;
    }
  }
}
