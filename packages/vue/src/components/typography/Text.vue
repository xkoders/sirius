<template>
  <component
    :is="tag"
    :class="textClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  as?: 'p' | 'span' | 'div' | 'label'
  variant?: 'body' | 'caption' | 'subtitle' | 'overline'
  color?: 'default' | 'subdued' | 'success' | 'warning' | 'critical' | 'info'
  alignment?: 'left' | 'center' | 'right' | 'justify'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
  variant: 'body',
  color: 'default',
  alignment: 'left',
  weight: 'normal',
  className: ''
})

const tag = computed(() => props.as)

const textClasses = computed(() => {
  const baseClasses = 'm-0'
  
  const variantClasses = {
    body: 'text-base leading-6',
    caption: 'text-sm leading-5',
    subtitle: 'text-lg leading-7',
    overline: 'text-xs leading-4 uppercase tracking-wider'
  }
  
  const colorClasses = {
    default: 'text-gray-900',
    subdued: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-orange-600',
    critical: 'text-red-600',
    info: 'text-blue-600'
  }
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  }
  
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  return classNames(
    baseClasses,
    variantClasses[props.variant],
    colorClasses[props.color],
    alignmentClasses[props.alignment],
    weightClasses[props.weight],
    props.className
  )
})
</script>
