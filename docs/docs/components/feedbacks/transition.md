---
id: transition
title: Transition
sidebar_label: Transition
---

# Transition

A transition component for smooth animations and state changes for both React and Vue applications.

## 📖 Overview

The Transition component provides smooth animations for elements entering and leaving the DOM. It supports various transition types and can be customized for different use cases across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Transition } from '@adersolutions/sirius-react';

function MyComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Transition in={isVisible} timeout={300}>
      <div>Animated content</div>
    </Transition>
  );
}
```

### Vue

```vue
<template>
  <Transition :show="isVisible" :duration="300">
    <div>Animated content</div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
import { Transition } from '@adersolutions/sirius-vue';

const isVisible = ref(false);
</script>
```

## 🎨 Transition Types

### Fade

```tsx
<Transition type="fade" in={isVisible}>
  <div>Fade transition</div>
</Transition>
```

### Slide

```tsx
<Transition type="slide" in={isVisible}>
  <div>Slide transition</div>
</Transition>
```

### Scale

```tsx
<Transition type="scale" in={isVisible}>
  <div>Scale transition</div>
</Transition>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `in` | `boolean` | `false` | Whether to show the transition |
| `type` | `'fade' \| 'slide' \| 'scale'` | `'fade'` | Type of transition |
| `timeout` | `number` | `300` | Duration in milliseconds |
| `children` | `ReactNode` | `undefined` | Content to animate |

## ♿ Accessibility

The Transition component includes accessibility features:

- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Maintains focus during transitions

## 🔗 Related Components

- **[Modal](/docs/components/overleys/modal)** - Modal transitions
- **[Toast](/docs/components/feedbacks/toast)** - Toast animations
