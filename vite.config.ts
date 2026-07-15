import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Dev: serve at `/` (http://localhost:5173/)
// Build: GitHub Pages project site at /fishman-docs/ (override with BASE_URL)
export default defineConfig(({ command }) => ({
  base: process.env.BASE_URL ?? (command === 'build' ? '/fishman-docs/' : '/'),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
