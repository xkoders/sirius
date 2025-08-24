import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Development mode - use React entry point for hot reload
    return {
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
    }
  }

  // Build mode - library configuration
  return {
    plugins: [
      react(),
      tsConfigPaths(),
      dts({
        insertTypesEntry: true,
        include: ['src/**/*'],
        exclude: ['src/examples/**/*', 'src/App.tsx', 'src/**/*.test.*', 'src/**/*.stories.*'],
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
        name: 'sirius',
        formats: ['es', 'cjs'],
        fileName: (format) => `sirius.${format === 'cjs' ? 'cjs' : 'es.js'}`,
      },
      cssMinify: true,
      rollupOptions: {
        external: [...Object.keys(packageJson.peerDependencies)],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      // Exclude public assets from build
      assetsInlineLimit: 0,
      copyPublicDir: false,
    },
  }
})