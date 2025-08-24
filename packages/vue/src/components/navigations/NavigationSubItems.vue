<template>
  <li class="flex flex-col group/si">
    <a
      :href="subItem.url"
      :class="subItemClasses"
    >
      <span v-if="subItem.selected || isSelectedPassed" 
            :class="['-top-2 absolute left-3 w-[1.8px] z-10 bg-orange-500 rounded-full', !isSelectedPassed ? 'bottom-[18px]' : 'bottom-px']">
      </span>

      <svg v-if="!subItem.disabled"
        class="w-[18px] absolute left-[8.25px] top-1.5 isolate"
        :class="!subItem.selected ? 'invisible group-hover/si:visible text-gray-400' : ''"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14.0625L11 14.0625C7.68629 14.0625 6 12.3762 6 9.0625L6 7M19 14.0625L15.0625 18M19 14.0625L15.0625 10.125" 
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <span v-if="subItem.badge" class="absolute top-1/2 right-2 w-fit h-fit px-1.5 -translate-y-1/2 rounded-full bg-orange-500 text-xs text-white">
        {{ subItem.badge }}
      </span>
      <span v-if="subItem.icon"><component :is="subItem.icon"/></span>
      <span>{{ subItem.label }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  subItem: any
  isSelectedPassed: boolean
}>()

const subItemClasses = computed(() => [
  'py-1 flex flex-1 gap-2 relative hover:bg-gray-200/50 hover:text-orange-500 pl-8 pr-2 rounded-md',
  props.subItem.className || '',
  props.subItem.selected && !props.subItem.disabled ? 'bg-white shadow-sm text-orange-500' : '',
  props.subItem.disabled ? 'pointer-events-none opacity-50' : ''
].filter(Boolean).join(' '))
</script>
