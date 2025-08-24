<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'
import { stringify } from '../../helpers'
import {Checkbox} from '../../components'

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


// ------------------ AppContext Injection ------------------
const AppContext = inject<{
  tableResources: Ref<IDataReducer<unknown>>
  dispatch: <T>(action: { type: ActionType; payload: T | T[] }) => void
}>('AppContext')

if (!AppContext) {
  throw new Error('AppContext not provided. Make sure to wrap your components with a Provider.')
}

const { tableResources, dispatch } = AppContext

const props = defineProps<{ item: unknown }>()

const isSelected = computed(() =>
  tableResources.value.selectedItems.some((i) => stringify(i) === stringify(props.item))
)

const handleChangeSelect = (checked: boolean) => {
  const type = checked ? 'ADD_SELECTED_ITEM' : 'REMOVE_SELECTED_ITEM'
  dispatch({ type, payload: props.item })
}

</script>

<template>
  <tr :class="['relative', isSelected ? 'bg-slate-100' : '']">
    <td v-if="tableResources.select" class="whitespace-nowrap py-1 text-sm font-medium text-gray-900 text-center px-2">
      <span
        v-if="isSelected"
        class="absolute inset-y-1 left-px flex items-center w-1 bg-orange-500 rounded-full"
      ></span>
      <Checkbox :checked="isSelected" name="table-row-checkbox" @update:checked="handleChangeSelect" />
    </td>
    <slot />
  </tr>
</template>