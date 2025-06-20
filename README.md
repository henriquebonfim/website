# Henrique Bonfim – Personal Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://henriquebonfim.web.app)
[![Version](https://img.shields.io/badge/version-1.0.2-blue.svg)](https://github.com/henriquebonfim/website)
[![Languages](https://img.shields.io/github/languages/count/henriquebonfim/website)](https://github.com/henriquebonfim/website)
[![Repo Size](https://img.shields.io/github/repo-size/henriquebonfim/website)](https://github.com/henriquebonfim/website)
[![Last Commit](https://img.shields.io/github/last-commit/henriquebonfim/website)](https://github.com/henriquebonfim/website)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/henriquebonfim/website/pulls)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Performance](#performance)
- [Improvements & Issues](#improvements--issues)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

A modern, performant, and multilingual personal portfolio website built with React, TypeScript, and Vite. Features a clean, responsive design with dark/light themes, internationalization, and interactive elements to showcase professional experience and technical expertise.

**Purpose:** Professional portfolio and personal branding platform
**Audience:** Employers, collaborators, and the tech community
**Design:** Modern minimalist with retro terminal aesthetics

---

## Features

- **Fully Responsive:** Optimized for all devices and screen sizes
- **Theme Switching:** Dynamic dark/light mode with smooth transitions
- **Internationalization:** English, Spanish, and Portuguese support
- **Performance Optimized:** Fast loading, code splitting, and lazy loading
- **SEO Friendly:** Optimized meta tags and semantic HTML
- **Bot Ready**  [Robots.txt](https://www.robotstxt.org/robotstxt.html)
- **Terminal UI:** Interactive command-line style interface
- **Spotify Integration:** Live music player widget
- **YouTube Embed:** Integrated video content
- **Tech Stack Carousel:** Animated technology showcase
- **Project Gallery:** Interactive project portfolio
- **PWA:** Installable with offline support
- **Retro Styling:** Windows 95 inspired UI components
- **Accessibility:** WCAG compliant with ARIA labels

---

## Tech Stack

**Frontend:**

- [React 19](https://react.dev/) (Concurrent features)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [DaisyUI 5](https://daisyui.com/)
- [98.css](https://jdan.github.io/98.css/) (Retro styling)

**Internationalization:**

- [LinguiJS 5](https://lingui.dev/) (PO files, async locale switching)

**Testing & Quality:**

- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

**Deployment:**

- [Firebase Hosting](https://firebase.google.com/)
- [Docker](https://www.docker.com/)
- [Nginx](https://nginx.org/)
- [PWA Support](https://vite-pwa-org.netlify.app/)

---

## Architecture

This project follows **Feature-Sliced Design (FSD)** for scalable and maintainable architecture:

```
src/
├── app/          # Application layer (setup, providers, contexts)
│   ├── contexts/    # React contexts (theme, locale)
│   ├── layout/      # Layout components
│   ├── providers/   # Context providers
│   └── index.css    # Global styles
├── pages/        # Page components (routing endpoints)
├── widgets/      # Complex UI components
│   ├── terminal/    # Terminal-style UI
│   ├── projects/    # Project showcase
│   └── tools-carousel/ # Tech stack display
├── features/     # Business logic (future expansion)
├── entities/     # Business entities (future expansion)
└── shared/       # Shared utilities and resources
    ├── constants/   # App-wide constants
    ├── hooks/       # Custom React hooks
    ├── i18n/        # Internationalization
    ├── types/       # TypeScript definitions
    └── utils/       # Helper functions
```

**Key Principles:**

- Unidirectional data flow
- Component composition
- Separation of concerns
- Module independence
- Plugin architecture

---

## Getting Started

### Prerequisites

- **Node.js** v22+
- **pnpm** ([Install Guide](https://pnpm.io/installation))

### Installation

```bash
# Clone the repository
git clone https://github.com/henriquebonfim/website.git
cd website

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Start development server
pnpm dev
# Open http://localhost:3000
```

---

## Development

### Common Scripts

```bash
# Development with network access
dev:host
# Build for production
pnpm build
# Lint and format code
pnpm lint
# Run tests
pnpm test
# Extract i18n messages
pnpm i18n:extract
# Compile translations
pnpm i18n:compile
```

---

## Testing

- **Unit & Integration:** Vitest + Testing Library
- **Coverage:** Run `pnpm coverage` for a report
- **Best Practices:**
  - Follow AAA pattern (Arrange, Act, Assert)
  - Use descriptive test names
  - Group related tests in `describe` blocks
  - Mock external dependencies
  - Test accessibility (a11y) and edge cases

---

## Deployment

### Docker

```bash
# Build Docker image
docker build -t henrique-website .
# Run container
docker run -p 80:80 henrique-website
```

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools
# Deploy to Firebase
firebase deploy
```

### Nginx

- See `nginx/nginx.conf` and `nginx/mime.types` for production server config.

---

## Browser Support

| Browser | Support                |
| ------- | ---------------------- |
| Chrome  | ✅ Latest              |
| Firefox | ✅ Latest              |
| Safari  | ✅ Latest              |
| Edge    | ✅ Latest              |
| Mobile  | ✅ iOS 12+, Android 8+ |

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Development Guidelines:**

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all CI checks pass

---

## Performance

- **Lighthouse Score:** 95+ across all metrics
- **Mobile Optimized:** First-class mobile experience
- **Fast Loading:** < 3s initial load time
- **Bundle Size:** Optimized with code splitting

---

## Improvements & Issues

### Improvements

- Expand unit/integration tests for context providers, hooks, and widgets
- Add integration/E2E tests for user flows (theme/language switching, error boundaries)
- Audit and internationalize all user-facing strings
- Enhance JSDoc and add usage examples for custom hooks/utilities
- Add more accessibility (a11y) tests and audit ARIA/focus management
- Improve error boundaries and async fallback UIs
- Optimize asset loading (modern formats, lazy loading)
- Audit for unnecessary re-renders and memoize where beneficial
- Continue to use DOMPurify for all dynamic HTML
- Remove dead code/unused imports
- Provide clear loading/skeleton states for all async content

### Current Issues

- Test coverage is limited for some business logic and context providers
- Some user-facing strings may not be fully internationalized
- Accessibility could be further improved and tested
- No external error logging for production errors
- Some widgets/components could benefit from additional memoization

---

## License

MIT License – see the [LICENSE](LICENSE) file for details.

---

## Author

**Henrique Bonfim**

- Website: [henriquebonfim.web.app](https://henriquebonfim.web.app)
- LinkedIn: [henriquebonfim](https://linkedin.com/in/henriquebonfim)
- GitHub: [@henriquebonfim](https://github.com/henriquebonfim)

---

## Acknowledgments

- **Icons:** [SVG Repo](https://www.svgrepo.com/)
- **Music:** Spotify Web API
- **Design:** Inspired by terminal interfaces and retro computing
- **Documentation:** Built with ❤️ and best practices

---

> ⭐ Star this repo if you find it helpful!
>
> Made with ❤️ by [Henrique Bonfim](https://github.com/henriquebonfim)
