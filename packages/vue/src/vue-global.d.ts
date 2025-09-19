/// <reference types="vite/client" />
/// <reference types="@vue/runtime-core" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vue Composition API global types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

// Vue template type checking
declare module '@vue/compiler-sfc' {
  interface SFCDescriptor {
    template?: {
      content: string
      ast: any
    }
    script?: {
      content: string
      ast: any
    }
    style?: Array<{
      content: string
      lang?: string
    }>
  }
}

// Vue runtime core extensions
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // Add any global properties here if needed
  }
  
  interface GlobalProperties {
    // Add any global properties here if needed
  }
}

export {}
