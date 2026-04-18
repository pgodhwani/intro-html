import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this site at https://pgodhwani.github.io/intro-html/
export default defineConfig({
  plugins: [react()],
  base: '/intro-html/',
})
