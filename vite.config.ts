import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Critical for Render
    port: 10000,      // Render's default port
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    strictPort: true,
  }
})
