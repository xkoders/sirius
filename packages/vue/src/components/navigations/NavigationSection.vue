<template>
  <div class="space-y-1">
    <h3 v-if="title" class="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {{ title }}
    </h3>
    
    <div class="space-y-1">
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.url"
        :class="itemClasses(item)"
        :aria-disabled="item.disabled"
      >
        <component v-if="item.icon" :is="item.icon" class="mr-3 h-6 w-6" />
        <span class="truncate">{{ item.label }}</span>
        <span v-if="item.badge" class="ml-auto">
          {{ item.badge }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { classNames } from '../../helpers'
import type { IconType } from '../../types/common'

interface NavigationItem {
  url: string
  label: string
  disabled?: boolean
  selected?: boolean
  icon?: IconType
  badge?: string
  subNavigationItems?: NavigationItem[]
}

interface Props {
  items: NavigationItem[]
  title?: string
  className?: string
}

defineProps<Props>()

const itemClasses = (item: NavigationItem) => {
  const baseClasses = 'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
  
  if (item.disabled) {
    return classNames(baseClasses, 'text-gray-400 cursor-not-allowed')
  }
  
  if (item.selected) {
    return classNames(baseClasses, 'bg-gray-900 text-white')
  }
  
  return classNames(baseClasses, 'text-gray-300 hover:bg-gray-700 hover:text-white')
}
</script>
