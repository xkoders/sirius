<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])
const modelValue = defineModel<string>()
// ------------------ Types ------------------
interface ISearchFieldProps {
  placeholder?: string
}

const props = defineProps<ISearchFieldProps>()

// ------------------ State ------------------
const isFocused = ref(false)

// ------------------ Functions ------------------
const onBlur = () => {
  setTimeout(() => {
    isFocused.value = false
  }, 100)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('change', '')
}
</script>

<template>
  <div :class="[ 'relative']">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="pointer-events-none absolute left-2 top-1/2 -mt-2.5 h-5 w-5 text-gray-600"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-if="isFocused || !!modelValue"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="absolute right-2 top-1/2 -mt-2.5 h-5 w-5 p-px text-gray-600 cursor-pointer"
      @click="handleClear"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clip-rule="evenodd"
      />
    </svg>

    <input
      type="text"
      class="h-8 rounded-md w-full border-0 bg-transparent pl-9 pr-4 text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
      :placeholder="placeholder"
      name="q"
      v-model="modelValue"
      autofocus
      @mouseenter="isFocused = true"
      @mouseleave="onBlur"
      @blur="onBlur"
    />
  </div>
</template>
