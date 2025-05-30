import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  THEME_STORAGE_KEY,
  THEMES,
} from '#/shared/constants';
import { type LocaleType, type ThemeType } from '#/shared/types';
import { useEffect, useState, type FC, type ReactNode } from 'react';
import { RootContext } from '../contexts/root';

/**
 * Retrieves theme preference from localStorage or defaults to dark theme.
 * @returns {ThemeType} The user's preferred theme.
 */
const getInitialTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem(
    THEME_STORAGE_KEY,
  ) as ThemeType | null;
  return savedTheme === THEMES.dark || savedTheme === THEMES.light
    ? savedTheme
    : THEMES.dark;
};

/**
 * Retrieves locale preference from localStorage, browser settings, or defaults to English.
 * @returns {LocaleType} The user's preferred locale.
 */
const getInitialLocale = (): LocaleType => {
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (
    savedLocale &&
    Object.prototype.hasOwnProperty.call(LOCALES, savedLocale)
  ) {
    return savedLocale as LocaleType;
  }
  const browserLanguage = navigator.language.split('-')[0];
  return Object.prototype.hasOwnProperty.call(LOCALES, browserLanguage)
    ? (browserLanguage as LocaleType)
    : DEFAULT_LOCALE;
};

/**
 * Provides theme and locale context to its children.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The RootProvider component.
 */
export const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);
  const [locale, setLocale] = useState<LocaleType>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [locale, theme]);

  return (
    <RootContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </RootContext.Provider>
  );
};
