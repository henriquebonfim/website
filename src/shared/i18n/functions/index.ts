import { i18n } from "@lingui/core";
import type { LocaleType } from "../../types";

/**
 * Dynamically loads and activates locale messages.
 * @param locale - The locale to load
 * @throws Error if the locale catalog cannot be loaded
 */
export const dynamicLoadMessages = async (locale: LocaleType) => {
  const { messages } = await import(`../locales/${locale}.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
};
