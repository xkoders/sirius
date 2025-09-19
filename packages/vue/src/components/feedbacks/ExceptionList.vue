<template>
  <ul :class="listClasses">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="itemClasses"
    >
      <div class="flex">
        <div v-if="item.icon" class="flex-shrink-0">
          <component :is="item.icon" class="h-5 w-5 text-gray-400" />
        </div>
        
        <div class="ml-3">
          <p v-if="item.title" :class="titleClasses">
            {{ item.title }}
          </p>
          <p v-if="item.description" :class="descriptionClasses">
            {{ item.description }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface ExceptionItem {
  icon?: IconType
  title?: string
  description?: string
}

interface Props {
  items: ExceptionItem[]
  gap?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  gap: 2,
  className: ''
})

const listClasses = computed(() => 
  classNames(
    'list-none p-0 m-0',
    props.className
  )
)

const itemClasses = computed(() => 
  classNames(
    'flex items-start',
    `mb-${props.gap}`
  )
)

const titleClasses = computed(() => 
  'text-sm font-medium text-gray-900'
)

const descriptionClasses = computed(() => 
  'text-sm text-gray-600'
)
</script>
