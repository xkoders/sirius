<template>
  <nav :class="navClasses">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div v-if="logo" class="flex-shrink-0">
          <component :is="logo" class="h-8 w-auto" />
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <slot name="items" />
          </div>
        </div>
      </div>
      
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">
          <slot name="actions" />
        </div>
      </div>
      
      <div class="-mr-2 flex md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!isMobileMenuOpen"
            class="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg
            v-else
            class="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <slot name="mobile-items" />
      </div>
      
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="space-y-1 px-2">
          <slot name="mobile-actions" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface Props {
  logo?: IconType
  variant?: 'default' | 'dark' | 'light'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  className: ''
})

const isMobileMenuOpen = ref(false)

const navClasses = computed(() => {
  const baseClasses = 'bg-white shadow'
  
  const variantClasses = {
    default: 'bg-white shadow',
    dark: 'bg-gray-800',
    light: 'bg-gray-100'
  }
  
  return classNames(
    baseClasses,
    variantClasses[props.variant],
    props.className
  )
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
