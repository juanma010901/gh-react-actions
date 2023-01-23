import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://juanma010901.github.io/GitHub-Actions/',
  plugins: [react()],
})
