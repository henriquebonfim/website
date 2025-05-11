import { RootProvider } from "./Root";
import TranslatorProvider from "./Translator";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <TranslatorProvider>{children}</TranslatorProvider>
    </RootProvider>
  );
}
