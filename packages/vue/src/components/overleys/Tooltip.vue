<template>
  <div
    class="relative inline-block"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <div>
      <slot />
    </div>
    
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="showTooltip"
        :class="tooltipClasses"
        role="tooltip"
      >
        {{ content }}
        <div :class="arrowClasses" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { classNames } from '../../helpers'
import { Transition } from 'vue'

interface Props {
  content: string
  align?: 'left' | 'center' | 'right'
  dark?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  dark: false,
  className: ''
})

const showTooltip = ref(false)

const tooltipClasses = computed(() => {
  const baseClasses = 'absolute z-10 px-3 py-2 text-sm font-medium rounded-md shadow-lg'
  
  const alignClasses = {
    left: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-0'
  }
  
  const themeClasses = props.dark
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900 border border-gray-200'
  
  return classNames(
    baseClasses,
    alignClasses[props.align],
    themeClasses,
    'bottom-full mb-2',
    props.className
  )
})

const arrowClasses = computed(() => {
  const baseClasses = 'absolute w-2 h-2 transform rotate-45'
  
  const alignClasses = {
    left: 'left-4',
    center: 'left-1/2 transform -translate-x-1/2',
    right: 'right-4'
  }
  
  const themeClasses = props.dark
    ? 'bg-gray-900'
    : 'bg-white border-r border-b border-gray-200'
  
  return classNames(
    baseClasses,
    alignClasses[props.align],
    themeClasses,
    'top-full -mt-1'
  )
})
</script>
