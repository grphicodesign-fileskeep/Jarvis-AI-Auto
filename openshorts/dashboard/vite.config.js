import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seo from './vite-plugin-seo'

// Backend target for the dev proxy.
const backend = process.env.VITE_PROXY_TARGET || 'http://localhost:8000'
const renderer = process.env.VITE_RENDER_TARGET || 'http://localhost:3100'

// https://vitejs.dev/config/
export default defineConfig({
  // seo() runs on build only. It injects the crawler-visible homepage content
  // into #root and emits the static /alternatives pages, sitemap.xml and
  // llms.txt. See vite-plugin-seo.js.
  plugins: [react(), seo()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'openshorts.app',
      'www.openshorts.app',
      'localhost',
      '127.0.0.1'
    ],
    proxy: {
      '/api': { target: backend, changeOrigin: true },
      '/videos': { target: backend, changeOrigin: true },
      '/thumbnails': { target: backend, changeOrigin: true },
      '/gallery': { target: backend, changeOrigin: true },
      '/video': { target: backend, changeOrigin: true },
      '/render': { target: renderer, changeOrigin: true },
    }
  }
})
