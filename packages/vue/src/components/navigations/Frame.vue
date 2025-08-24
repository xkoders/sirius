<template>
  <div class="flex h-screen bg-gray-100">
    <aside v-if="sidebar" class="w-64 bg-white shadow-lg">
      <slot name="sidebar" />
    </aside>
    
    <div class="flex-1 flex flex-col overflow-hidden">
      <header v-if="$slots.header" class="bg-white shadow-sm">
        <slot name="header" />
      </header>
      
      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sidebar?: boolean
}

defineProps<Props>()
</script>
