<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="spinnerClasses"
    viewBox="0 0 100 100"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="currentColor"
      stroke-width="10"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
      transform="matrix(1,0,0,1,0,0)"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  className?: string
  size?: 'medium' | 'large' | 'small' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  size: 'medium'
})

const SIZE = {
  large: 'h-8 w-8',
  medium: 'h-6 w-6',
  small: 'h-5 w-5',
  none: '',
}

const spinnerClasses = computed(() => 
  classNames(props.className, SIZE[props.size], 'animate-spin')
)
</script>
