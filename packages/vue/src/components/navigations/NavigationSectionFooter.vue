<template>
  <div class="border-t border-gray-200 p-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

defineProps<Props>()
</script>
