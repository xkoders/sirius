import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
