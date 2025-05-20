import { useState, useEffect, type JSX } from "react";
import { RootContext } from "../contexts/root";
import { type ThemeType } from "#/shared/types";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LOCALES,
  THEMES,
  THEME_STORAGE_KEY,
} from "#/shared/constants";

/**
 * Retrieves theme preference from localStorage or system preferences (DISABLED).
 * @returns {ThemeType} The user's preferred theme.
 */
const getInitialTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem(
    THEME_STORAGE_KEY,
  ) as ThemeType | null;
  if (savedTheme === THEMES.dark || savedTheme === THEMES.light)
    return savedTheme;
  // return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.dark : THEMES.light;
  return THEMES.dark;
};

/**
 * Retrieves locale preference from localStorage, browser settings, or defaults to English.
 * @returns {keyof typeof LOCALES} The user's preferred locale.
 */
const getInitialLocale = (): keyof typeof LOCALES => {
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (
    savedLocale &&
    Object.prototype.hasOwnProperty.call(LOCALES, savedLocale)
  ) {
    return savedLocale as keyof typeof LOCALES;
  }
  const browserLanguage = navigator.language.split("-")[0];
  if (Object.prototype.hasOwnProperty.call(LOCALES, browserLanguage)) {
    return browserLanguage as keyof typeof LOCALES;
  }
  return DEFAULT_LOCALE;
};

/**
 * RootProvider component that provides theme and locale context to its children.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The RootProvider component.
 */
export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);
  const [locale, setLocale] = useState<keyof typeof LOCALES>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [locale, theme]);

  return (
    <RootContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </RootContext.Provider>
  );
}
