import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dhildeb.github.io/typer/',
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
