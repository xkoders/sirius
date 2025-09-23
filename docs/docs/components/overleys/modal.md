---
id: modal
title: Modal
sidebar_label: Modal
---

# Modal

A modal dialog component for displaying content in an overlay for both React and Vue applications.

## 📖 Overview

The Modal component provides a way to display content in a focused overlay that appears above the main content. It supports different sizes, can be dismissed, and includes proper focus management across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Modal } from '@adersolutions/sirius-react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Vue

```vue
<template>
  <div>
    <Button @click="isOpen = true">Open Modal</Button>
    <Modal :isOpen="isOpen" @close="isOpen = false">
      <h2>Modal Title</h2>
      <p>Modal content goes here</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Modal, Button } from '@adersolutions/sirius-vue';

const isOpen = ref(false);
</script>
```

## 📏 Sizes

### Small Modal

```tsx
<Modal size="small" isOpen={isOpen} onClose={onClose}>
  Small modal content
</Modal>
```

### Medium Modal (Default)

```tsx
<Modal size="medium" isOpen={isOpen} onClose={onClose}>
  Medium modal content
</Modal>
```

### Large Modal

```tsx
<Modal size="large" isOpen={isOpen} onClose={onClose}>
  Large modal content
</Modal>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Whether the modal is open |
| `onClose` | `() => void` | `undefined` | Callback when modal should close |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the modal |
| `title` | `string` | `undefined` | Modal title |
| `dismissible` | `boolean` | `true` | Whether modal can be dismissed |
| `children` | `ReactNode` | `undefined` | Modal content |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Modal component includes comprehensive accessibility features:

- **Focus Management**: Traps focus within the modal
- **ARIA Support**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: ESC key to close
- **Screen Reader Support**: Announces modal state changes

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Modal trigger buttons
- **[Tooltip](/docs/components/overleys/tooltip)** - Hover information
- **[Portal](/docs/components/overleys/portal)** - Render content in different DOM locations
