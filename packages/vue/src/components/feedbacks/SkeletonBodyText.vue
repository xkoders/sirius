<template>
  <div :class="skeletonClasses">
    <div
      v-for="line in lines"
      :key="line"
      :class="lineClasses"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  lines?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  lines: 3,
  className: ''
})

const skeletonClasses = computed(() => 
  classNames(
    'space-y-2',
    props.className
  )
)

const lineClasses = computed(() => 
  'h-4 bg-gray-200 rounded animate-pulse'
)
</script>
