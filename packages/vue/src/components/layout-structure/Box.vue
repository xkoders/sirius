<template>
  <component
    :is="tag"
    :class="boxClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'
import { ROUNDED, SHADOW } from '../../constants'

interface Props {
  as?: string
  padding?: 'none' | 'small' | 'medium' | 'large'
  margin?: 'none' | 'small' | 'medium' | 'large'
  background?: 'default' | 'subdued' | 'success' | 'warning' | 'critical' | 'info'
  border?: 'none' | 'thin' | 'thick'
  rounded?: 'none' | 'small' | 'medium' | 'large'
  shadow?: 'none' | 'small' | 'medium' | 'large'
  sectionned?: boolean
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
  sectionned: false,
  className: ''
})

const tag = computed(() => props.as)

const PADDING = {
  none: '',
  small: 'p-2',
  medium: 'p-4',
  large: 'p-6'
}

const MARGIN = {
  none: '',
  small: 'm-2',
  medium: 'm-4',
  large: 'm-6'
}

const BACKGROUND = {
  default: 'bg-white',
  subdued: 'bg-gray-50',
  success: 'bg-green-50',
  warning: 'bg-yellow-50',
  critical: 'bg-red-50',
  info: 'bg-blue-50'
}

const BORDER = {
  none: '',
  thin: 'border border-gray-200',
  thick: 'border-2 border-gray-300'
}

const boxClasses = computed(() => 
  classNames(
    PADDING[props.padding],
    MARGIN[props.margin],
    BACKGROUND[props.background],
    BORDER[props.border],
    ROUNDED[props.rounded],
    SHADOW[props.shadow],
    props.sectionned ? 'border-t border-gray-200 pt-6' : '',
    props.className
  )
)
</script>
