# 🚀 Henrique Bonfim - Portfolio & Personal Website

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28.svg)](https://firebase.google.com/)
[![Bun](https://img.shields.io/badge/Bun-Package_Manager-fbf0df.svg)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

A modern, high-performance portfolio website built with cutting-edge web technologies. Features a clean, responsive design tailored to showcase professional experience, projects, and certifications.

## ✨ Features

- 🎨 **Modern UI/UX** - Fluid animations using `framer-motion` and styled with Tailwind CSS 4.
- 🌍 **Internationalization (i18n)** - Multi-language support (🇺🇸 English, 🇪🇸 Spanish, 🇧🇷 Portuguese) natively compiled via **LinguiJS** for zero-runtime overhead.
- 📱 **Progressive Web App (PWA)** - Fully installable with offline support, rich install UI, and Service Workers configured via Workbox.
- ⚡ **Lightning Fast** - Powered by Vite and Bun, strictly locked dependencies, optimized code splitting, and aggressive caching.
- 🔍 **SEO & Analytics** - Comprehensive Knowledge Graph JSON-LD schema integration, canonical URLs, semantic HTML, and Firebase Analytics tracking (UTM).
- 🏗️ **Feature-Sliced Design (FSD)** - Highly scalable frontend architecture separating concerns into `app`, `pages`, `widgets`, `features`, `entities`, and `shared`.
- 🔄 **Fully Automated CI/CD** - GitHub Actions workflow with preview channels for PRs and automated production deployments to Firebase Hosting.

## 🛠️ Tech Stack

- **Core:** React 19.2, TypeScript, React Router 7
- **Styling:** Tailwind CSS 4.2, Tailwind Merge, CLSX
- **Animations:** Framer Motion 12
- **i18n:** LinguiJS 6
- **Tooling:** Bun, Vite 8, ESLint 10, Prettier, Knip
- **Infrastructure:** Firebase (Hosting, Analytics), GitHub Actions

## 📁 Architecture

This project follows the **Feature-Sliced Design (FSD)** methodology:

```text
src/
├── app/          # Global setup, providers, global styles, and entry points
├── pages/        # Route components (e.g., Home, NotFound)
├── widgets/      # Standalone UI blocks (e.g., Hero, Experience, Projects)
├── entities/     # Business entities and models (e.g., Project types, Certifications)
└── shared/       # Reusable components, UI library, i18n, SEO, utilities
```

## 🚀 Getting Started

### Prerequisites

- **Bun** (Required for the locked dependency tree and fast scripts)
- **Node.js** >= 20.x

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/henriquebonfim/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```
   Navigate to `http://localhost:5173` (or the port provided by Vite).

## 📜 Available Scripts

| Command                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `bun dev`                | Start the local Vite development server                  |
| `bun run build`          | Build the application for production                     |
| `bun run preview`        | Serve the production build locally                       |
| `bun run lint`           | Run ESLint across the codebase                           |
| `bun run format`         | Run Prettier to format files                             |
| `bun run knip`           | Run Knip to find unused files, dependencies, and exports |
| `bun run i18n:extract`   | Extract strings from source code into Lingui catalogs    |
| `bun run lingui:compile` | Compile `.po` translation catalogs into optimized JS     |

## 🌍 Managing Translations

To add or update translations:

1. Add your new strings to the code using Lingui macros (e.g., `<Trans>Hello</Trans>`).
2. Run `bun run i18n:extract` to update the `.po` files inside `src/shared/i18n/locales/`.
3. Fill in the missing translations in the `.po` files.
4. Run `bun run lingui:compile` to generate the compiled catalogs.

## 🏗️ Deployment

The project is configured for seamless deployment to **Firebase Hosting** using GitHub Actions (`cd_firebase.yaml`).

- **Pull Requests:** Automatically trigger a build and deploy a temporary Preview Channel.
- **Pushes to `master`:** Automatically trigger a production build and deploy to the live channel, tagging a GitHub Release based on the commit history.

Make sure your repository has the correct `VITE_FIREBASE_*` secrets configured to enable Analytics in production.

---

<div align="center">
Made with ❤️ by Henrique Bonfim
</div>
