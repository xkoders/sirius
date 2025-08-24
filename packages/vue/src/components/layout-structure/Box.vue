<template>
  <component
    :is="as"
    :class="boxClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main'
  padding?: 'none' | 'small' | 'medium' | 'large'
  margin?: 'none' | 'small' | 'medium' | 'large'
  background?: 'default' | 'subdued' | 'success' | 'warning' | 'critical' | 'info'
  border?: 'none' | 'thin' | 'thick'
  rounded?: 'none' | 'small' | 'medium' | 'large'
  shadow?: 'none' | 'small' | 'medium' | 'large'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  padding: 'none',
  margin: 'none',
  background: 'default',
  border: 'none',
  rounded: 'none',
  shadow: 'none',
  className: ''
})

const boxClasses = computed(() => {
  const paddingClasses = {
    none: '',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6'
  }
  
  const marginClasses = {
    none: '',
    small: 'm-2',
    medium: 'm-4',
    large: 'm-6'
  }
  
  const backgroundClasses = {
    default: 'bg-white',
    subdued: 'bg-gray-50',
    success: 'bg-green-50',
    warning: 'bg-orange-50',
    critical: 'bg-red-50',
    info: 'bg-blue-50'
  }
  
  const borderClasses = {
    none: '',
    thin: 'border border-gray-200',
    thick: 'border-2 border-gray-300'
  }
  
  const roundedClasses = {
    none: '',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg'
  }
  
  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg'
  }
  
  return classNames(
    paddingClasses[props.padding],
    marginClasses[props.margin],
    backgroundClasses[props.background],
    borderClasses[props.border],
    roundedClasses[props.rounded],
    shadowClasses[props.shadow],
    props.className
  )
})
</script>
