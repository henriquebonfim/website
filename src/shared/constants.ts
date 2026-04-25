/**
 * Shared constants for the entire application.
 * Centralizing links, asset paths, and configuration.
 */

export const SITE_CONFIG = {
  url: 'https://henriquebonfim.web.app',
  name: 'Henrique Bonfim',
  title: 'Henrique Bonfim | Senior Software Engineer',
  description:
    'Senior Software Engineer building reliable platforms, observability, and AI tooling.',
  author: 'Henrique Bonfim',
  themeColor: '#1A1A1A',
  locale: 'en',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/henriquebonfim',
  linkedin: 'https://linkedin.com/in/henriquebonfim',
  youtube: 'https://www.youtube.com/@henrique_bonfim',
  gitlab: 'https://gitlab.com/hpbonfim',
  dockerhub: 'https://hub.docker.com/u/hpbonfim',
  credly: 'https://www.credly.com/users/henrique-bonfim',
  instagram: 'https://www.instagram.com/hpbonfim/',
  twitter: 'https://twitter.com/henriquebonfim',
  telegram: 'https://t.me/henriquebonfim',
  whatsapp: 'https://wa.me/5548996855477',
} as const;

export const CONTACT = {
  email: 'henriquebonfim@proton.me',
  location: 'Campo Grande, MS, Brazil',
} as const;

export const ASSETS = {
  // Public assets (referenced from root /)
  background: '/assets/layout/background.webp',
  background1: '/assets/layout/background_1.webp',
  background2: '/assets/layout/background_2.webp',
  background3: '/assets/layout/background_3.webp',
  logoWebp: '/assets/layout/logo.webp',
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
  placeholder: '/assets/layout/background_3.webp',
} as const;

// Internal asset imports are handled in their respective UI components
// but we can centralize their relative paths here for reference
export const INTERNAL_ASSETS = {
  headLogo: '@/assets/head-logo.png',
  alienLogo: '@/assets/alien-logo.png',
} as const;
