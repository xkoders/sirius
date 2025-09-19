<template>
  <div :class="containerClasses">
    <fieldset>
      <legend v-if="title" :class="legendClasses">
        {{ title }}
      </legend>
      
      <div :class="choicesClasses">
        <label
          v-for="choice in choices"
          :key="choice.value"
          :class="choiceClasses"
        >
          <input
            :type="allowMultiple ? 'checkbox' : 'radio'"
            :name="name"
            :value="choice.value"
            :checked="isSelected(choice.value)"
            :disabled="choice.disabled"
            @change="handleChoiceChange(choice.value)"
            class="sr-only"
          />
          
          <div :class="radioClasses">
            <div v-if="isSelected(choice.value)" :class="radioInnerClasses" />
          </div>
          
          <div class="ml-3">
            <span :class="labelClasses">
              {{ choice.label }}
            </span>
            <p v-if="choice.description" :class="descriptionClasses">
              {{ choice.description }}
            </p>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../helpers'

interface Choice {
  label: string
  value: string
  description?: string
  disabled?: boolean
}

interface Props {
  title?: string
  titleHidden?: boolean
  choices: Choice[]
  selected?: string | string[]
  name?: string
  allowMultiple?: boolean
  defaultChecked?: Choice
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false,
  className: ''
})

const emit = defineEmits<{
  change: [selected: string | string[]]
}>()

const containerClasses = computed(() => 
  classNames(
    'w-full',
    props.className
  )
)

const legendClasses = computed(() => 
  classNames(
    'text-sm font-medium text-gray-900 mb-4',
    props.titleHidden ? 'sr-only' : ''
  )
)

const choicesClasses = computed(() => 
  'space-y-3'
)

const choiceClasses = computed(() => 
  'relative flex items-start cursor-pointer'
)

const radioClasses = computed(() => 
  'flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full'
)

const radioInnerClasses = computed(() => 
  'w-2 h-2 bg-blue-600 rounded-full'
)

const labelClasses = computed(() => 
  'text-sm font-medium text-gray-900'
)

const descriptionClasses = computed(() => 
  'text-sm text-gray-500'
)

const isSelected = (value: string): boolean => {
  if (props.allowMultiple) {
    return Array.isArray(props.selected) && props.selected.includes(value)
  }
  return props.selected === value
}

const handleChoiceChange = (value: string) => {
  let newSelected: string | string[]
  
  if (props.allowMultiple) {
    const currentSelected = Array.isArray(props.selected) ? props.selected : []
    if (currentSelected.includes(value)) {
      newSelected = currentSelected.filter(v => v !== value)
    } else {
      newSelected = [...currentSelected, value]
    }
  } else {
    newSelected = value
  }
  
  emit('change', newSelected)
}
</script>
