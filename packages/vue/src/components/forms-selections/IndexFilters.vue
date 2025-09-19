<!-- src/components/IndexFilters.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { Text, SearchField, Button, Tabs , Popover} from '../../components'


// ------------------ Types ------------------
interface IFilters {
  key: string
  label: string
  filter: unknown
  shortcut?: boolean
}
interface IIndexFiltersProps {
  className?: string
  sort?: unknown
  filters?: IFilters[]
  onChange?: (value: boolean) => void
}

const props = defineProps<IIndexFiltersProps>()

// ------------------ State ------------------
const selectedTab = ref(0)
const showSearch = ref(false)
const activeFilters = ref<IFilters[]>([])
const initialFilters = ref<IFilters[]>(props.filters || [])
const search = ref('')

// ------------------ Functions ------------------
const handleChange = (idx: number) => {
  selectedTab.value = idx
}

const handleAddFilter = (item: IFilters) => {
  activeFilters.value = [...activeFilters.value, item]
  initialFilters.value = initialFilters.value.filter(({ key }) => key !== item.key)
}

const handleClearAll = () => {
  activeFilters.value = []
  if (props.filters) {
    initialFilters.value = props.filters
  }
}

const tabs = [
  { label: 'My Account' },
  { label: 'Company' },
  { label: 'Team Members' },
  { label: 'Billing' },
]

</script>

<template>
  <section :class="['flex flex-col']">
    <article class="p-1.5 flex gap-2">
      <div class="flex-1">
        <transition 
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
      >
          <SearchField
           v-if="showSearch"
            class="flex-1"
            v-model="search"
            placeholder="Searching for..."
          />
          <Tabs
          v-else
            :tabs="tabs"
            :onChange="handleChange"
            :selected="selectedTab"
            :canCreateTab="true"
          />
      </transition>
      </div>

      <button
        @click="showSearch = !showSearch"
        :class="[
          showSearch
            ? 'px-2 '
            : 'w-12 border border-gray-400/90 shadow-sm rounded-md hover:bg-gray-100 ',
          'h-8 flex justify-center items-center trans ',
    ]"
      >
        <transition 
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100"
          leave-to-class="transform opacity-0"
        >
          <template v-if="showSearch">
            <Text color="info" variant="bodySm" as="span">
              cancel
            </Text>
          </template>
          <div v-else class="flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </transition>
      </button>
        <Popover
        v-if="$slots.sort"
        >
            <template #activator>
              <button class="h-8 w-8 border border-gray-400/90 shadow-sm rounded-md flex justify-center items-center hover:bg-gray-100">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z"
                clip-rule="evenodd"
              />
            </svg>
              </button>
            </template>
            <slot name="sort" />
        </Popover>
    </article>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div v-if="showSearch && filters?.length">
        <slot name="filters" />
        <div class="px-2 py-3 h-full flex flex-wrap items-center gap-2 text-gray-950 border-t">
          <div v-for="(item, idx) in activeFilters" :key="idx">
            <Popover
              class="text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1"
            >
            <template #activator>
              <div v-html="item.label" class="focus:outline-none"></div>
            </template>
            <div class="p-2">
                <div v-html="item.filter"></div>
              </div>
            </Popover>
          </div>

          <Popover
            :disabled="!initialFilters.length"
            activator="text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1"
          >
            <template #activator>
              <span> Add filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 -mr-1.5"
              >
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
            </template>
            <div class="p-2">
              <ul class="p-2 text-sm flex flex-col gap-px">
                <li
                  v-for="(item, idx) in initialFilters"
                  :key="idx"
                  class="py-2 px-2 rounded-md hover:bg-gray-100"
                  @click="handleAddFilter(item)"
                >
                  {{ item.label }}
                </li>
              </ul>
            </div>
          </Popover>
          <Button v-if="activeFilters.length" variant="info" link size="slim" @click="handleClearAll">
            Clear All
          </Button>
        </div>
      </div>
    </transition>
  </section>
</template>
