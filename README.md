<div align="center">
  <a href="https://henriquebonfim.web.app">
    <img src="public/logo.webp" width="120" alt="Henrique Bonfim Logo" />
  </a>
  
  <h1>🚀 Henrique Bonfim - Personal Portfolio</h1>
  
  <p>
    <strong>Modern, responsive, and multilingual personal website showcasing professional experience and projects</strong>
  </p>

  <p>
    <a href="https://henriquebonfim.web.app">🌐 Live Demo</a> •
    <a href="#-features">✨ Features</a> •
    <a href="#-quick-start">🏃‍♂️ Quick Start</a> •
    <a href="#-tech-stack">🛠️ Tech Stack</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/version-1.0.2-blue.svg" alt="Version" />
    <img src="https://img.shields.io/github/languages/count/hpbonfim/website" alt="Languages" />
    <img src="https://img.shields.io/github/repo-size/hpbonfim/website" alt="Size" />
    <img src="https://img.shields.io/github/last-commit/hpbonfim/website" alt="Last Commit" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </p>

  <a href="https://henriquebonfim.web.app">
    <img src="https://opengraph.githubassets.com/cf9f1db04b6e4e2b7a984902d69b889f717d09cb94b8b4296ffffc16d0c73120/hpbonfim/website" width="600" alt="Website Preview" />
  </a>
</div>

## 📋 Overview

A modern, performant personal portfolio website built with cutting-edge web technologies. Features a clean, responsive design with dark/light themes, multi-language support, and interactive elements that showcase professional experience and technical expertise.

**🎯 Purpose**: Professional portfolio and personal branding platform  
**🌍 Audience**: Potential employers, collaborators, and the tech community  
**🎨 Design**: Modern minimalist with retro terminal aesthetics

---

## ✨ Features

### 🌟 **Core Features**

- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🌓 Theme Switching** - Dynamic dark/light mode with smooth transitions
- **🌐 Internationalization** - Support for English, Spanish, and Portuguese
- **⚡ Performance Optimized** - Fast loading with code splitting and lazy loading
- **🔍 SEO Friendly** - Optimized meta tags and semantic HTML

### 🎮 **Interactive Elements**

- **🖥️ Terminal UI** - Interactive command-line style interface
- **🎵 Spotify Integration** - Live music player widget
- **📺 YouTube Embed** - Integrated video content
- **🛠️ Tech Stack Carousel** - Animated technology showcase
- **📂 Project Gallery** - Interactive project portfolio

### 🚀 **Modern Web Features**

- **📱 Progressive Web App (PWA)** - Installable with offline support
- **🎨 Retro Styling** - Windows 95 inspired UI components
- **🔄 Real-time Updates** - Dynamic content loading
- **♿ Accessibility** - WCAG compliant with proper ARIA labels

---

## 🛠️ Tech Stack

### **Frontend Core**

- **⚛️ React 19** - Latest React with concurrent features
- **📘 TypeScript** - Type-safe development
- **⚡ Vite 6.3.5** - Lightning-fast build tool
- **🎨 Tailwind CSS 4.1.6** - Utility-first CSS framework

### **UI & Styling**

- **🌼 DaisyUI 5.0.35** - Component library for Tailwind
- **💾 98.css** - Retro Windows 95 styling
- **🎭 CSS Animations** - Custom transitions and effects

### **Internationalization**

- **🌍 Lingui 5.3.1** - Modern i18n framework
- **📝 PO Files** - Standard translation format
- **🔄 Dynamic Loading** - Async locale switching

### **Development Tools**

- **🧪 Vitest** - Fast unit testing framework
- **🧹 ESLint + Prettier** - Code quality and formatting
- **🐕 Husky** - Git hooks for quality assurance
- **📦 pnpm** - Fast, disk space efficient package manager

### **Deployment & Infrastructure**

- **🔥 Firebase Hosting** - Fast global CDN
- **🌐 PWA Support** - Service worker and manifest
- **🐳 Docker** - Containerized deployment option
- **🚀 Nginx** - Production web server configuration

---

## 🏗️ Architecture

### **Design Philosophy**

