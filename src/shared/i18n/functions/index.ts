import { i18n } from '@lingui/core';
import type { LocaleType } from '../../types';

/**
 * Dynamically loads and activates locale messages.
 * @param locale - The locale to load
 * @throws Error if the locale catalog cannot be loaded
 */
export const dynamicLoadMessages = async (locale: LocaleType) => {
  const catalog = await import(`../locales/${locale}.ts`);
  if (!catalog?.messages) {
    throw new Error(`No messages found in catalog for locale: ${locale}`);
  }
  i18n.loadAndActivate({ locale, messages: catalog.messages });
};
