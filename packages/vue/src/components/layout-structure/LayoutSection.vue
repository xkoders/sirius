<template>
  <div :class="sectionClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  primary?: boolean
  secondary?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
  secondary: false,
  className: ''
})

const sectionClasses = computed(() => {
  const baseClasses = 'lg:col-span-6'
  
  if (props.primary) {
    return classNames(baseClasses, 'lg:col-span-8', props.className)
  }
  
  if (props.secondary) {
    return classNames(baseClasses, 'lg:col-span-4', props.className)
  }
  
  return classNames(baseClasses, props.className)
})
</script>
