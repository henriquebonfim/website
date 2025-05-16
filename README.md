<p align="center">
    <a href="https://henriquebonfim.web.app">
        <img loading="lazy" src="public/logo.webp" width="10%" />
    </a>
</p>
<h1 align="center">Henrique Bonfim - Personal Website</h1>
<p align="center">
  <a href="https://github.com/hpbonfim/website#readme">
    <img loading="lazy" src="https://img.shields.io/badge/version-1.0.2-blue.svg?cacheSeconds=2592000"/>
  </a>
  <a href="https://github.com/hpbonfim/website#readme">
    <img loading="lazy" alt="GitHub language count" src="https://img.shields.io/github/languages/count/hpbonfim/website"/>
  </a>
  <a href="https://github.com/hpbonfim/website#readme">
    <img loading="lazy" alt="size" src="https://img.shields.io/github/repo-size/hpbonfim/website"/>
  </a>
  <a href="https://github.com/hpbonfim/website/commits/master">
    <img loading="lazy" alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hpbonfim/website">
  </a>
  <a href="https://github.com/hpbonfim/website#readme">
    <img loading="lazy" alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="https://github.com/hpbonfim/website#readme" />
  </a>
  <a href="https://github.com/hpbonfim/website/graphs/commit-activity">
    <img loading="lazy" alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="https://github.com/hpbonfim/website#readme" />
  </a>
</p>

<p align="center">
  <a href="https://henriquebonfim.web.app">
      <img loading="lazy" src="https://opengraph.githubassets.com/cf9f1db04b6e4e2b7a984902d69b889f717d09cb94b8b4296ffffc16d0c73120/hpbonfim/website" width="80%" />
  </a>
</p>

## 📋 About

This is my personal website built with modern web technologies. It showcases my skills, projects, and professional experience.

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Internationalization**: Lingui
- **Deployment**: Firebase
- **Architecture**: Feature-Sliced Design
- **Testing**: Vitest

## 🌟 Features

- Responsive design
- Dark/Light mode
- Multi-language support (English, Spanish, Portuguese)
- Interactive UI elements
- PWA support
- SEO optimized
- Performance optimized

## 📁 Project Structure

The project follows Feature-Sliced Design architecture:

```
src/
├── app/          # Application setup (providers, contexts, layouts)
├── pages/        # Page components
├── widgets/      # Complex components (composed of features/entities)
├── features/     # Business logic and processes
├── entities/     # Business entities
├── shared/       # Shared code (utils, types, constants, API)
```

## 🔧 Development

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/hpbonfim/website.git
cd website

# Install dependencies
pnpm install
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm dev:host` - Start development server accessible on network
- `pnpm build` - Build for production
- `pnpm lint` - Run linting and formatting
- `pnpm test` - Run tests
- `pnpm i18n:extract` - Extract i18n messages
- `pnpm i18n:compile` - Compile i18n messages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

Copyright © 2025 [Henrique Bonfim](https://github.com/hpbonfim).

## 🔗 Resources

- Icons: [SVG Repo](https://www.svgrepo.com/)
