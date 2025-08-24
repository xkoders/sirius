<template>
  <div :class="emptyStateClasses">
    <div class="text-center">
      <div v-if="thumb" class="mx-auto h-12 w-12 text-gray-400">
        <img
          v-if="typeof thumb === 'string'"
          :src="thumb"
          :alt="heading"
          class="h-12 w-12"
        />
        <component
          v-else
          :is="thumb"
          class="h-12 w-12"
        />
      </div>
      
      <h3 v-if="heading" :class="headingClasses">
        {{ heading }}
      </h3>
      
      <div class="mt-2">
        <slot />
      </div>
      
      <div v-if="actions && actions.length > 0" class="mt-6">
        <div class="flex justify-center space-x-3">
          <Button
            v-for="action in actions"
            :key="action.label"
            :variant="action.variant || 'primary'"
            @click="action.onAction"
          >
            {{ action.label }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'
import { Button } from '../actions'
import type { IconType, IAction } from '../../types'

interface Props {
  heading?: string
  thumb?: string | IconType
  actions?: IAction[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const emptyStateClasses = computed(() => 
  classNames(
    'text-center py-12',
    props.className
  )
)

const headingClasses = computed(() => 
  'text-lg font-medium text-gray-900'
)
</script>
