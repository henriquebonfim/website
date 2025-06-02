import { lingui } from '@lingui/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import { configDefaults } from 'vitest/dist/config.js';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

/**
 * Vite configuration optimized for performance and accessibility
 * Addresses Lighthouse CI issues:
 * - unused-javascript: Improved code splitting
 * - render-blocking-resources: Better resource prioritization
 * - total-byte-weight: Added compression
 * - modern-image-formats: Added WebP conversion
 * - uses-long-cache-ttl: Improved caching strategy
 */
export default defineConfig({
  resolve: {
    alias: {
      '#': resolve(__dirname, 'src'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, 'nginx', '.firebase', '.husky'],
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      exclude: ['**/node_modules/**', '**/tests/**'],
    },
  },
  build: {
    // Improve chunking strategy to reduce unused JavaScript
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Separate chunks by module type
        // Function form of manualChunks to fix conflict with splitVendorChunkPlugin
        manualChunks: (id) => {
          // Core React libraries
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/')
          ) {
            return 'vendor-react';
          }

          // i18n libraries
          if (id.includes('node_modules/@lingui/')) {
            return 'vendor-i18n';
          }

          // UI framework libraries
          if (
            id.includes('node_modules/tailwindcss/') ||
            id.includes('node_modules/daisyui/')
          ) {
            return 'vendor-ui';
          }

          // Return undefined for other modules to let rollup decide
          return undefined;
        },
        // Add content hash for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // Increase minification to reduce total byte weight
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generate smaller Safari-compatible modern bundles
    target: 'es2018',
  },
  plugins: [
    lingui(),
    tailwindcss(),
    react({
      babel: {
        plugins: ['macros'],
      },
      // Improve JSX transformation
      jsxRuntime: 'automatic',
    }),
    // Add image optimization - addresses modern-image-formats issue
    ViteImageOptimizer(),
    // Add compression - addresses total-byte-weight issue
    viteCompression({
      algorithm: 'brotliCompress',
      verbose: false,
      threshold: 512,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cacheId: 'henrique-bonfim-v1.0.3',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 3000000,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-v1.0.3',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // Add CSS caching with versioning
          {
            urlPattern: /\.(?:css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'styles-v1.0.3',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },

          // Add font caching
          {
            urlPattern: /\.(?:woff2?|ttf|eot)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts-v1.0.3',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
              },
            },
          },

          // Add JavaScript caching with versioning
          {
            urlPattern: /\.(?:js)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'js-v1.0.3',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },

          // Add HTML caching
          {
            urlPattern: /\.(?:html)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-v1.0.3',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
              networkTimeoutSeconds: 5,
            },
          },

          // Add API caching
          {
            urlPattern: /^https:\/\/api\.(?:(?!extension).)*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache-v1.0.3',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 60, // 5 minutes
              },
              networkTimeoutSeconds: 10,
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
        description: 'Be my guest',
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
            src: 'icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-384x384.png',
            sizes: '384x384',
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
  ],
});
