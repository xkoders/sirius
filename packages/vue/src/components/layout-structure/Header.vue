<template>
  <header :class="headerClasses">
    <div class="flex items-center justify-between h-16 px-6">
      <div class="flex items-center">
        <h1 class="text-xl font-semibold text-gray-900">
          Sirius UI
        </h1>
      </div>
      
      <div class="flex items-center space-x-4">
        <slot name="actions" />
      </div>
    </div>
  </header>
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

const headerClasses = computed(() => 
  classNames(
    'bg-white border-b border-gray-200 shadow-sm',
    props.className
  )
)
</script>
