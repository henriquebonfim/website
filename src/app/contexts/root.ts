import { createContext } from 'react';
import type { RootContextType } from '#/shared/types';
import { DEFAULT_LOCALE, DEFAULT_THEME } from '#/shared/constants';

/**
 * React context for root-level theme and locale state management.
 * Provides theme, setTheme, locale, and setLocale to consumers.
 * @see RootContextType for the context value shape
 */
export const RootContext = createContext<RootContextType>({
  theme: DEFAULT_THEME,
  locale: DEFAULT_LOCALE,
  setTheme: () => {},
  setLocale: () => {},
});
