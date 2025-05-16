/**
 * Global type definitions for the application
 */

import type { LOCALES } from "#/shared/i18n";
export type Theme = "light" | "dark";

/**
 * Type definitions for the Root context
 */
export type RootContextType = {
  /**
   * Current theme ('light' or 'dark')
   */
  theme: Theme;

  /**
   * Set theme function
   */
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;

  /**
   * Current locale code
   */
  locale: keyof typeof LOCALES;

  /**
   * Set locale function
   */
  setLocale: React.Dispatch<React.SetStateAction<keyof typeof LOCALES>>;
};
