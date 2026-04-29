export const SITE_CONFIG = {
  url: 'https://henriquebonfim.web.app',
  name: 'Henrique Bonfim',
  title: 'Henrique Bonfim | Senior Software Engineer',
  description:
    'Senior Software Engineer building reliable platforms, observability, and AI tooling.',
  themeColor: '#1A1A1A',
  locale: 'en',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/henriquebonfim/',
  linkedin: 'https://linkedin.com/in/henriquebonfim/',
  youtube: 'https://www.youtube.com/@henrique_bonfim/',
  gitlab: 'https://gitlab.com/hpbonfim/',
  dockerhub: 'https://hub.docker.com/u/hpbonfim/',
  credly: 'https://www.credly.com/users/henriquebonfim/',
  instagram: 'https://www.instagram.com/hpbonfim/',
  twitter: 'https://twitter.com/henriquebonfim/',
  telegram: 'https://t.me/henriquebonfim/',
  whatsapp: 'https://wa.me/5548996855477/',
  kaggle: 'https://www.kaggle.com/code/henriquebonfim/',
} as const;

export const CONTACT = {
  email: 'dev.unsorted585@passinbox.com',
  location: 'Campo Grande, MS, Brazil',
} as const;

export const ASSETS = {
  // Public assets (referenced from root /)
  background: '/assets/images/background.webp',
  background1: '/assets/images/background_1.webp',
  background2: '/assets/images/background_2.webp',
  background3: '/assets/images/background_3.webp',

  codingWebp: '/assets/images/me_coding.webp',
  headLogo: '/assets/images/head_logo.webp',
  alienLogo: '/assets/images/alien_logo.webp',
  resume: '/assets/static/henrique-bonfim-resume.pdf',

  // Icons (PWA)
  icon72: '/assets/icons/icon-72x72.png',
  icon96: '/assets/icons/icon-96x96.png',
  icon144: '/assets/icons/icon-144x144.png',
  icon192: '/assets/icons/icon-192x192.png',
  icon512: '/assets/icons/icon-512x512.png',

  // i18n flags
  flagEn: '/assets/i18n/en.png',
  flagPt: '/assets/i18n/pt.png',
  flagEs: '/assets/i18n/es.png',

  // Missing or placeholder
  placeholder: '/assets/images/background_3.webp',
} as const;
