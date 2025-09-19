<template>
  <div :class="layoutClasses">
    <slot />
  </div>
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

const layoutClasses = computed(() => 
  classNames(
    'grid grid-cols-1 lg:grid-cols-12 gap-6',
    props.className
  )
)
</script>
