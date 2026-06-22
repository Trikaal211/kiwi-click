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
  },
  build: {
    // Warn at 600kB instead of 500kB (TipTap is inherently large)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting via function form (object literal not supported in this Rollup version's types)
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || (id.includes('node_modules/react') && !id.includes('react-router') && !id.includes('react-dom'))) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router/') || id.includes('node_modules/@remix-run')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/@tanstack') || id.includes('node_modules/axios')) {
            return 'vendor-query';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
        }
      }
    }
  }
})