This project follows **Feature-Sliced Design (FSD)** principles for scalable and maintainable architecture:

```
📁 src/
├── 🚀 app/          # Application layer (setup, providers, contexts)
│   ├── contexts/    # React contexts (theme, locale)
│   ├── layout/      # Layout components
│   ├── providers/   # Context providers
│   └── index.css    # Global styles
├── 📄 pages/        # Page components (routing endpoints)
├── 🧩 widgets/      # Complex UI components
│   ├── terminal/    # Terminal-style UI
│   ├── projects/    # Project showcase
│   └── tools-carousel/ # Tech stack display
├── 🔧 features/     # Business logic (future expansion)
├── 🏢 entities/     # Business entities (future expansion)
└── 🤝 shared/       # Shared utilities and resources
    ├── constants/   # App-wide constants
    ├── hooks/       # Custom React hooks
    ├── i18n/        # Internationalization
    ├── types/       # TypeScript definitions
    └── utils/       # Helper functions
```

### **Key Architecture Principles**

- **🔄 Unidirectional Data Flow** - Clear state management
- **🧱 Component Composition** - Reusable building blocks
- **🎯 Separation of Concerns** - Clear responsibility boundaries
- **📦 Module Independence** - Loose coupling between features
- **🔌 Plugin Architecture** - Easy feature additions

---

## 🏃‍♂️ Quick Start

### **Prerequisites**

- **Node.js** v22+ ([Download](https://nodejs.org/))
- **pnpm** ([Install Guide](https://pnpm.io/installation))

### **Installation**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/hpbonfim/website.git
cd website

# 2️⃣ Install dependencies
pnpm install

# 3️⃣ Start development server
pnpm dev

# 🌐 Open http://localhost:3000
```

### **Development Workflow**

```bash
# 🔧 Development with network access
pnpm dev:host

# 🏗️ Build for production
pnpm build

# 🧹 Lint and format code
pnpm lint

# 🧪 Run tests
pnpm test

# 🌍 Extract i18n messages
pnpm i18n:extract

# 📝 Compile translations
pnpm i18n:compile
```

---

## 🐳 Deployment

### **Docker Deployment**

```bash
# Build Docker image
docker build -t henrique-website .

# Run container
docker run -p 80:80 henrique-website
```

### **Firebase Hosting**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Deploy to Firebase
firebase deploy
```

### **Environment Variables**

Create a `.env.local` file for local development:

```env
VITE_APP_TITLE="Henrique Bonfim"
VITE_SPOTIFY_PLAYLIST_ID="your_playlist_id"
```

---

## 🌐 Browser Support

| Browser     | Support                |
| ----------- | ---------------------- |
| **Chrome**  | ✅ Latest              |
| **Firefox** | ✅ Latest              |
| **Safari**  | ✅ Latest              |
| **Edge**    | ✅ Latest              |
| **Mobile**  | ✅ iOS 12+, Android 8+ |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **📝 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **🚀 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔀 Open** a Pull Request

### **Development Guidelines**

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all CI checks pass

---

## 📊 Performance

- **⚡ Lighthouse Score**: 95+ across all metrics
- **📱 Mobile Optimized**: First-class mobile experience
- **🚀 Fast Loading**: < 3s initial load time
- **📦 Bundle Size**: Optimized with code splitting

---

## 📝 License

**MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Henrique Bonfim**

- 🌐 Website: [henriquebonfim.web.app](https://henriquebonfim.web.app)
- 💼 LinkedIn: [henriquebonfim](https://linkedin.com/in/henriquebonfim)
- 🐙 GitHub: [@henriquebonfim](https://github.com/henriquebonfim)

---

## 🙏 Acknowledgments

- **🎨 Icons**: [SVG Repo](https://www.svgrepo.com/)
- **🎵 Music**: Spotify Web API
- **🎨 Design**: Inspired by terminal interfaces and retro computing
- **📚 Documentation**: Built with ❤️ and best practices

---

<div align="center">
  <p>
    <strong>⭐ Star this repo if you find it helpful!</strong>
  </p>
  <p>
    Made with ❤️ by <a href="https://github.com/hpbonfim">Henrique Bonfim</a>
  </p>
</div>
