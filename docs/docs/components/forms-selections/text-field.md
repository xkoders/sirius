---
id: text-field
title: Text Field
sidebar_label: Text Field
---

# Text Field

A versatile text input component for collecting user input with various types and validation states for both React and Vue applications.

## 📖 Overview

The Text Field component provides a consistent way to collect text input from users. It supports different input types, validation states, labels, help text, and error messages across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { TextField } from '@adersolutions/sirius-react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Email"
      value={value}
      onChange={setValue}
      placeholder="Enter your email"
    />
  );
}
```

### Vue

```vue
<template>
  <TextField
    label="Email"
    v-model="value"
    placeholder="Enter your email"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TextField } from '@adersolutions/sirius-vue';

const value = ref('');
</script>
```

## 🎨 Input Types

### Text Input

```tsx
<TextField
  label="Name"
  type="text"
  placeholder="Enter your name"
/>
```

### Email Input

```tsx
<TextField
  label="Email"
  type="email"
  placeholder="Enter your email"
/>
```

### Password Input

```tsx
<TextField
  label="Password"
  type="password"
  placeholder="Enter your password"
/>
```

### Number Input

```tsx
<TextField
  label="Age"
  type="number"
  placeholder="Enter your age"
/>
```

## 🔧 States

### Disabled

```tsx
<TextField
  label="Disabled Field"
  disabled
  value="This field is disabled"
/>
```

### Error State

```tsx
<TextField
  label="Email"
  error="Please enter a valid email address"
  value="invalid-email"
/>
```

### Success State

```tsx
<TextField
  label="Email"
  success="Email address is valid"
  value="user@example.com"
/>
```

## 🎯 Examples

### Basic Form

#### React

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-4">
      <TextField
        label="Name"
        value={formData.name}
        onChange={handleChange('name')}
        placeholder="Enter your name"
        required
      />
      
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange('email')}
        placeholder="Enter your email"
        required
      />
      
      <TextField
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange('message')}
        placeholder="Enter your message"
      />
    </form>
  );
}
```

#### Vue

```vue
<template>
  <form class="space-y-4">
    <TextField
      label="Name"
      v-model="formData.name"
      placeholder="Enter your name"
      required
    />
    
    <TextField
      label="Email"
      type="email"
      v-model="formData.email"
      placeholder="Enter your email"
      required
    />
    
    <TextField
      label="Message"
      multiline
      :rows="4"
      v-model="formData.message"
      placeholder="Enter your message"
    />
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import { TextField } from '@adersolutions/sirius-vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});
</script>
```

### Validation Example

#### React

```tsx
function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else {
      setErrors(prev => ({ ...prev, email: null }));
    }
  };

  return (
    <TextField
      label="Email"
      type="email"
      value={email}
      onChange={handleEmailChange}
      error={errors.email}
      placeholder="Enter your email"
    />
  );
}
```

#### Vue

```vue
<template>
  <TextField
    label="Email"
    type="email"
    v-model="email"
    :error="errors.email"
    placeholder="Enter your email"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import { TextField } from '@adersolutions/sirius-vue';

const email = ref('');
const errors = ref({});

const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

watch(email, (value) => {
  if (value && !validateEmail(value)) {
    errors.value.email = 'Please enter a valid email address';
  } else {
    errors.value.email = null;
  }
});
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label for the input field |
| `value` | `string` | `undefined` | Current value of the input |
| `onChange` | `(value: string) => void` | `undefined` | Callback when value changes |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `multiline` | `boolean` | `false` | Whether to render as textarea |
| `rows` | `number` | `3` | Number of rows for multiline input |
| `error` | `string` | `undefined` | Error message to display |
| `success` | `string` | `undefined` | Success message to display |
| `helpText` | `string` | `undefined` | Help text to display below input |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Text Field component includes comprehensive accessibility features:

- **Semantic HTML**: Uses proper form elements
- **Labels**: Properly associated labels with inputs
- **ARIA Support**: Includes appropriate ARIA attributes
- **Error Handling**: Properly announces errors to screen readers
- **Keyboard Navigation**: Fully keyboard accessible

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Form submission buttons
- **[Checkbox](/docs/components/forms-selections/checkbox)** - Checkbox inputs
- **[Search Field](/docs/components/forms-selections/search-field)** - Search inputs
