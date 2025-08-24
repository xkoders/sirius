<template>
    <ul class="py-3 w-full text-[15px] text-gray-950 last:flex-1 last-of-type:flex-1">
      <li v-if="title" class="text-xs font-medium px-5 py-1 text-gray-500">{{ title }}</li>
      <li v-for="(item, index) in items" :key="index" class="px-3 flex flex-col gap-1">
        <a
          :href="item.url || '#'"
          :class="itemClasses(item)"
        >
          <span v-if="item.selected && !item.subNavigationItems?.length" class="absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500"></span>
          <span v-if="item.badge" class="text-xs rounded-full bg-green-200 px-3 absolute top-1/2 right-2 w-fit h-fit -translate-y-1/2">
            {{ item.badge }}
          </span>
          <span v-if="item.icon">
              <component :is="item.icon"  v-if="item.icon" :class="['w-[18px] h-7 md:h-5', item.selected ? 'text-orange-500' : '']" />
          </span>
          <span>{{ item.label }}</span>
        </a>
  
        <ul v-if="item.subNavigationItems" class="text-slate-500 relative flex flex-col gap-px">
          <NavigationSubItems
            v-for="(subItem, subIndex) in item.subNavigationItems"
            :key="subIndex"
            :sub-item="subItem"
            :is-selected-passed="isSelectedPassed(item.subNavigationItems, subIndex)"
          />
        </ul>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import NavigationSubItems from './NavigationSubItems.vue'
  
  interface Item {
    url: string
    label: string
    icon?: any
    badge?: string
    className?: string
    disabled?: boolean
    selected?: boolean
    subNavigationItems?: Item[]
  }
  
  const props = defineProps<{
    items: Item[]
    title?: string
  }>()
  
  const isSelectedPassed = (subItems: Item[], index: number) => {
    const findIndex = subItems.findIndex(item => item.selected)
    return findIndex !== -1 ? index < findIndex : false
  }
  
  const itemClasses = (item: Item) => [
    'py-1 flex items-center flex-1 gap-3 relative hover:bg-gray-200/50 hover:text-orange-500 px-1 rounded-md',
    item.disabled ? 'pointer-events-none opacity-50' : '',
    item.className || '',
  ].filter(Boolean).join(' ')
  </script>
  