import { LOCALES } from "#/shared/i18n";
import { createContext, useState } from "react";

type RootContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  locale: keyof typeof LOCALES;
  setLocale: React.Dispatch<React.SetStateAction<keyof typeof LOCALES>>;
};

export const RootContext = createContext<RootContextType>({
  theme: "light",
  setTheme: () => { },
  locale: "en",
  setLocale: () => { },
});

export function RootProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [locale, setLocale] = useState<keyof typeof LOCALES>("en");

  return (
    <RootContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </RootContext.Provider>
  );
}
