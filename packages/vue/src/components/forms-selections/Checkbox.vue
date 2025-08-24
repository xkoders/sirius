<template>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input
        :id="id"
        :checked="modelValue"
        :disabled="disabled"
        :required="required"
        :class="checkboxClasses"
        type="checkbox"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
    
    <div class="ml-3 text-sm">
      <label v-if="label" :for="id" :class="labelClasses">
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1">*</span>
      </label>
      
      <p v-if="helpText" :class="helpTextClasses">
        {{ helpText }}
      </p>
      
      <p v-if="error" :class="errorClasses">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Props {
  modelValue?: boolean
  label?: string
  helpText?: string
  error?: string
  id?: string
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'error' | 'success'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  required: false,
  disabled: false,
  size: 'medium',
  variant: 'default',
  className: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const id = computed(() => props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`)

const checkboxClasses = computed(() => {
  const baseClasses = 'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
  
  const sizeClasses = {
    small: 'h-3 w-3',
    medium: 'h-4 w-4',
    large: 'h-5 w-5'
  }
  
  const variantClasses = {
    default: 'border-gray-300 focus:ring-blue-500',
    error: 'border-red-300 focus:ring-red-500',
    success: 'border-green-300 focus:ring-green-500'
  }
  
  const stateClasses = props.disabled 
    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
    : 'bg-white cursor-pointer'
  
  return classNames(
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    stateClasses,
    props.className
  )
})

const labelClasses = computed(() => 
  classNames(
    'font-medium text-gray-700',
    props.disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'
  )
)

const helpTextClasses = computed(() => 
  'text-gray-500'
)

const errorClasses = computed(() => 
  'text-red-600'
)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>
