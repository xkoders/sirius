<template>
  <Box
    :class="[
      props.className,
      'bg-white flex flex-col lg:flex-row overflow-hidden',
    ]"
    rounded="md"
    shadow="md"
    as="section"
  >
    <div class="relative aspect-[16/9]">
      <img
        :src="props.url"
        alt=""
        class="aspect-video object-cover flex h-full w-full"
      />
    </div>
    <div class="flex-1 px-5 py-2.5">
      <div class="flex mb-2">
        <h3 class="text-lg font-medium flex-1">{{ props.title }}</h3>
        <div class="flex gap-1 items-center -mt-1.5">
          <Button
            v-if="props.promotedAction"
            link
            :disabled="props.promotedAction.disabled"
            :loading="props.promotedAction.loading"
            :icon="props.promotedAction.icon"
            @click="props.promotedAction.onAction"
            variant="info"
            size="small"
            class="-mt-0.5"
          >
            {{ props.promotedAction.label }}
          </Button>

          <Popover v-if="props.popoverActions?.length">
            <template #activator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 hover:text-gray-950 text-gray-600 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </template>
            <div class="p-3 flex flex-col gap-1">
              <Button
                v-for="(action, idx) in props.popoverActions"
                :key="idx"
                :disabled="action.disabled"
                @click="action.onAction"
                :url="action.url"
                :target="action.target"
                :rel="action.rel"
                :variant="action.variant || 'ghost'"
                fullwidth
                alignment="start"
              >
                {{ action.label }}
              </Button>
            </div>
          </Popover>
        </div>
      </div>
      <div class="text-sm text-gray-600">
        <slot />
      </div>
      <div v-if="primaryActions?.length" class="flex gap-2 mt-4">
        <Button
          v-for="(action, idx) in primaryActions"
          :key="idx"
          :disabled="action.disabled"
          @click="action.onAction"
          :url="action.url"
          :target="action.target"
          :rel="action.rel"
          :variant="action.variant || 'default'"
        >
          {{ action.label }}
        </Button>
      </div>
    </div>
  </Box>
</template>

<script setup lang="ts">
import {Box,Button,Popover } from '../../components'
import { BUTTON_VARIANT } from '../../constants/common'

interface IAction {
  label: string
  onAction?: () => void
  target?: '_blank' | '_self' | '_parent'
  url?: string
  disabled?: boolean
  loading?: boolean
  icon?: any
  variant?: keyof typeof BUTTON_VARIANT | 'none'
  rel?: 'noreferrer'
}
interface IMediaCardProps {
  children?: any
  className?: string
  title?: string
  url?: string
  promotedAction?: IAction
  primaryActions?: IAction[]
  secondaryActions?: IAction[]
  popoverActions?: IAction[]
}

const props = defineProps<IMediaCardProps>()
</script>
