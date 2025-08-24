<template>
  <div
    v-if="!dismissed"
    :class="bannerClasses"
    role="banner"
  >
    <div class="flex">
      <div v-if="icon" class="flex-shrink-0">
        <component :is="icon" class="h-5 w-5" />
      </div>
      
      <div class="ml-3 flex-1">
        <p v-if="title" :class="titleClasses">
          {{ title }}
        </p>
        <div :class="contentClasses">
          <slot />
        </div>
      </div>
      
      <div v-if="onDismiss" class="ml-auto pl-3">
        <button
          type="button"
          :class="dismissButtonClasses"
          @click="handleDismiss"
        >
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface Props {
  title?: string
  status?: 'default' | 'info' | 'success' | 'warning' | 'critical'
  background?: 'default' | 'success' | 'warning' | 'critical' | 'info' | 'muted' | 'light' | 'dark' | 'black' | 'white' | 'subdued' | 'primary'
  icon?: IconType
  onDismiss?: () => void
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: 'default',
  background: 'default',
  className: ''
})

const emit = defineEmits<{
  dismiss: []
}>()

const dismissed = ref(false)

const bannerClasses = computed(() => {
  const baseClasses = 'rounded-lg p-4 border'
  
  const statusClasses = {
    default: 'bg-blue-50 border-blue-200 text-blue-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    critical: 'bg-red-50 border-red-200 text-red-800'
  }
  
  const backgroundClasses = {
    default: 'bg-white border-gray-200 text-gray-900',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    critical: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    muted: 'bg-gray-50 border-gray-200 text-gray-700',
    light: 'bg-gray-100 border-gray-300 text-gray-900',
    dark: 'bg-gray-800 border-gray-700 text-gray-100',
    black: 'bg-black border-gray-800 text-white',
    white: 'bg-white border-gray-200 text-gray-900',
    subdued: 'bg-gray-50 border-gray-200 text-gray-700',
    primary: 'bg-blue-600 border-blue-700 text-white'
  }
  
  return classNames(
    baseClasses,
    props.background !== 'default' ? backgroundClasses[props.background] : statusClasses[props.status],
    props.className
  )
})

const titleClasses = computed(() => 
  'text-sm font-medium'
)

const contentClasses = computed(() => 
  'text-sm'
)

const dismissButtonClasses = computed(() => 
  'inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
)

const handleDismiss = () => {
  dismissed.value = true
  emit('dismiss')
  props.onDismiss?.()
}
</script>
