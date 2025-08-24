import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.stories.*'],
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve('src', 'main.ts'),
      name: 'siriusVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'js' : 'es.js'}`,
    },
    cssMinify: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    assetsInlineLimit: 0,
    copyPublicDir: false,
  },
})
