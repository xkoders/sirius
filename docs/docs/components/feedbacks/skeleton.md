---
id: skeleton
title: Skeleton
sidebar_label: Skeleton
---

# Skeleton

A skeleton loading component for displaying placeholder content while data is loading for both React and Vue applications.

## 📖 Overview

The Skeleton component provides animated placeholder content that mimics the structure of the actual content that will be loaded. It improves perceived performance and provides visual feedback during loading states across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Skeleton } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Skeleton height="20px" width="200px" />
  );
}
```

### Vue

```vue
<template>
  <Skeleton height="20px" width="200px" />
</template>

<script setup>
import { Skeleton } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Variants

### Text Skeleton

```tsx
<Skeleton variant="text" />
```

### Circular Skeleton

```tsx
<Skeleton variant="circular" width="40px" height="40px" />
```

### Rectangular Skeleton

```tsx
<Skeleton variant="rectangular" width="200px" height="100px" />
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'rectangular'` | Skeleton shape |
| `width` | `string \| number` | `undefined` | Width of the skeleton |
| `height` | `string \| number` | `undefined` | Height of the skeleton |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation type |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Skeleton component includes accessibility features:

- **Screen Reader Support**: Properly labeled as loading content
- **Reduced Motion**: Respects user's motion preferences

## 🔗 Related Components

- **[Spinner](/docs/components/feedbacks/spinner)** - Loading indicators
- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
