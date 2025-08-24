<template>
  <div :class="pageClasses">
    <div v-if="backAction || title || subtitle" class="mb-6">
      <div v-if="backAction" class="mb-4">
        <a
          :href="backAction.url"
          :target="backAction.target"
          class="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
        >
          <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ backAction.label }}
        </a>
      </div>
      
      <div v-if="title || subtitle" class="mb-6">
        <h1 v-if="title" class="text-2xl font-bold text-gray-900">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="mt-2 text-sm text-gray-500">
          {{ subtitle }}
        </p>
      </div>
      
      <div v-if="primaryAction || secondaryActions || actionGroups" class="flex flex-wrap items-center gap-3">
        <Button
          v-if="primaryAction"
          :variant="primaryAction.variant || 'primary'"
          :disabled="primaryAction.disabled"
          :loading="primaryAction.loading"
          @click="primaryAction.onAction"
        >
          {{ primaryAction.label }}
        </Button>
        
        <div v-if="secondaryActions && secondaryActions.length > 0" class="flex items-center gap-2">
          <Button
            v-for="action in secondaryActions"
            :key="action.label"
            variant="ghost"
            @click="action.onAction"
          >
            {{ action.label }}
          </Button>
        </div>
        
        <div v-if="actionGroups && actionGroups.length > 0" class="flex items-center gap-2">
          <div
            v-for="group in actionGroups"
            :key="group.title"
            class="relative"
          >
            <Button
              variant="ghost"
              @click="showActionGroup = !showActionGroup"
            >
              {{ group.title }}
            </Button>
            
            <div
              v-if="showActionGroup"
              class="absolute right-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10"
            >
              <div class="py-1">
                <button
                  v-for="action in group.actions"
                  :key="action.label"
                  :class="actionButtonClasses"
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
    
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { classNames } from '../../helpers'
import { Button } from '../actions'
import type { IAction } from '../../types'

interface ActionGroup {
  title: string
  actions: IAction[]
}

interface Props {
  backAction?: IAction
  title?: string
  subtitle?: string
  primaryAction?: IAction
  secondaryActions?: IAction[]
  actionGroups?: ActionGroup[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const showActionGroup = ref(false)

const pageClasses = computed(() => 
  classNames(
    'min-h-screen bg-gray-50 p-6',
    props.className
  )
)

const actionButtonClasses = computed(() => 
  'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
)
</script>
