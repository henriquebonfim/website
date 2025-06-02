import {
  DEFAULT_LOCALE,
  LANG_ATTRIBUTE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  THEME_ATTRIBUTE,
  THEME_STORAGE_KEY,
  THEMES,
} from '#/shared/constants';
import useLocalStorage from '#/shared/hooks/useLocalStorage';
import { dynamicLoadMessages } from '#/shared/i18n/functions';
import { type LocaleType, type ThemeType } from '#/shared/types';
import { Loading } from '#/shared/ui';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { useEffect, useState, type FC, type ReactNode } from 'react';
import { RootContext } from '../contexts/root';

/**
 * Retrieves theme preference from localStorage or defaults to dark theme.
 * @returns {ThemeType} The user's preferred theme.
 */
const getInitialTheme = (): ThemeType => {
  if (typeof window === 'undefined') return THEMES.dark;
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null;
  return saved && saved in THEMES ? saved : THEMES.dark;
};

/**
 * Retrieves locale preference from localStorage, browser settings, or defaults to English.
 * @returns {LocaleType} The user's preferred locale.
 */
const getInitialLocale = (): LocaleType => {
  const browserLang = navigator.language.split('-')[0];
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved && saved in LOCALES) return saved as LocaleType;
  return browserLang in LOCALES ? (browserLang as LocaleType) : DEFAULT_LOCALE;
};

export const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalStorage<ThemeType>(
    THEME_STORAGE_KEY,
    getInitialTheme,
  );
  const [locale, setLocale] = useLocalStorage<LocaleType>(
    LOCALE_STORAGE_KEY,
    getInitialLocale,
  );

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  }, [theme]);

  useEffect(() => {
    (async () => {
      await dynamicLoadMessages(locale).then(() => {
        document.documentElement.setAttribute(LANG_ATTRIBUTE, locale);
        i18n.activate(locale);
        setLoading(false);
      });
    })();
  }, [locale]);

  return (
    <RootContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {loading ? (
        <Loading centered overlay />
      ) : (
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      )}
    </RootContext.Provider>
  );
};
