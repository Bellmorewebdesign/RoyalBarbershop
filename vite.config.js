import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Frontend-only single page app. No backend, no proxy needed.
export default defineConfig({
  plugins: [react()],
})
