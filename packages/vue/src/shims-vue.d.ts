declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// // Vue composition API global types
// declare global {
//   interface Window {
//     // Add any global window properties if needed
//   }
// }

// // Ensure Vue composition API types are available
// import '@vue/runtime-core'

// // Vue SFC type declarations
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     // Add any global properties here if needed
//   }
// }

// // Vue template type checking
// declare module '@vue/compiler-sfc' {
//   interface SFCDescriptor {
//     template?: {
//       content: string
//       ast: any
//     }
//     script?: {
//       content: string
//       ast: any
//     }
//     style?: Array<{
//       content: string
//       lang?: string
//     }>
//   }
// }
