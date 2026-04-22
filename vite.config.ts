import { lingui } from '@lingui/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

import { version } from './package.json';
const buildVersion = 'v' + version;

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/tailwindcss/') || id.includes('node_modules/daisyui/')) {
            return 'vendor-ui';
          }
          return undefined;
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: 'es2022',
  },
  plugins: [
    lingui(),
    tailwindcss(),
    react({
      babel: {
        plugins: ['macros'],
      },
      jsxRuntime: 'automatic',
    }),
    ViteImageOptimizer(),
    viteCompression({
      algorithm: 'brotliCompress',
      verbose: false,
      threshold: 512,
    }),
    Sitemap({
      hostname: 'https://henriquebonfim.web.app',
      generateRobotsTxt: false,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cacheId: `henrique-bonfim-${buildVersion}`,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 3000000,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: `images-${buildVersion}`,
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: `styles-${buildVersion}`,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:woff2?|ttf|eot)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: `fonts-${buildVersion}`,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 365 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:js)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: `js-${buildVersion}`,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:html)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: `html-${buildVersion}`,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
              },
              networkTimeoutSeconds: 5,
            },
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Henrique Bonfim',
        short_name: 'Henrique',
        description: `${buildVersion} - Personal website of Henrique Bonfim`,
        theme_color: '#3f3f3f',
        background_color: '#3f3f3f',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ].filter(Boolean),
}));
