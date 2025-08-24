<template>
  <tr :class="rowClasses">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  item: any
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const rowClasses = computed(() => 
  classNames(
    'hover:bg-gray-50',
    props.className
  )
)
</script>
