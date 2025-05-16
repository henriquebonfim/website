import { createContext } from "react";
import type { RootContextType } from "#/shared/types";

export const RootContext = createContext<RootContextType>({
  theme: "dark",
  setTheme: () => {},
  locale: "en",
  setLocale: () => {},
});
