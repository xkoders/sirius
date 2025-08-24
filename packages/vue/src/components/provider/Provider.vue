<template>
  <div :class="providerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  theme?: 'light' | 'dark'
  locale?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
  locale: 'en',
  className: ''
})

const providerClasses = computed(() => 
  classNames(
    props.theme === 'dark' ? 'dark' : '',
    props.className
  )
)

// Provide theme and locale to child components
provide('theme', props.theme)
provide('locale', props.locale)
</script>
