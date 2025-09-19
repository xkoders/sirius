<template>
  <img
    v-if="typeof src === 'string'"
    :src="src"
    :alt="alt"
    :class="imageClasses"
  />
  <component
    v-else
    :is="src"
    :class="iconClasses"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface Props {
  className?: string
  src?: string | IconType
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
  fit?: 'cover' | 'contain'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  fit: 'contain',
  className: ''
})

const SIZE = {
  xs: 'rounded-[3px] h-6 w-6',
  sm: 'rounded h-8 w-8',
  md: 'rounded h-10 w-10',
  lg: 'rounded-md h-14 w-14',
  xl: 'rounded-md h-20 w-20',
  none: '',
}

const PADDING_ICON = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2.5',
  lg: 'p-4',
  xl: 'p-6',
  none: '',
}

const imageClasses = computed(() => 
  classNames(
    SIZE[props.size],
    props.className,
    props.fit === 'contain' ? 'object-contain' : 'object-cover',
    'border border-gray-300 shadow-sm'
  )
)

const iconClasses = computed(() => 
  classNames(
    SIZE[props.size],
    PADDING_ICON[props.size],
    props.className || 'text-gray-500',
    'border border-gray-300 shadow-sm'
  )
)
</script>
