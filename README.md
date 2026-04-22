# 🚀 Henrique Bonfim - Portfolio Website

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, high-performance portfolio website built with cutting-edge web technologies. Features a clean, responsive design with internationalization support, progressive web app capabilities, and optimized for SEO and performance.

## ✨ Features

- 🎨 **Modern UI/UX** - Built with React 19, Tailwind CSS 4, and DaisyUI components
- 🌍 **Internationalization** - Multi-language support (English, Spanish, Portuguese) using Lingui
- 📱 **Progressive Web App** - Offline support with service workers and PWA capabilities
- ⚡ **Lightning Fast** - Powered by Vite with optimized builds and code splitting
- 🔍 **SEO Optimized** - Structured data, meta tags, and sitemap generation
- 🎯 **Type Safe** - Full TypeScript implementation
- 🌗 **Responsive Design** - Mobile-first approach with adaptive layouts
- 🎪 **Interactive Widgets** - Spotify integration, NASA APOD, YouTube feed, and more
- 🔒 **Secure** - Content sanitization with DOMPurify
- 📊 **Firebase Hosting** - Deployed on Google's global CDN

## 🛠️ Tech Stack

### Core

- **React 19.2** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7.3** - Next-generation frontend tooling

### Styling

- **Tailwind CSS 4.1** - Utility-first CSS framework
- **DaisyUI 5.5** - Tailwind CSS component library
- **Tailwind Typography** - Beautiful typographic defaults
- **Lucide React** - Modern icon library

### Internationalization

- **Lingui 5.9** - Modern i18n framework for React
- Support for: English, Spanish, Portuguese

### Build & Optimization

- **Image Optimizer** - Automatic image optimization
- **Compression** - Gzip/Brotli compression
- **PWA Plugin** - Progressive web app generation
- **Sitemap Plugin** - Automatic sitemap generation
- **Sharp** - High-performance image processing
- **SVGO** - SVG optimization
- **Terser** - JavaScript minification

### Code Quality

- **ESLint 9** - Code linting with latest standards
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Application core
│   │   ├── contexts/          # React contexts
│   │   ├── layout/            # Layout components (header, footer)
│   │   └── providers/         # App providers
│   ├── pages/                 # Page components
│   │   └── home/              # Home page sections
│   │       ├── contents/      # Content sections (about, projects, etc.)
│   │       └── ui/            # Page-specific UI components
│   ├── shared/                # Shared resources
│   │   ├── constants/         # App constants
│   │   ├── hooks/             # Custom React hooks
│   │   ├── i18n/              # Internationalization files
│   │   ├── types/             # TypeScript types
│   │   ├── ui/                # Shared UI components
│   │   └── utils/             # Utility functions
│   └── widgets/               # Interactive widgets
│       ├── certifications.tsx # Professional certifications
│       ├── nasa.tsx           # NASA APOD integration
│       ├── spotify.tsx        # Spotify integration
│       ├── terminal.tsx       # Interactive terminal
│       └── youtube.tsx        # YouTube feed
├── public/                    # Static assets
│   ├── assets/               # Images, photos, layouts
│   ├── llms.txt              # LLM-friendly site info
│   └── robots.txt            # Search engine directives
└── dev-dist/                 # Service worker files

```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **Bun** (recommended) or **npm/yarn/pnpm**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/henriquebonfim/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `bun run dev`                | Start development server on port 8080 |
| `bun run build`              | Build for production                  |
| `bun run preview`            | Preview production build locally      |
| `bun run lint`               | Run ESLint                            |
| `bun run i18n:extract`       | Extract translation strings           |
| `bun run i18n:compile`       | Compile translations                  |
| `bun run translate:pipeline` | Extract and compile translations      |

## 🌍 Internationalization

The project supports multiple languages out of the box:

- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇧🇷 Portuguese (pt)

### Adding Translations

1. Extract translatable strings:

   ```bash
   bun run i18n:extract
   ```

2. Edit `.po` files in `src/shared/i18n/locales/`

3. Compile translations:
   ```bash
   bun run i18n:compile
   ```

Or run the full pipeline:

```bash
bun run translate:pipeline
```

## 🏗️ Build & Deployment

### Production Build

```bash
bun run build
```

The optimized build will be generated in the `dist/` directory with:

- Code splitting and lazy loading
- Minified and compressed assets
- Optimized images
- Service worker for offline support
- Generated sitemap

### Deploy to Firebase

```bash
firebase deploy
```

## ⚙️ Configuration

### Vite Configuration

- Custom aliases: `@` and `#` point to `./src`
- Port: `8080`
- Image optimization with Sharp
- PWA with workbox
- Code splitting for React and UI libraries

### Tailwind Configuration

- Custom theme extensions in [tailwind.config.ts](tailwind.config.ts)
- DaisyUI component library
- Typography plugin

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured
- React JSX runtime

## 🎯 Key Features Explained

### Progressive Web App

The site works offline and can be installed on devices thanks to the PWA plugin and service workers.

### Performance Optimization

- **Image Optimization**: Automatic compression and format conversion
- **Code Splitting**: Separate chunks for vendor libraries
- **Lazy Loading**: Components loaded on demand
- **Compression**: Gzip and Brotli compression

### SEO Features

- Structured data (JSON-LD)
- Meta tags for social sharing
- Automatic sitemap generation
- Semantic HTML structure

### Widget Integrations

- **Spotify**: Display currently playing or recent tracks
- **NASA APOD**: Show Astronomy Picture of the Day
- **YouTube**: Embed latest videos
- **Terminal**: Interactive terminal component
- **Certifications**: Professional certifications showcase

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Henrique Bonfim**

- Website: [henriquebonfim.web.app](https://henriquebonfim.web.app)
- GitHub: [@henriquebonfim](https://github.com/henriquebonfim)
- LinkedIn: [@henriquebonfim](https://www.linkedin.com/in/henriquebonfim)
- YouTube: [@henrique_bonfim](https://www.youtube.com/@henrique_bonfim)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS team for the utility-first CSS framework
- All open-source contributors

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ by Henrique Bonfim

</div>
