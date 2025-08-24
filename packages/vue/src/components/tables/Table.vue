<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'
import { Checkbox, Popover } from '../../components'


// ------------------ Types ------------------
interface IDataReducer<T> {
  selectedItems: T[]
  select: boolean
  isFramePresent: boolean
  isSticky: {
    first: boolean
    second: boolean
    last: boolean
  }
}

type ActionType = 'ADD_SELECTED_ITEM' | 'REMOVE_SELECTED_ITEM' | 'SELECT_ALL'

export interface IToastProps {
  key: string | number
  content: string
  duration?: number
}

interface IBase {
  className?: string
}

interface IHeadings {
  title: string
  alignment?: 'start' | 'center' | 'end'
}
interface IBulkActions {
  label: string
  onAction?: () => void
}

interface ITableProps extends IBase {
  headings: IHeadings[]
  items?: unknown[]
  bulkActions?: IBulkActions[]
  promotedBulkActions?: IBulkActions[]
}

// ------------------ AppContext Injection ------------------
const AppContext = inject<{
  tableResources: Ref<IDataReducer<unknown>>
  dispatch: <T>(action: { type: ActionType; payload: T | T[] }) => void
}>('AppContext')

if (!AppContext) {
  throw new Error('AppContext not provided. Make sure to wrap your components with a Provider.')
}

const { tableResources, dispatch } = AppContext

const props = defineProps<ITableProps>()

const checkboxType = computed(() => {
  const selectedCount = tableResources.value.selectedItems.length
  const itemsCount = (props.items ?? []).length
  if (selectedCount && selectedCount < itemsCount) {
    return 'intermediate'
  } else if (selectedCount === itemsCount) {
    return 'all'
  }
  return 'none'
})

const handleSelectAll = (value: boolean) => {
  dispatch({
    type: 'SELECT_ALL',
    payload: value ? props.items ?? [] : [],
  })
}
</script>

<template>
  <div class="relative">
    <div class="overflow-x-auto h-fit rounded-md border shadow-sm grid">
      <table :class="['min-w-full divide-y divide-gray-300', className]">
        <thead class="bg-slate-200/70">
          <tr>
            <th v-if="tableResources.select" class=" text-sm text-gray-900 align-middle">
              <Checkbox
                :checked="checkboxType === 'all'"
                :indeterminate="checkboxType === 'intermediate'"
                @update:modelValue="handleSelectAll"
              />
            </th>
            <th
              v-for="(heading, index) in headings"
              :key="index"
              scope="col"
              class="py-2 pl-4 pr-3 text-left text-xs font-normal text-gray-900 sm:pl-6"
            >
              {{ heading.title }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <slot />
        </tbody>
      </table>
    </div>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div :v-if="!!tableResources.selectedItems?.length" class="absolute top-full translate-y-1 left-1/2 -translate-x-1/2 z-50 bg-white p-4 shadow-lg rounded-md border flex gap-4 h-fit">
        <div v-if="promotedBulkActions" class="flex">
          <button
            v-for="(action, index) in promotedBulkActions"
            :key="index"
            @click="action.onAction"
            class="bg-white shadow-sm border border-gray-400 hover:text-indigo-700 flex justify-center items-center h-9 px-3 rounded-md"
          >
            {{ action.label }}
          </button>
        </div>
        <Popover v-if="bulkActions" class="relative h-9">
         
        <template #activator>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-9 h-9 p-1.5 bg-white shadow-sm border border-gray-400 rounded-md"
            >
              <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
        </template>
          <div class="absolute z-10 bg-white shadow bottom-11 w-40 rounded-md flex flex-col p-3 right-0 text-gray-600 text-[15px]">
            <button
              v-for="(action, index) in bulkActions"
              :key="index"
              @click="action.onAction"
              class="hover:text-indigo-700 flex items-center h-9 px-3 rounded-md"
            >
              {{ action.label }}
            </button>
          </div>
        </Popover>
      </div>
    </Transition>
  </div>
</template>
