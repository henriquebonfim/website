import { version as buildVersion } from '../../../package.json';
import type { LocaleType, ThemeType } from '../types';
export const BUILD_VERSION = 'v' + buildVersion;
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
  WHATSAPP:
    'https://wa.me/+5548996855477?text=Hello%20Henrique%2C%20I%20found%20your%20contact%20on%20your%20website.',
  TELEGRAM:
    'https://t.me/henriquebonfim?text=Hello%20Henrique%2C%20I%20found%20your%20contact%20on%20your%20website.',
};

export const EMBED = {
  SPOTIFY:
    'https://open.spotify.com/embed/playlist/4x4izj9nqd1HaNJb1PFKOe?utm_source=generator',
  GOOGLE_MAPS:
    'https://maps.google.com/maps?q=campo_grande&t=k&z=10&ie=UTF8&iwloc=&output=embed',
  YOUTUBE: {
    VIDEO_PIANO:
      'https://www.youtube.com/embed/ogoZCRLjRgA?enablejsapi=1&loop=1&modestbranding=1&playsinline=1&color=white&iv_load_policy=3',
    SHORT_PIANO: 'https://www.youtube.com/embed/VsRiGYE-Dqs',
    SHORT_REC: 'https://www.youtube.com/embed/4o1bFjUzIPI',
    SHORT_GUITAR: 'https://www.youtube.com/embed/Vc0ruOr-9lU',
    SHORT_ORGAN:
      'https://www.youtube.com/embed/t9_m43tiTik?si=ftzePvQ5AOB12nbj&amp;start=8',
  },
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

export const BADGES = [
  {
    name: 'Associate Cloud Engineer Certification',
    url: 'https://www.credly.com/badges/eeeb2956-3917-425d-8d00-6f6dd7c23219',
    img: 'https://images.credly.com/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png',
  },
  {
    name: 'Google Cloud Computing Foundations Certificate',
    url: 'https://www.credly.com/badges/89a03378-e9a5-407d-8ae7-8fc75f23186e',
    img: 'https://images.credly.com/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/9efcf730-e9f4-439e-96ed-45432ef0686b',
    img: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
  },
  {
    name: 'AWS re/Start Graduate',
    url: 'https://www.credly.com/badges/803276bf-5ede-4e16-9f63-222d97ef324e',
    img: 'https://images.credly.com/size/340x340/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png',
  },
  {
    name: 'Scrum Foundation Professional Certification - SFPC™ !',
    url: 'https://www.credly.com/badges/ba40f2f4-d622-429b-8c06-c4788cf53745',
  },
  {
    name: 'Docker Essentials: A Developer Introduction',
    url: 'https://www.credly.com/badges/5bbf059d-db3d-495c-af67-d05b551d74c7',
  },
  {
    name: 'Well-Architected Proficient',
    url: 'https://www.credly.com/badges/1f724849-a6ea-4328-8649-265237662a5f',
  },
  {
    name: 'Multicloud Network Associate',
    url: 'https://www.credly.com/badges/943f5e1e-4973-4c08-afdb-b88f61d60a1a',
  },
  {
    name: 'LFS169: Introduction to GitOps',
    url: 'https://www.credly.com/badges/51f0e794-01db-4098-ab31-f24d7f710322',
  },
  {
    name: 'LFC108: Cybersecurity Essentials',
    url: 'https://www.credly.com/badges/b3acc5cc-ca37-4fe1-96d2-4062450f3b19',
  },
  {
    name: 'Lifelong Learning',
    url: 'https://www.credly.com/badges/2f1c6ff0-7001-4d22-bed8-02b2c8cdb719',
  },
  {
    name: 'LFD121: Developing Secure Software',
    url: 'https://www.credly.com/badges/c7692e14-86cf-421b-8016-99ae84f6fed4',
  },
  {
    name: 'AWS Educate Introduction to Cloud 101',
    url: 'https://www.credly.com/badges/24f2dd4d-9ebe-491a-ad32-dee7a88dc24c',
  },
  {
    name: 'AWS Knowledge: Architecting',
    url: 'https://www.credly.com/badges/cbc80c19-d099-4b83-8c92-03329b23cdfc',
  },
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    url: 'https://www.credly.com/badges/971a04b6-9379-4a9c-bf84-9f2bf532adc9',
  },
  {
    name: 'AWS Cloud Quest: Solutions Architect',
    url: 'https://www.credly.com/badges/3c057298-5840-467e-b477-736a64e58fe4',
  },
  {
    name: 'AWS Cloud Quest: Serverless Developer',
    url: 'https://www.credly.com/badges/0c38ffee-4a2e-43be-a24a-e649036ec72d',
  },
  {
    name: 'Implement Load Balancing on Compute Engine Skill Badge',
    url: 'https://www.credly.com/badges/0c0afca3-212d-4d4b-a385-1910c4230354',
  },
  {
    name: 'Set Up an App Dev Environment on Google Cloud Skill Badge',
    url: 'https://www.credly.com/badges/b6fd0908-a1cc-4f2c-86a1-c1d462b663c5',
  },
  {
    name: 'Build a Secure Google Cloud Network Skill Badge',
    url: 'https://www.credly.com/badges/0d2cb988-5264-4d2c-8060-f96a193d11c6',
  },
  {
    name: 'Develop Your Google Cloud Network Skill Badge',
    url: 'https://www.credly.com/badges/1e3f796a-b77c-41a3-9b87-4d3a012e9b47',
  },
  {
    name: 'Build Infrastructure with Terraform on Google Cloud Skill Badge',
    url: 'https://www.credly.com/badges/365c1688-698b-4931-bcb4-057413b36cda',
  },
  {
    name: 'Implement Cloud Security Fundamentals on Google Cloud Skill Badge',
    url: 'https://www.credly.com/badges/505eefeb-4655-4ebc-9351-99a6cada82fb',
  },
  {
    name: 'Prepare Data for ML APIs on Google Cloud Skill Badge',
    url: 'https://www.credly.com/badges/4242d5ee-1aa6-415c-9b68-b77be1e5dd43',
  },
  {
    name: 'Prompt Design in Vertex AI Skill Badge',
    url: 'https://www.credly.com/badges/3b21958a-6f1c-4382-bd74-b91099afdac2',
  },
] as const;
