<template>
  <div class="w-full overflow-hidden">
    <div class="overflow-x-auto">
      <table :class="tableClasses">
        <thead v-if="$slots.header">
          <tr :class="headerRowClasses">
            <slot name="header" />
          </tr>
        </thead>
        
        <tbody v-if="$slots.default">
          <slot />
        </tbody>
        
        <tfoot v-if="$slots.footer">
          <tr :class="footerRowClasses">
            <slot name="footer" />
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  striped: false,
  hoverable: false,
  bordered: false,
  compact: false,
  className: ''
})

const tableClasses = computed(() => {
  const baseClasses = 'min-w-full divide-y divide-gray-200'
  
  const stripedClasses = props.striped ? 'divide-y divide-gray-200' : ''
  const borderedClasses = props.bordered ? 'border border-gray-200' : ''
  const compactClasses = props.compact ? 'text-sm' : 'text-base'
  
  return classNames(
    baseClasses,
    stripedClasses,
    borderedClasses,
    compactClasses,
    props.className
  )
})

const headerRowClasses = computed(() => 
  classNames(
    'bg-gray-50',
    props.bordered ? 'border-b border-gray-200' : ''
  )
)

const footerRowClasses = computed(() => 
  classNames(
    'bg-gray-50',
    props.bordered ? 'border-t border-gray-200' : ''
  )
)
</script>
