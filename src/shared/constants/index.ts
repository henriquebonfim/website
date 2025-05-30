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
  EMAIL: 'mailto:henriquebonfim@proton.me',
  GITLAB: 'https://gitlab.com/hpbonfim',
  LINKEDIN: 'https://linkedin.com/in/henriquebonfim',
  IMAGE: 'https://avatars.githubusercontent.com/u/40275173',
  RESUME: 'https://henriquebonfim.com/resume.pdf',
  DOCKERHUB: 'https://hub.docker.com/u/hpbonfim',
  GITHUB_REPO: 'https://github.com/henriquebonfim?tab=repositories',
  PROFILE_IMAGE_URI:
    'https://avatars3.githubusercontent.com/u/40275173?s=460&u=fbc8036afb33b27a0758c0d091959cdc31676f66&v=4',
};

export const API = {
  SPOTIFY_EMBED:
    'https://open.spotify.com/embed/playlist/4x4izj9nqd1HaNJb1PFKOe?utm_source=generator',
  YOUTUBE_EMBED: {
    VIDEO_PIANO:
      'https://www.youtube.com/embed/ogoZCRLjRgA?enablejsapi=1&loop=1&modestbranding=1&playsinline=1&color=white&iv_load_policy=3',
    SHORT_PIANO: 'https://www.youtube.com/embed/VsRiGYE-Dqs',
    SHORT_GUITAR: 'https://www.youtube.com/embed/4o1bFjUzIPI',
  },
  GOOGLE_MAPS_EMBED:
    'https://maps.google.com/maps?q=florianopolis&t=k&z=10&ie=UTF8&iwloc=&output=embed',
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
export const AUDIO_URL =
  'https://ia802901.us.archive.org/16/items/Win95-audio-media/Windows%2095%20audio%20media%2FTADA.mp3';
