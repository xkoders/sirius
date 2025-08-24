<template>
  <component
    :is="componentAs"
    :class="[
      roundedClasses,
      shadowClasses,
      sectionedClasses,
      'w-full relative',
      props.className,
    ]"
    v-bind="restProps"
  >
    <span
      v-if="props.shadow === 'colored'"
      class="bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 absolute z-[-1] inset-0 blur-[6px] opacity-90 m-1 mt-2"
    ></span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { ROUNDED, SHADOW } from '../../constants/common'
interface IBoxProps {
  as?: string
  children?: any
  rounded?: keyof typeof ROUNDED | 'none'
  shadow?: keyof typeof SHADOW | 'colored'
  sectionned?: boolean | string
  disabled?: boolean
  className?: string
}

const props = withDefaults(defineProps<IBoxProps>(), {
  as: 'div',
  rounded: '2xl',
  shadow: 'none',
  className: '',
  sectionned: false,
})

// Use useAttrs to get all other attributes passed to the component
const attrs = useAttrs()

// Filter out props to get the rest of the attributes
const restProps = computed(() => {
  const {
    as,
    children,
    rounded,
    shadow,
    sectionned,
    disabled,
    className,
    ...rest
  } = props
  return { ...rest, ...attrs }
})


// The `as` prop is used to determine the rendered element
const componentAs = computed(() => props.as || 'div')

// Get the correct rounded class from the constants
const roundedClasses = computed(() => ROUNDED[props.rounded])

// Compute the shadow class based on the `shadow` and `sectionned` props
const shadowClasses = computed(() => {
  if (props.sectionned && props.shadow === 'none') {
    return SHADOW.md
  }
  return SHADOW[props.shadow]
})

// Compute the sectioned classes
const sectionedClasses = computed(() => {
  return props.sectionned
    ? 'px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 bg-white'
    : ''
})
</script>
