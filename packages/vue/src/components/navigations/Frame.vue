<script setup lang="ts">
/* No need to define props for header/sidebar since we’ll use slots */
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex flex-col">
    <!-- Header slot -->
    <slot name="header" />

    <div class="flex w-full">
      <!-- Sidebar slot -->
      <slot name="sidebar" />

      <!-- Main content slot -->
      <slot />
    </div>
  </div>
</template>
