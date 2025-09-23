---
id: toast
title: Toast
sidebar_label: Toast
---

# Toast

A toast notification component for displaying temporary messages and alerts for both React and Vue applications.

## 📖 Overview

The Toast component provides a non-intrusive way to display temporary messages to users. It supports different types, positions, and can be automatically dismissed or manually controlled across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Toast } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Toast type="success" message="Operation completed successfully!" />
  );
}
```

### Vue

```vue
<template>
  <Toast type="success" message="Operation completed successfully!" />
</template>

<script setup>
import { Toast } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Types

### Success Toast

```tsx
<Toast type="success" message="Success message" />
```

### Error Toast

```tsx
<Toast type="error" message="Error message" />
```

### Warning Toast

```tsx
<Toast type="warning" message="Warning message" />
```

### Info Toast

```tsx
<Toast type="info" message="Info message" />
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Type of toast message |
| `message` | `string` | `undefined` | Toast message content |
| `duration` | `number` | `5000` | Auto-dismiss duration in milliseconds |
| `dismissible` | `boolean` | `true` | Whether toast can be manually dismissed |
| `onDismiss` | `() => void` | `undefined` | Callback when toast is dismissed |

## ♿ Accessibility

The Toast component includes accessibility features:

- **ARIA Support**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: ESC key to dismiss
- **Focus Management**: Proper focus handling

## 🔗 Related Components

- **[Banner](/docs/components/feedbacks/banner)** - Persistent messages
- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
