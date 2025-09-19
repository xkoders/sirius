<script setup lang="ts">
import { computed } from 'vue'
import { Text } from '../typography'

const BACKGROUND_COLORS = {
  default: 'bg-gray-50',
  muted: 'bg-gray-100',
  subdued: 'bg-gray-200',
  dark: 'bg-gray-800',
  light: 'bg-gray-300',
  white: 'bg-white',
  black: 'bg-black',
  primary: 'bg-blue-50',
  secondary: 'bg-gray-100',
  success: 'bg-green-50',
  warning: 'bg-orange-50',
  critical: 'bg-red-50',
  info: 'bg-blue-50',
} as const

const TEXT_COLORS = {
  default: 'text-gray-900',
  muted: 'text-gray-700',
  subdued: 'text-gray-800',
  dark: 'text-white',
  light: 'text-gray-800',
  white: 'text-gray-900',
  black: 'text-white',
  primary: 'text-blue-900',
  secondary: 'text-gray-800',
  success: 'text-green-900',
  warning: 'text-orange-900',
  critical: 'text-red-900',
  info: 'text-blue-900',
} as const

type BackgroundColor = keyof typeof BACKGROUND_COLORS

const STATUS = {
  info: {
    icon: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
    className: 'bg-blue-100 text-blue-600 border border-blue-300',
  },
  warning: {
    icon: 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z',
    className: 'bg-orange-50 text-orange-600 border border-orange-300',
  },
  critical: {
    icon: 'M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z',
    className: 'bg-red-100 text-red-600 border border-red-300',
  },
  success: {
    icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
    className: 'bg-green-100 text-green-600 border border-green-300',
  },
  pending: {
    icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z',
    className: 'bg-gray-100 text-gray-600 border border-gray-300',
  },
  default: {
    icon: null,
    className: 'text-gray-600 border border-gray-300',
  },
}

const props = withDefaults(
  defineProps<{
    children?: any
    as?: string | object
    className?: string
    status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending'
    appearance?: 'default' | 'card',
    icon?: string | object,
    title?: string
    onDismiss?: () => void
    background?: BackgroundColor
  }>(),
  {
    as: 'div',
    appearance: 'default',
    status: 'default',
  },
)

const hasIcon = computed(() => {
  return !!props.icon || !!STATUS[props.status].icon
})

const getIconPath = computed(() => {
  if (typeof props.icon === 'string') {
    return props.icon
  }
  return STATUS[props.status].icon
})

const getBackgroundColor = computed(() => {
  return props.background ? BACKGROUND_COLORS[props.background] : ''
})

const getTextColor = computed(() => {
  return props.background ? TEXT_COLORS[props.background] : ''
})
</script>

<template>
  <component
    :is="props.as"
    v-if="props.appearance === 'card'"
    :class="[
      props.className,
      STATUS[props.status].className,
      getBackgroundColor,
      'w-full flex gap-3 p-3 rounded-md relative',
    ]"
  >
    <div v-if="hasIcon" class="flex-shrink-0">
      <svg
        v-if="!props.icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-4 h-4 text-white"
      >
        <path fill-rule="evenodd" :d="getIconPath || ''" clip-rule="evenodd" />
      </svg>
      <component :is="props.icon" v-else />
    </div>

    <div class="flex-1">
      <div v-if="props.title" class="flex items-center">
        <Text
          as="h5"
          variant="bodySm"
          font-weight="semibold"
          :class="['-mt-0.5 mb-0.5', getTextColor]"
        >
          {{ props.title }}
        </Text>
      </div>
      <div :class="['text-xs opacity-75', getTextColor]">
        <slot />
      </div>
    </div>

    <button
      v-if="props.onDismiss"
      @click="props.onDismiss"
      :class="[
        'w-6 h-6 p-1 absolute right-1 top-1 rounded-md cursor-pointer transition-all active:scale-95',
        props.background ? getTextColor : 'text-gray-600',
        props.background === 'dark' || props.background === 'black'
          ? 'hover:bg-white/10'
          : 'hover:bg-gray-700/10',
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>
    </button>
  </component>

  <component
    :is="props.as"
    v-else
    :class="[
      props.className,
      props.background ? getBackgroundColor : 'bg-white',
      'w-full rounded-[10px] relative shadow-sm',
    ]"
  >
    <div
      v-if="title"
      :class="[
        'flex gap-x-1 items-center p-2 rounded-t-[10px] !bg-current !border-none relative',
        STATUS[status].className,
      ]"
    >
      <div v-if="hasIcon" class="flex-shrink-0">
        <svg
          v-if="!icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4 text-white"
        >
          <path fill-rule="evenodd" :d="STATUS[props.status].icon ?? undefined" clip-rule="evenodd" />
        </svg>
        <component :is="icon" v-else />
      </div>
      
      <Text
        as="h5"
        variant="bodySm"
        font-weight="medium"
        class="flex-1 px-1 text-white"
      >
        {{ title }}
      </Text>
      
      <button
        v-if="onDismiss"
        @click="onDismiss"
        :class="[
          'w-6 h-6 p-1 hover:bg-gray-700/10 rounded-lg cursor-pointer transition-all active:scale-95',
          background ? getTextColor : 'text-white',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>
    </div>

    <div class="text-xs p-2 flex items-center gap-x-1">
      <div v-if="!title && hasIcon" class="flex-shrink-0">
        <svg
          v-if="!icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          :class="[STATUS[status].className, 'w-6 h-6 p-0.5 rounded-lg']"
        >
          <path fill-rule="evenodd" :d="getIconPath || ''" clip-rule="evenodd" />
        </svg>
        <component :is="icon" v-else />
      </div>

      <div
        :class="['flex-1 px-1', getTextColor]"
      >
        <slot />
      </div>

      <button
        v-if="onDismiss && !title"
        @click="onDismiss"
        :class="[
          'w-6 h-6 p-1 hover:bg-gray-100 rounded-md cursor-pointer transition-all active:scale-95',
          background ? getTextColor : 'text-gray-600',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </button>
    </div>
  </component>
</template>