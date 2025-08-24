<script setup lang="ts">
import { defineComponent, reactive, ref, provide } from 'vue'
import { stringify } from '../../helpers'
import {Toast} from '../feedbacks'
// import Toast from '../feedbacks/Toast.vue'
// import ErrorBoundary from '../feedbacks/ErrorBoundary.vue'

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

// ------------------ Initial State ------------------
const initialData: IDataReducer<unknown> = {
  selectedItems: [],
  select: true,
  isFramePresent: false,
  isSticky: {
    first: false,
    second: false,
    last: false,
  },
}

// ------------------ Reducer ------------------
function tableReducer<T>(
  data: IDataReducer<T>,
  action: { type: ActionType; payload: T | T[] }
): IDataReducer<T> {
  switch (action.type) {
    case 'ADD_SELECTED_ITEM':
      return {
        ...data,
        selectedItems: [...data.selectedItems, action.payload as T],
      }
    case 'REMOVE_SELECTED_ITEM':
      return {
        ...data,
        selectedItems: data.selectedItems.filter(
          (item) => stringify(item) !== stringify(action.payload)
        ),
      }
    case 'SELECT_ALL':
      return {
        ...data,
        selectedItems: action.payload as T[],
      }
    default:
      throw new Error('Unknown action: ' + (action as any).type)
  }
}

// ------------------ State ------------------
const tableResources = ref(initialData)
const toasts = ref<IToastProps[]>([])
const isFramePresent = ref(false)

function dispatch<T>(action: { type: ActionType; payload: T | T[] }) {
  tableResources.value = tableReducer(tableResources.value, action)
}

function setToasts(val: IToastProps[]) {
  toasts.value = val
}

function setIsFramePresent(val: boolean) {
  isFramePresent.value = val
}

function removeToast(item: IToastProps) {
  toasts.value = toasts.value.filter((t) => t.key !== item.key)
}

// ------------------ Provide ------------------
provide('AppContext', {
  tableResources,
  dispatch,
  toasts,
  setToasts,
  isFramePresent,
  setIsFramePresent,
})
</script>

<template>
  <div>
   

    <div
      class="fixed flex flex-col gap-1 z-[9001] left-1/2 bottom-5 -translate-x-1/2 w-fit md:min-w-[20rem] max-h-[90dvh] overflow-y-auto"
    >
      <Toast
        v-for="(item, idx) in toasts"
        :key="idx"
        :content="item.content"
        classOverride="shadow-xl rounded-xl px-2 min-h-12 flex gap-2 items-center w-full"
        :onDismiss="() => removeToast(item)"
        :duration="item.duration"
        :action="{ label: 'Undo', onAction: () => {} }"
      />
    </div>

    <slot />
  </div>
</template>
