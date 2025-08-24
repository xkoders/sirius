<template>
  <component
    :is="tag"
    :class="headingClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  color?: 'default' | 'subdued' | 'success' | 'warning' | 'critical' | 'info'
  alignment?: 'left' | 'center' | 'right'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h2',
  size: 'md',
  color: 'default',
  alignment: 'left',
  weight: 'semibold',
  className: ''
})

const tag = computed(() => props.as)

const SIZE = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl'
}

const COLOR = {
  default: 'text-gray-900',
  subdued: 'text-gray-600',
  success: 'text-green-600',
  warning: 'text-orange-600',
  critical: 'text-red-600',
  info: 'text-blue-600'
}

const ALIGNMENT = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
}

const WEIGHT = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

const headingClasses = computed(() => 
  classNames(
    'm-0 font-semibold tracking-tight',
    SIZE[props.size],
    COLOR[props.color],
    ALIGNMENT[props.alignment],
    WEIGHT[props.weight],
    props.className
  )
)
</script>
