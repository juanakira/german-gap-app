import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // For Vite 6, we need to configure how routes are handled
    fs: {
      // Allow serving files from one level up to include the public directory
      allow: ['..'],
    },
    middlewareMode: false,
  },
  // This ensures properly working client-side routing in dev mode
  preview: {
    port: 5173,
  },
})