<!-- src/components/Checkbox.vue -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

// ------------------ Types ------------------
interface ICheckbox {
  label?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  name?: string
  value?: string
  onChange?: (value: boolean, e?: Event) => void
}

const props = defineProps<ICheckbox>()
const emit = defineEmits(['update:checked'])

// ------------------ State ------------------
const cRef = ref<HTMLInputElement | null>(null)
const checkboxId = ref((props.name || 'sirius') + Math.random().toString(36).substring(2, 7))

// ------------------ Functions ------------------
const handleChange = (e: Event) => {
  const isChecked = (e.target as HTMLInputElement).checked
  emit('update:checked', isChecked)
  if (props.onChange) {
    props.onChange(isChecked, e)
  }
}

// ------------------ Watchers & Lifecycle Hooks ------------------
watch(() => props.indeterminate, (newVal) => {
  if (cRef.value) {
    cRef.value.indeterminate = newVal
  }
})

onMounted(() => {
  if (cRef.value) {
    cRef.value.indeterminate = props.indeterminate
  }
})
</script>

<template>
  <div class="flex items-center justify-center">
    <input
      type="checkbox"
      class="inp-cbx hidden"
      :name="name"
      :checked="checked"
      @change="handleChange"
      :disabled="disabled"
      ref="cRef"
      :id="checkboxId"
    />
    <label
      :for="checkboxId"
      :class="[
        'cbx cursor-pointer select-none flex items-center text-sm gap-2',
        'checkbox',
        disabled ? 'disabled' : '',
        indeterminate ? `checkbox-indeterminate` : '',
  ]"
    >
      <span class="relative w-5 h-5 rounded align-middle scale-100 border hover:border-orange-500 transition-all border-gray-400">
        <svg
          :class="[
            indeterminate ? 'indeterminate stroke-orange-500' : '',
            'transition-all duration-300 delay-100 absolute inset-0 fill-none ',
      ]"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          stroke-dasharray="26"
          stroke-dashoffset="26"
        >
          <path
            v-if="indeterminate"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </span>
      <span v-if="label" class="flex-1">{{ label }}</span>
    </label>
  </div>
</template>
