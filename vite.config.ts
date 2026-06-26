import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png', 'robots.txt'],
      manifest: {
        name: 'Plumy — Vocabulaire de la danse',
        short_name: 'Plumy',
        description: 'Apprends le vocabulaire de la danse avec Plumy, un paon passionné qui partage ses carnets de cours.',
        theme_color: '#f472b6',
        background_color: '#fdf2f8',
        display: 'standalone',
        orientation: 'portrait',
        lang: 'fr',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/(www\.youtube\.com|youtu\.be)\/.*/i,
            handler: 'NetworkOnly',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) return 'vendor-react'
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) return 'vendor-motion'
          if (id.includes('node_modules/d3') || id.includes('node_modules/internmap') || id.includes('node_modules/delaunator') || id.includes('node_modules/robust-predicates')) return 'vendor-d3'
          if (id.includes('node_modules/dexie')) return 'vendor-db'
          if (id.includes('node_modules/recharts') || id.includes('node_modules/victory-vendor')) return 'vendor-charts'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
  },
})
