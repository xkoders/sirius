<template>
  <div
    :class="skeletonClasses"
    :style="{ width: width ? `${width}%` : 'auto' }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  width?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  className: ''
})

const skeletonClasses = computed(() => {
  const baseClasses = 'bg-gray-200 rounded animate-pulse'
  
  const sizeClasses = {
    xs: 'h-3',
    sm: 'h-4',
    md: 'h-5',
    lg: 'h-6',
    xl: 'h-7',
    '2xl': 'h-8',
    '3xl': 'h-9',
    '4xl': 'h-10',
    '5xl': 'h-12'
  }
  
  return classNames(
    baseClasses,
    sizeClasses[props.size],
    props.className
  )
})
</script>
