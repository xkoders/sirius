<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      :class="toastClasses"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="flex">
        <div v-if="icon" class="flex-shrink-0">
          <component :is="icon" :class="iconClasses" />
        </div>
        
        <div class="ml-3 w-0 flex-1">
          <p :class="messageClasses">
            {{ content }}
          </p>
        </div>
        
        <div v-if="onDismiss" class="ml-4 flex flex-shrink-0">
          <button
            type="button"
            :class="closeButtonClasses"
            @click="$emit('dismiss')"
          >
            <span class="sr-only">Close</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { IAction, IToastProps } from '../../types'
import { computed, h } from 'vue'



const props = withDefaults(defineProps<IToastProps>(), {
  type: 'default',
  duration: 4500,
})

const emit = defineEmits<{
  dismiss: []
}>()

const icon = computed(() => {
  const icons = {
    success: () => h('svg', { class: 'h-5 w-5 text-green-400', fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', 'clip-rule': 'evenodd' })
    ]),
    error: () => h('svg', { class: 'h-5 w-5 text-red-400', fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z', 'clip-rule': 'evenodd' })
    ]),
    warning: () => h('svg', { class: 'h-5 w-5 text-yellow-400', fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z', 'clip-rule': 'evenodd' })
    ]),
    info: () => h('svg', { class: 'h-5 w-5 text-blue-400', fill: 'currentColor', viewBox: '0 0 20 20' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z', 'clip-rule': 'evenodd' })
    ])
  }
  
  return props.type && props.type !== 'default'  ? icons[props.type] : null
})

const toastClasses = computed(() => {
  const baseClasses = 'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'
  
  const typeClasses = {
    success: 'ring-green-500',
    error: 'ring-red-500',
    warning: 'ring-yellow-500',
    info: 'ring-blue-500',
    default: 'ring-gray-500'
  }
  
  return [baseClasses, typeClasses[props.type] ?? '']
})

const iconClasses = computed(() => 'h-5 w-5')

const messageClasses = computed(() => 'text-sm font-medium text-gray-900')

const closeButtonClasses = computed(() => 
  'inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
)
</script>
