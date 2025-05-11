import { i18n } from "@lingui/core";

export const LOCALES = {
  en: "English",
  pt: "Português",
  es: "Español",
} as const;

export async function dynamicLoadMessages(locale: keyof typeof LOCALES) {
  const catalog = await import(`./locales/${locale}.po`);
  i18n.loadAndActivate({ locale, messages: catalog.messages });
}
