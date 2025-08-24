<template>
  <div :class="className">
    <div class="flex justify-between">
      <label v-if="label" :class="labelClasses" :for="textFieldId">
        {{ label }}
        <span v-if="required" class="text-red-500 ml-1" aria-label="required">*</span>
      </label>
      <button
        v-if="labelAction"
        type="button"
        :class="labelActionClasses"
        @click="labelAction.onClick"
        :aria-label="labelAction.content"
      >
        <span v-if="labelAction.icon" aria-hidden="true">
          <component :is="labelAction.icon" />
        </span>
        {{ labelAction.content }}
      </button>
    </div>
    
    <div class="relative">
      <div v-if="prefix" class="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500" aria-hidden="true">
        <span v-if="typeof prefix === 'string'" class="text-sm flex justify-center items-center">{{ prefix }}</span>
        <component v-else :is="prefix" />
      </div>
      
      <div v-if="suffix" class="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500" aria-hidden="true">
        <span v-if="typeof suffix === 'string'" class="text-sm flex justify-center items-center">{{ suffix }}</span>
        <component v-else :is="suffix" />
      </div>
      
      <component
        :is="componentType"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :rows="multiline"
        @click="onClick"
        @blur="onBlur"
        @input="handleInput"
        :id="textFieldId"
        :aria-describedby="describedBy || undefined"
        :aria-invalid="props['aria-invalid'] ?? !!error"
        :aria-required="props['aria-required'] ?? required"
        :aria-readonly="props['aria-readonly'] ?? readOnly"
        :aria-placeholder="props['aria-placeholder'] || placeholder"
        :required="required"
        :readonly="readOnly"
        :autocomplete="autoComplete"
        v-bind="$attrs"
      />
    </div>
    
    <div v-if="helpText" :id="helpTextId" class="sr-only">
      <ExceptionList
        class="text-gray-600 mt-1"
        :gap="2"
        :items="[
          typeof helpText === 'string'
            ? { description: helpText }
            : helpText
        ]"
      />
    </div>
    
    <div v-if="error" :id="errorId" class="sr-only">
      <InlineError :message="error" />
    </div>
    
    <InlineError v-if="error" :message="error" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { classNames } from '../../helpers'
import type { IconType } from '../../types/common'
import { ExceptionList } from '../feedbacks'
import InlineError from './InlineError.vue'

interface ExceptionListItem {
  icon?: IconType
  title?: string
  description?: string
}

interface Props {
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  onClick?: (value?: unknown) => void
  onBlur?: (value?: unknown) => void
  className?: string
  inputClassName?: string
  name?: string
  label?: string
  fieldID?: string
  labelAction?: {
    icon?: IconType
    onClick?: (value?: unknown) => void
    content?: string
  }
  prefix?: string | IconType
  suffix?: string | IconType
  multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  helpText?: ExceptionListItem | string
  error?: string
  type?: string
  // Accessibility props
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
  'aria-readonly'?: boolean
  'aria-placeholder'?: string
  required?: boolean
  readOnly?: boolean
  autoComplete?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  size: 'md',
  className: ''
})

const textFieldId = ref(props.fieldID || (props.name || 'sirius-') + performance.now())

const componentType = computed(() => props.multiline ? 'textarea' : 'input')

const helpTextId = computed(() => props.helpText ? `${textFieldId.value}-help` : undefined)
const errorId = computed(() => props.error ? `${textFieldId.value}-error` : undefined)

const describedBy = computed(() => [
  props['aria-describedby'],
  helpTextId.value,
  errorId.value
].filter(Boolean).join(' '))

const SIZE = {
  sm: 'text-xs min-h-[1.8rem] py-1',
  md: 'text-sm min-h-[2rem] py-1',
  lg: 'text-md min-h-[2rem] py-1.5',
}

const labelClasses = computed(() => 
  'text-gray-900 font-normal text-sm'
)

const labelActionClasses = computed(() => 
  'text-blue-500 hover:text-blue-600 hover:underline font-normal text-sm'
)

const inputClasses = computed(() => 
  classNames(
    props.inputClassName,
    'rounded-md w-full border text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 focus:outline-none',
    SIZE[props.size],
    props.prefix ? 'pl-7' : 'pl-2',
    props.suffix ? 'pr-7' : 'pr-2',
    props.error ? 'border-red-500 bg-red-400/10' : 'border-gray-400 bg-transparent'
  )
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  props.onChange?.(target.value)
}
</script>
