<template>
  <nav
    :class="[
      'transition-all duration-500 overflow-y-auto sticky z-10 hidden border-r divide-y flex-col',
      minimized ? 'w-[61px] md:w-60 sm:flex' : ' md:flex w-60',
      state.isFramePresent ? ' h-[calc(100vh-56px)] top-14' : 'h-screen top-0',
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <slot />
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue'
interface Props {
  minimized?: boolean
}

const state = inject('AppContext') as { isFramePresent: boolean }

withDefaults(defineProps<Props>(), {
  minimized: false,
  // isFramePresent: false,
})
</script>
