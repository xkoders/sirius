import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ['src/component/'],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'alioth',
      formats: ['es', 'umd'],
      fileName: (format) => `alioth.${format}.js`,
      // formats: ['es', 'umd'],
      // fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

// import { resolve } from 'node:path'

// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'
// import EsLint from 'vite-plugin-linter'
// import tsConfigPaths from 'vite-tsconfig-paths'
// const { EsLinter, linterPlugin } = EsLint
// import * as packageJson from './package.json'
// // https://vitejs.dev/config/
// export default defineConfig((configEnv) => ({
//   plugins: [
//     react(),
//     tsConfigPaths(),
//     linterPlugin({
//       include: ['./src}/**/*.{ts,tsx}'],
//       linters: [new EsLinter({ configEnv })],
//     }),
//     dts({
//       include: ['src/component/'],
//     }),
//   ],
//   build: {
//     lib: {
//       entry: resolve('src', 'component/index.ts'),
//       name: 'ReactViteLibrary',
//       formats: ['es', 'umd'],
//       fileName: (format) => `react-vite-library.${format}.js`,
//     },
//     rollupOptions: {
//       external: [...Object.keys(packageJson.peerDependencies)],
//     },
//   },
// }))
