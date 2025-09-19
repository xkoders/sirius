<template>
  <component
    :is="tag"
    :class="subtitleClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  as?: 'p' | 'span' | 'div'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'subdued' | 'success' | 'warning' | 'critical' | 'info'
  alignment?: 'left' | 'center' | 'right'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
  size: 'md',
  color: 'default',
  alignment: 'left',
  weight: 'normal',
  className: ''
})

const tag = computed(() => props.as)

const subtitleClasses = computed(() => {
  const baseClasses = 'm-0'
  
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  
  const colorClasses = {
    default: 'text-gray-600',
    subdued: 'text-gray-500',
    success: 'text-green-600',
    warning: 'text-orange-600',
    critical: 'text-red-600',
    info: 'text-blue-600'
  }
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  return classNames(
    baseClasses,
    sizeClasses[props.size],
    colorClasses[props.color],
    alignmentClasses[props.alignment],
    weightClasses[props.weight],
    props.className
  )
})
</script>
