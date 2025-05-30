import type { FC, ReactNode } from 'react';
import { RootProvider } from './Root';
import TranslatorProvider from './Translator';

/**
 * Providers component that wraps the application with necessary context providers.
 * It includes RootProvider for theme and locale management and TranslatorProvider for translations.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The Providers component
 */

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RootProvider>
      <TranslatorProvider>{children}</TranslatorProvider>
    </RootProvider>
  );
};
