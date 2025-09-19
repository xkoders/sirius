<script setup lang="ts">
import { computed } from 'vue'

// ------------------ Types ------------------
 type TabsProps = {
  label?: string | unknown
  index?: number
  onAction?: () => void
  actions?: unknown
}
 type ITabsProps = {
  children?: unknown
  className?: string
  onChange?: (index: number, val: TabsProps) => void
  tabs: TabsProps[]
  selected?: string | number | readonly string[] | undefined
  filled?: boolean
  canCreateTab?: boolean
}

const props = defineProps<ITabsProps>()
const emit = defineEmits(['update:selected', 'change'])

const selectedIndex = computed(() => props.selected || 0)

const handleChange = (index: number, tab: TabsProps) => {
  emit('update:selected', index)
  emit('change', {index, tab})
  if (props.onChange) {
    props.onChange(index, tab)
  }
}
</script>

<template>
  <div :class="['flex-1']">
    <div class="sm:!hidden text-sm flex w-full">
      <label for="tabs" class="sr-only">
        Select a tab
      </label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 border px-2 shadow-sm"
        :value="selected"
        @change="(e: Event) => {
          const target = e.target as HTMLSelectElement;
          handleChange(Number(target.value ?? 0), tabs[Number(target.value ?? 0)])
        }"
      >
        <option v-for="(tab, idx) in tabs" :key="idx" :value="idx">
          {{ tab.label }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex gap-3 " aria-label="Tabs">
        <div
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="[
            selectedIndex === idx
              ? 'bg-orange-100 text-orange-500'
              : 'text-gray-800 hover:bg-gray-100 transition-all',
            'rounded-md px-3 h-8 text-xs font-medium cursor-pointer flex items-center',
            filled ? 'flex-1 text-center justify-center' : '',
      ]"
          @click="() => handleChange(idx, tab)"
        >
          {{ tab.label }}
        </div>
        <button
          v-if="canCreateTab"
          :class="[
            'text-gray-800 hover:bg-gray-100 transition-all rounded-md px-2 h-8',
      ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</template>
