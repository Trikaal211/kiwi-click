import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin to copy _redirects file to dist after build (for Netlify SPA routing)
const copyRedirectsPlugin = {
  name: 'copy-redirects',
  closeBundle() {
    const src = path.resolve(__dirname, 'public/_redirects')
    const dest = path.resolve(__dirname, 'dist/_redirects')
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest)
      console.log('✓ _redirects copied to dist/')
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyRedirectsPlugin,
  ],
  publicDir: 'public',
  resolve: {
    dedupe: ['react', 'react-dom', '@tanstack/react-query'],
    alias: {
      '@tanstack/react-query': path.resolve(__dirname, './node_modules/@tanstack/react-query'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  }
})
