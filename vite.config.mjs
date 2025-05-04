import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist', // or 'docs' if using GitHub Pages' docs folder
    emptyOutDir: true,
  }
})