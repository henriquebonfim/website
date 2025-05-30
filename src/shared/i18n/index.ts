import { i18n } from '@lingui/core';
import { DEFAULT_LOCALE, LANG_ATTRIBUTE } from '../constants';
import type { LocaleType } from '../types';

/**
 * Dynamically loads and activates locale messages.
 * @param locale - The locale to load
 * @throws Error if the locale catalog cannot be loaded
 */
export const dynamicLoadMessages = async (
  locale: LocaleType,
): Promise<void> => {
  try {
    const catalog = await import(`./locales/${locale}.po`);
    if (!catalog?.messages) {
      throw new Error(`No messages found in catalog for locale: ${locale}`);
    }
    i18n.loadAndActivate({ locale, messages: catalog.messages });
    document.documentElement.setAttribute(LANG_ATTRIBUTE, locale);
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);
    if (locale !== DEFAULT_LOCALE) {
      console.warn(`Falling back to ${DEFAULT_LOCALE} locale`);
      await dynamicLoadMessages(DEFAULT_LOCALE);
    } else {
      throw error;
    }
  }
};

export { i18n } from '@lingui/core';
