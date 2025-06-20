export type ThemeType = 'light' | 'dark';
export type LocaleType = 'en' | 'es' | 'pt';
export type RootContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  locale: LocaleType;
  setLocale: React.Dispatch<React.SetStateAction<LocaleType>>;
};
