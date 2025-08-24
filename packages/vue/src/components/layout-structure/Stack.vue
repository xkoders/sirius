<template>
  <component
    :is="as"
    :class="stackClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main'
  spacing?: 'none' | 'small' | 'medium' | 'large'
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  distribution?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  direction?: 'vertical' | 'horizontal'
  wrap?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  spacing: 'medium',
  alignment: 'start',
  distribution: 'start',
  direction: 'vertical',
  wrap: false,
  className: ''
})

const stackClasses = computed(() => {
  const baseClasses = 'flex'
  
  const directionClasses = {
    vertical: 'flex-col',
    horizontal: 'flex-row'
  }
  
  const spacingClasses = {
    none: '',
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6'
  }
  
  const alignmentClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }
  
  const distributionClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly'
  }
  
  const wrapClasses = props.wrap ? 'flex-wrap' : 'flex-nowrap'
  
  return classNames(
    baseClasses,
    directionClasses[props.direction],
    spacingClasses[props.spacing],
    alignmentClasses[props.alignment],
    distributionClasses[props.distribution],
    wrapClasses,
    props.className
  )
})
</script>
