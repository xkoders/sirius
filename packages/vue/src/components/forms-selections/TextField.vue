<template>
  <div class="w-full">
    <label v-if="label" :for="id" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />
      
      <div v-if="icon" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <component :is="icon" class="h-5 w-5 text-gray-400" />
      </div>
    </div>
    
    <p v-if="error" :class="errorClasses">
      {{ error }}
    </p>
    
    <p v-else-if="helpText" :class="helpTextClasses">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  id?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  error?: string
  helpText?: string
  icon?: IconType
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'error' | 'success'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  size: 'medium',
  variant: 'default',
  className: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
}>()

const id = computed(() => props.id || `textfield-${Math.random().toString(36).substr(2, 9)}`)

const labelClasses = computed(() => 
  classNames(
    'block text-sm font-medium text-gray-700 mb-1',
    props.disabled ? 'text-gray-400' : ''
  )
)

const inputClasses = computed(() => {
  const baseClasses = 'block w-full border rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-3 py-2 text-sm',
    large: 'px-4 py-3 text-base'
  }
  
  const variantClasses = {
    default: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
    error: 'border-red-300 focus:ring-red-500 focus:border-red-500',
    success: 'border-green-300 focus:ring-green-500 focus:border-green-500'
  }
  
  const stateClasses = props.disabled 
    ? 'bg-gray-50 text-gray-500 cursor-not-allowed' 
    : 'bg-white text-gray-900'
  
  return classNames(
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    stateClasses,
    props.icon ? 'pr-10' : '',
    props.className
  )
})

const errorClasses = computed(() => 
  'mt-1 text-sm text-red-600'
)

const helpTextClasses = computed(() => 
  'mt-1 text-sm text-gray-500'
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}
</script>
