<template>
  <component
    :is="tag"
    :class="stackClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'


interface Props {
  as?: string
  spacing?: 'none' | 'small' | 'medium' | 'large'
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  distribution?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly'
  direction?: 'horizontal' | 'vertical'
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

const tag = computed(() => props.as)

const SPACING = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6'
}

const ALIGNMENT = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
}

const DISTRIBUTION = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  spaceBetween: 'justify-between',
  spaceAround: 'justify-around',
  spaceEvenly: 'justify-evenly'
}

const DIRECTION = {
  horizontal: 'flex-row',
  vertical: 'flex-col'
}

const stackClasses = computed(() => 
  classNames(
    'flex',
    SPACING[props.spacing],
    ALIGNMENT[props.alignment],
    DISTRIBUTION[props.distribution],
    DIRECTION[props.direction],
    props.wrap ? 'flex-wrap' : 'flex-nowrap',
    props.className
  )
)
</script>
