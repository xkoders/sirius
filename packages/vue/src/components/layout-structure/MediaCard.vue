<template>
  <div :class="cardClasses">
    <div class="flex">
      <div v-if="url" class="flex-shrink-0">
        <img
          :src="url"
          :alt="title"
          class="h-20 w-20 rounded-lg object-cover"
        />
      </div>
      
      <div class="ml-4 flex-1">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h3 v-if="title" :class="titleClasses">
              {{ title }}
            </h3>
            <div class="mt-2">
              <slot />
            </div>
          </div>
          
          <div v-if="primaryAction || promotedAction" class="ml-4 flex flex-shrink-0 space-x-2">
            <Button
              v-if="promotedAction"
              :variant="promotedAction.variant || 'primary'"
              @click="promotedAction.onAction"
            >
              {{ promotedAction.label }}
            </Button>
            
            <Button
              v-if="primaryAction"
              :variant="primaryAction.variant || 'default'"
              @click="primaryAction.onAction"
            >
              {{ primaryAction.label }}
            </Button>
          </div>
        </div>
        
        <div v-if="popoverActions && popoverActions.length > 0" class="mt-4">
          <Button
            variant="ghost"
            size="small"
            @click="showPopover = !showPopover"
          >
            Actions
          </Button>
          
          <div v-if="showPopover" class="mt-2 rounded-md border border-gray-200 bg-white p-2 shadow-lg">
            <div class="space-y-1">
              <button
                v-for="action in popoverActions"
                :key="action.label"
                :class="popoverActionClasses"
                @click="action.onAction"
              >
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { classNames } from '../../helpers'
import { Button } from '../actions'
import type { IAction } from '../../types'

interface Props {
  url?: string
  title?: string
  primaryAction?: IAction
  promotedAction?: IAction
  popoverActions?: IAction[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const showPopover = ref(false)

const cardClasses = computed(() => 
  classNames(
    'bg-white rounded-lg border border-gray-200 p-4 shadow-sm',
    props.className
  )
)

const titleClasses = computed(() => 
  'text-lg font-medium text-gray-900'
)

const popoverActionClasses = computed(() => 
  'block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md'
)
</script>
