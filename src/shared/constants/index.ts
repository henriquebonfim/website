import type { LocaleType, ThemeType } from '../types';

export const SECTION_ITEMS = {
  YOUTUBE: 'youtube',
  SPOTIFY: 'spotify',
  RESUME: 'resume',
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  IMAGE: 'image',
  WINDOWS_96: 'windows95',
  LANGUAGE: 'language',
  SOCIAL_MEDIA: 'social-media',
  PROFILE: 'profile',
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/henriquebonfim',
  LINKEDIN: 'https://linkedin.com/in/henriquebonfim',
  IMAGE: 'https://avatars.githubusercontent.com/u/40275173',
  RESUME: 'https://henriquebonfim.com/resume.pdf',
};

export const API = {
  SPOTIFY_EMBED:
    'https://open.spotify.com/embed/playlist/4x4izj9nqd1HaNJb1PFKOe?utm_source=generator',
  YOUTUBE_EMBED:
    'https://www.youtube.com/embed/ogoZCRLjRgA?enablejsapi=1&loop=1&modestbranding=1&playsinline=1&color=white&iv_load_policy=3',
};

export const ROUTES = {
  HOME: '/',
  RESUME: '/resume',
};

export const LOCALES: Record<LocaleType, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export const TERMINAL_USERNAME = 'henriquebonfim@website:~';

export const THEMES: Record<ThemeType, ThemeType> = {
  light: 'light',
  dark: 'dark',
};

export const THEME_ATTRIBUTE = 'data-theme';
export const LANG_ATTRIBUTE = 'lang';

export const DEFAULT_LOCALE = Object.keys(LOCALES)[0] as keyof typeof LOCALES;
export const DEFAULT_THEME = THEMES.dark;
export const LOCALE_STORAGE_KEY = 'locale';
export const THEME_STORAGE_KEY = 'theme';
