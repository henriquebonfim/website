import type { JSX } from "react";
import { RootProvider } from "./Root";
import TranslatorProvider from "./Translator";

/**
 * Providers component that wraps the application with necessary context providers.
 * It includes RootProvider for theme and locale management and TranslatorProvider for translations.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The Providers component
 */

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <RootProvider>
      <TranslatorProvider>{children}</TranslatorProvider>
    </RootProvider>
  );
}
