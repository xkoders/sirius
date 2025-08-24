<template>
  <nav :class="navigationClasses">
    <div class="flex h-full flex-col">
      <div class="flex-1 space-y-1 px-2 py-4">
        <slot name="sections" />
      </div>
      
      <div v-if="$slots.footer" class="border-t border-gray-200 p-4">
        <slot name="footer" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  minimized?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  minimized: false,
  className: ''
})

const navigationClasses = computed(() => 
  classNames(
    'flex h-full w-64 flex-col bg-gray-800',
    props.minimized ? 'w-16' : 'w-64',
    props.className
  )
)
</script>
