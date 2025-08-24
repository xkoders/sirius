<template>
  <div :class="tableClasses">
    <div v-if="bulkActions && bulkActions.length > 0" class="border-b border-gray-200 bg-gray-50 px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <input
            type="checkbox"
            :checked="allSelected"
            @change="handleSelectAll"
            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span class="text-sm text-gray-700">{{ selectedCount }} selected</span>
        </div>
        <div class="flex space-x-2">
          <button
            v-for="action in bulkActions"
            :key="action.label"
            :class="bulkActionClasses"
            @click="action.onAction"
          >
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="promotedBulkActions && promotedBulkActions.length > 0" class="border-b border-gray-200 bg-blue-50 px-4 py-3">
      <div class="flex items-center space-x-2">
        <button
          v-for="action in promotedBulkActions"
          :key="action.label"
          :class="promotedBulkActionClasses"
          @click="action.onAction"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
    
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="heading in headings"
            :key="heading.title"
            :class="headerClasses(heading)"
          >
            {{ heading.title }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { classNames } from '../../helpers'
import type { IAction } from '../../types/common'

interface TableHeading {
  title: string
  alignment?: 'start' | 'center' | 'end'
}

interface Props {
  items: any[]
  headings: TableHeading[]
  bulkActions?: IAction[]
  promotedBulkActions?: IAction[]
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  striped: false,
  hoverable: false,
  bordered: false,
  compact: false,
  className: ''
})

const selectedItems = ref<Set<any>>(new Set())

const allSelected = computed(() => 
  selectedItems.value.size === props.items.length && props.items.length > 0
)

const selectedCount = computed(() => selectedItems.value.size)

const tableClasses = computed(() => 
  classNames(
    'bg-white border border-gray-200 rounded-lg overflow-hidden',
    props.className
  )
)

const headerClasses = (heading: TableHeading) => {
  const baseClasses = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
  
  const alignmentClasses = {
    start: 'text-left',
    center: 'text-center',
    end: 'text-right'
  }
  
  return classNames(
    baseClasses,
    heading.alignment ? alignmentClasses[heading.alignment] : 'text-left'
  )
}

const bulkActionClasses = computed(() => 
  'inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
)

const promotedBulkActionClasses = computed(() => 
  'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
)

const handleSelectAll = () => {
  if (allSelected.value) {
    selectedItems.value.clear()
  } else {
    props.items.forEach(item => selectedItems.value.add(item))
  }
}

// Expose methods for child components
defineExpose({
  selectedItems,
  selectItem: (item: any) => selectedItems.value.add(item),
  deselectItem: (item: any) => selectedItems.value.delete(item)
})
</script>
