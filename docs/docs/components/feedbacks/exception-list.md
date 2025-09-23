---
id: exception-list
title: Exception List
sidebar_label: Exception List
---

# Exception List

A component for displaying lists of errors, warnings, or exceptions for both React and Vue applications.

## 📖 Overview

The Exception List component provides a structured way to display multiple errors, warnings, or exceptions in a clear, organized format. It's perfect for form validation errors, API error responses, or any scenario where you need to show multiple issues across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { ExceptionList } from '@adersolutions/sirius-react';

function MyComponent() {
  const errors = [
    { id: 1, message: 'Email is required', type: 'error' },
    { id: 2, message: 'Password must be at least 8 characters', type: 'error' }
  ];

  return (
    <ExceptionList items={errors} />
  );
}
```

### Vue

```vue
<template>
  <ExceptionList :items="errors" />
</template>

<script setup>
import { ref } from 'vue';
import { ExceptionList } from '@adersolutions/sirius-vue';

const errors = ref([
  { id: 1, message: 'Email is required', type: 'error' },
  { id: 2, message: 'Password must be at least 8 characters', type: 'error' }
]);
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{id: string, message: string, type?: 'error' \| 'warning' \| 'info'}>` | `[]` | List of exceptions |
| `title` | `string` | `undefined` | Optional title for the list |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Exception List component includes accessibility features:

- **ARIA Support**: Proper list semantics
- **Screen Reader Support**: Clear error communication

## 🔗 Related Components

- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
- **[Banner](/docs/components/feedbacks/banner)** - Error messages
- **[Toast](/docs/components/feedbacks/toast)** - Error notifications
