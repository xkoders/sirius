<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type PropType } from 'vue'

interface IPopoverProps {
  children?: any
  disabled?: boolean
  items?: string
  as?: string | object
  activator?: any
}

const props = withDefaults(defineProps<IPopoverProps>(), {
  as: 'div',
})

const dropdownRef = ref<HTMLDivElement | null>(null)
const isOpen = ref(false)

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

const togglePopover = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <component
    :is="props.as"
    ref="dropdownRef"
    :class="[ 'relative inline-block text-left']"
  >
    <div
      :class="[
        props.disabled ? 'pointer-events-none opacity-75' : '',
        'focus:outline-none',
      ]"
      @click="togglePopover"
    >
      <slot name="activator" />
    </div>
    <Transition
      name="slide-down"
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute z-50 right-0 mt-1 min-w-[10rem] origin-top-right rounded-md bg-white shadow-lg border"
      >
        <slot />
      </div>
    </Transition>
  </component>
</template>