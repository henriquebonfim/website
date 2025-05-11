import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "en",
  locales: ["en", "pt", "es"],
  catalogs: [
    {
      path: "<rootDir>/src/shared/i18n/locales/{locale}",
      include: ["src"],
    },
  ],
});
