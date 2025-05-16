import { LOCALES } from "#/shared/i18n";
import { useState, useEffect, type JSX } from "react";
import { RootContext } from "../contexts/root";
import { type Theme } from "#/shared/types";

/**
 * RootProvider component that provides context to its children.
 * It initializes the theme and locale based on localStorage or browser preferences.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The RootProvider component
 */
export function RootProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  const [locale, setLocale] = useState<keyof typeof LOCALES>(() => {
    // Try to get stored locale from localStorage or fallback to browser preference
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && Object.keys(LOCALES).includes(savedLocale)) {
      return savedLocale as keyof typeof LOCALES;
    }

    const browserLang = navigator.language.split("-")[0];
    if (browserLang && Object.keys(LOCALES).includes(browserLang)) {
      return browserLang as keyof typeof LOCALES;
    }

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    localStorage.setItem("theme", theme);
  }, [locale, theme]);

  return (
    <RootContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </RootContext.Provider>
  );
}
