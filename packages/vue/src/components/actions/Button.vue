<template>
  <component
    :is="componentType"
    :class="[
      'h-fit flex items-center transition-all active:scale-95 active:opacity-70',
      props.fullwidth ? 'w-full' : '',
      isDisabled ? 'text-[#666] cursor-not-allowed pointer-events-none select-none bg-[#eaeaea] ring-1 ring-[#e0e0e0] opacity-70' : '',
      !hasChildrenAndIcon ? sizeClasses : sizeIconOnlyClasses,
      ALIGNMENT[props.alignment],
      ROUNDED[props.rounded],
      variantClasses,
      props.className,
    ]"
    :type="props.submit ? 'submit' : 'button'"
    :href="props.url || '#'"
    :target="props.target"
    :disabled="isDisabled"
    @click="handleClick"
    :role="buttonRole"
    :title="props.title"
    :aria-live="props.loading ? 'polite' : undefined"
    :aria-busy="props.loading"
  >
    <div v-if="props.loading" class="flex items-center justify-center">
      <Spinner :class="[sizeIconClasses, 'fill-current']" size="none" aria-hidden="true" />
    </div>
    <div v-else-if="props.icon" aria-hidden="true">
      <component
        :is="props.icon"
        :class="[
          !hasChildrenAndIcon ? sizeIconOnlyClasses : sizeIconClasses,
          'fill-current',
        ]"
      />
    </div>

    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Spinner } from '../feedbacks'
import { ROUNDED , BUTTON_VARIANT} from '../../constants/common'


const ALIGNMENT = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
}

const SIZE = {
  large: 'text-lg px-6 py-2',
  medium: 'text-sm px-4 py-1.5 !h-8',
  small: 'text-[14px] px-2 py-1',
  slim: 'text-xs px-2 py-px !h-6',
  none: '',
}

const SIZE_ICON = {
  large: 'h-6 w-6 -ml-3 mr-3',
  medium: 'h-5 w-5 -ml-2 mr-2',
  small: 'h-4 w-4 -ml-1.5 mr-1.5',
  slim: 'h-3 w-3 -ml-1 mr-1',
  none: 'h-full w-full',
}
const SIZE_ICON_ONLY = {
  large: { ibg: 'h-6 w-6 p-px', bg: '!h-[45px] !w-[45px]' },
  medium: { ibg: 'h-5 w-5 p-px', bg: '!h-[32px] !w-[32px]' },
  small: { ibg: 'h-4 w-4', bg: '!h-8 !w-8' },
  slim: { ibg: 'h-3 w-3 ', bg: '!h-6 !w-6' },
  none: { ibg: 'h-full', bg: '' },
}

const COLOR = {
  default: 'text-gray-900 hover:bg-gray-200',
  primary: 'text-indigo-600 hover:bg-indigo-100',
  success: 'text-green-600 hover:bg-green-100',
  warning: 'text-orange-600 hover:bg-orange-100',
  danger: 'text-red-600 hover:bg-red-100',
  info: 'text-blue-600 hover:bg-blue-100',
  dark: 'text-black hover:bg-gray-100',
  ghost: 'text-slate-700',
  subdued: 'hover:bg-gray-200 !border-gray-300',
  none: '',
}

// Assuming a Spinner component exists

interface IButtonProps {
  children?: any
  className?: string
  size?: 'medium' | 'large' | 'small' | 'slim' | 'none'
  variant?: keyof typeof BUTTON_VARIANT | 'none'
  submit?: boolean
  alignment?: 'center' | 'start' | 'end'
  rounded?: 'xl' | 'lg' | 'md' | 'sm' | 'none'
  fullwidth?: boolean
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: any
  link?: boolean
  url?: string
  target?: '_blank' | '_self' | '_parent'
  onClick?: () => void
  role?: string
  title?: string,
  [key: string]: any
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: 'medium',
  variant: 'default',
  alignment: 'center',
  rounded: 'xl',
})

// Determine the component type ('a' or 'button')
const componentType = computed(() => (props.url ? 'a' : 'button'))

// Check if the button is disabled
const isDisabled = computed(() => props.disabled || props.loading)

// Check if there are both children and an icon
const hasChildrenAndIcon = computed(() => {
  return props.children && props.icon
})

// Determine size classes for the button
const sizeClasses = computed(() => {
  return SIZE[props.size]
})

// Determine size classes for the icon within the button
const sizeIconClasses = computed(() => {
  return SIZE_ICON[props.size]
})

// Determine size classes for an icon-only button
const sizeIconOnlyClasses = computed(() => {
  return SIZE_ICON_ONLY[props.size].bg
})

// Determine variant classes
const variantClasses = computed(() => {
  if (props.outline || props.link) {
    let classes = [COLOR[props.variant]]
    if (props.outline) {
      classes.push('border border-current')
    }
    if (props.outline && props.variant === 'default') {
      classes.push('!border-gray-400')
    }
    if (props.link) {
      classes.push('!bg-transparent hover:underline')
    }
    return classes
  }
  return props.disabled ? '' : BUTTON_VARIANT[props.variant] ?? ''
})


// Determine button role based on props
const buttonRole = computed(() => {
  return props.role || (props.icon && !props.children ? 'button' : undefined)
})

const handleClick = (e: Event) => {
  if (isDisabled.value) {
    e.preventDefault()
  } else {
    props.onClick?.()
  }
}
</script>
