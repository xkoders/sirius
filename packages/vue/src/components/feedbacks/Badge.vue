<template>
  <div
    :class="badgeClasses"
  >
    <div v-if="!!type || !!icon" class="-ml-1 flex">
      <svg v-if="type" viewBox="0 0 200 200" class="w-2.5" fill="none">
        <component :is="typeIcon" />
      </svg>
      <component v-if="icon" :is="icon" class="w-4 h-4 fill-current" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface Props {
  icon?: IconType
  className?: string
  status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending'
  type?: 'incomplete' | 'halfComplete' | 'complete' | 'dashed'
}

const props = withDefaults(defineProps<Props>(), {
  status: 'default',
  className: ''
})

const STATUS = {
  info: 'bg-blue-100 text-blue-600 border border-blue-300',
  warning: 'bg-yellow-100 text-yellow-600 border border-yellow-300',
  critical: 'bg-red-100 text-red-600 border border-red-300',
  success: 'bg-green-100 text-green-600 border border-green-300',
  pending: 'bg-gray-100 text-gray-600 border border-gray-300',
  default: 'bg-white text-gray-600 border border-gray-300',
}

const TYPE_ICONS = {
  incomplete: () => h('circle', { cx: 100, cy: 100, r: 89.5, stroke: 'black', 'stroke-width': 21 }),
  halfComplete: () => h('path', {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    d: 'M101 21.0062C144.17 21.5417 179 56.7033 179 100C179 143.297 144.17 178.458 101 178.994L101 21.0062ZM101 0.00489366C155.768 0.541436 200 45.1052 200 100C200 154.895 155.768 199.459 101 199.995L101 200C100.833 200 100.667 200 100.5 199.999C100.333 200 100.167 200 100 200C44.7715 200 -1.95703e-06 155.228 -4.37114e-06 100C-6.78525e-06 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06C100.167 -4.37843e-06 100.333 0.000407602 100.5 0.00121631C100.667 0.000407587 100.833 -4.40756e-06 101 -4.41485e-06L101 0.00489366Z',
    fill: 'currentColor'
  }),
  complete: () => h('circle', { cx: 100, cy: 100, r: 100, fill: 'currentColor' }),
  dashed: () => h('circle', {
    cx: 100,
    cy: 100,
    r: 89.5,
    stroke: 'currentColor',
    'stroke-width': 21,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-dasharray': '50 50'
  }),
}

const badgeClasses = computed(() => 
  classNames(
    props.className,
    STATUS[props.status],
    'inline-flex gap-1 items-center px-2 py-0.5 rounded-full text-xs font-medium'
  )
)

const typeIcon = computed(() => 
  props.type ? TYPE_ICONS[props.type] : null
)
</script>
