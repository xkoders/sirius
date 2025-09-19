<template>
  <div :class="sectionClasses">
    <div class="mb-4">
      <h3 v-if="title" class="text-lg font-medium text-gray-900">
        {{ title }}
      </h3>
      <p v-if="description" class="text-sm text-gray-500">
        {{ description }}
      </p>
    </div>
    
    <div class="bg-white rounded-lg border border-gray-200 p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  title?: string
  description?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const sectionClasses = computed(() => 
  classNames(
    'lg:col-span-12',
    props.className
  )
)
</script>
