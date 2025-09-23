---
id: checkbox
title: Checkbox
sidebar_label: Checkbox
---

# Checkbox

A checkbox component for binary selection input with various states and customization options for both React and Vue applications.

## 📖 Overview

The Checkbox component provides a consistent way to collect binary input from users. It supports different states, labels, help text, and error messages across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Checkbox } from '@adersolutions/sirius-react';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onChange={setChecked}
    />
  );
}
```

### Vue

```vue
<template>
  <Checkbox
    label="Accept terms and conditions"
    v-model="checked"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Checkbox } from '@adersolutions/sirius-vue';

const checked = ref(false);
</script>
```

## 🔧 States

### Checked

```tsx
<Checkbox
  label="Checked checkbox"
  checked={true}
/>
```

### Unchecked

```tsx
<Checkbox
  label="Unchecked checkbox"
  checked={false}
/>
```

### Indeterminate

```tsx
<Checkbox
  label="Indeterminate checkbox"
  indeterminate={true}
/>
```

### Disabled

```tsx
<Checkbox
  label="Disabled checkbox"
  disabled={true}
/>
```

### Error State

```tsx
<Checkbox
  label="Checkbox with error"
  error="This field is required"
/>
```

## 🎯 Examples

### Basic Form

#### React

```tsx
function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    marketing: false
  });

  const handleChange = (key) => (checked) => {
    setPreferences(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="space-y-4">
      <Checkbox
        label="Subscribe to newsletter"
        checked={preferences.newsletter}
        onChange={handleChange('newsletter')}
      />
      
      <Checkbox
        label="Enable notifications"
        checked={preferences.notifications}
        onChange={handleChange('notifications')}
      />
      
      <Checkbox
        label="Receive marketing emails"
        checked={preferences.marketing}
        onChange={handleChange('marketing')}
      />
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-4">
    <Checkbox
      label="Subscribe to newsletter"
      v-model="preferences.newsletter"
    />
    
    <Checkbox
      label="Enable notifications"
      v-model="preferences.notifications"
    />
    
    <Checkbox
      label="Receive marketing emails"
      v-model="preferences.marketing"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Checkbox } from '@adersolutions/sirius-vue';

const preferences = reactive({
  newsletter: false,
  notifications: true,
  marketing: false
});
</script>
```

### Select All Pattern

#### React

```tsx
function SelectAllExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false }
  ]);

  const allSelected = items.every(item => item.selected);
  const someSelected = items.some(item => item.selected);

  const handleSelectAll = (checked) => {
    setItems(items.map(item => ({ ...item, selected: checked })));
  };

  const handleItemChange = (id, checked) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: checked } : item
    ));
  };

  return (
    <div className="space-y-2">
      <Checkbox
        label="Select All"
        checked={allSelected}
        indeterminate={someSelected && !allSelected}
        onChange={handleSelectAll}
      />
      
      {items.map(item => (
        <div key={item.id} className="ml-6">
          <Checkbox
            label={item.name}
            checked={item.selected}
            onChange={(checked) => handleItemChange(item.id, checked)}
          />
        </div>
      ))}
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-2">
    <Checkbox
      label="Select All"
      :checked="allSelected"
      :indeterminate="someSelected && !allSelected"
      @change="handleSelectAll"
    />
    
    <div v-for="item in items" :key="item.id" class="ml-6">
      <Checkbox
        :label="item.name"
        :checked="item.selected"
        @change="(checked) => handleItemChange(item.id, checked)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Checkbox } from '@adersolutions/sirius-vue';

const items = ref([
  { id: 1, name: 'Item 1', selected: false },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: false }
]);

const allSelected = computed(() => items.value.every(item => item.selected));
const someSelected = computed(() => items.value.some(item => item.selected));

const handleSelectAll = (checked) => {
  items.value.forEach(item => item.selected = checked);
};

const handleItemChange = (id, checked) => {
  const item = items.value.find(item => item.id === id);
  if (item) item.selected = checked;
};
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label for the checkbox |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `onChange` | `(checked: boolean) => void` | `undefined` | Callback when checked state changes |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `error` | `string` | `undefined` | Error message to display |
| `helpText` | `string` | `undefined` | Help text to display below checkbox |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Checkbox component includes comprehensive accessibility features:

- **Semantic HTML**: Uses proper form elements
- **Labels**: Properly associated labels with inputs
- **ARIA Support**: Includes appropriate ARIA attributes
- **Keyboard Navigation**: Fully keyboard accessible
- **Screen Reader Support**: Optimized for assistive technologies

## 🔗 Related Components

- **[Choice List](/docs/components/forms-selections/choice-list)** - Groups of checkboxes or radio buttons
- **[Button](/docs/components/actions/button)** - Form submission buttons
- **[Text Field](/docs/components/forms-selections/text-field)** - Text input fields
