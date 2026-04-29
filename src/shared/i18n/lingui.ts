import { i18n } from '@lingui/core';

export const locales = {
  en: 'English',
  'pt-BR': 'Português',
  es: 'Español',
};
export const defaultLocale = 'en';

export async function loadCatalog(locale: string) {
  const { messages } = await import(`./locales/${locale}.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
