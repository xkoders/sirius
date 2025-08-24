<template>
  <td :class="cellClasses">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const cellClasses = computed(() => 
  classNames(
    'px-6 py-4 whitespace-nowrap text-sm text-gray-900',
    props.className
  )
)
</script>
