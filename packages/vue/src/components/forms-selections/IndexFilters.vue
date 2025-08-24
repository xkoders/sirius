<template>
  <div :class="filtersClasses">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <div class="flex items-center space-x-4">
        <slot name="filters" />
      </div>
      
      <div class="flex items-center space-x-4">
        <slot name="sortOptions" />
      </div>
    </div>
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

const filtersClasses = computed(() => 
  classNames(
    'bg-white border border-gray-200 rounded-lg',
    props.className
  )
)
</script>
