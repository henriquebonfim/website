import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultInputPath = path.resolve(scriptDir, 'badges.json');
const inputPath = defaultInputPath;
const outputPath = process.argv[2] ? path.resolve(process.argv[2]) : null;

const readJson = async (filePath) => {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
};

const normalizeName = (value) => value.replace(/[–—]/g, '—').trim();

const extractIssuer = (badge) =>
  badge?.issuer?.entities?.find((entry) => entry.label === 'Issued by')?.entity?.name ??
  badge?.issuer_linked_in_name ??
  badge?.created_by?.name ??
  'Unknown';

const extractCertification = (badge) => {
  const issuedAt = badge.issued_at_date ?? badge.issued_at?.slice(0, 10) ?? null;
  return {
    id: badge.id,
    name: normalizeName(badge.badge_template?.name ?? badge.badge_template?.title ?? 'Unknown'),
    issuer: extractIssuer(badge),
    issuedAt,
    expiresAt: badge.expires_at_date ?? (badge.expires_at ? badge.expires_at.slice(0, 10) : null),
    year: issuedAt ? new Date(`${issuedAt}T00:00:00Z`).getUTCFullYear() : null,
    badgeUrl: badge.badge_url ?? null,
    imageUrl: badge.image_url ?? badge.image?.url ?? null,
    typeCategory: badge.badge_template?.type_category ?? null,
    skills: Array.isArray(badge.badge_template?.skills) ? badge.badge_template.skills : [],
  };
};

const main = async () => {
  const payload = await readJson(inputPath);
  const badges = Array.isArray(payload?.data) ? payload.data : [];

  const certifications = badges
    .filter((badge) => badge?.badge_template?.certification === true)
    .map(extractCertification)
    .sort((left, right) => {
      const leftDate = left.issuedAt ?? '';
      const rightDate = right.issuedAt ?? '';
      return rightDate.localeCompare(leftDate) || left.name.localeCompare(right.name);
    });

  const output = `${JSON.stringify(certifications, null, 2)}\n`;

  if (outputPath) {
    await fs.writeFile(outputPath, output, 'utf8');
    return;
  }

  process.stdout.write(output);
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
