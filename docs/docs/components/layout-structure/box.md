---
id: box
title: Box
sidebar_label: Box
---

# Box

A flexible container component for layout and spacing with customizable padding, margins, and styling for both React and Vue applications.

## 📖 Overview

The Box component is a fundamental layout component that provides a flexible container with customizable spacing, background colors, borders, and other styling options. It's perfect for creating consistent layouts and spacing across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Box } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Box padding="4" background="white" borderRadius="md">
      Content goes here
    </Box>
  );
}
```

### Vue

```vue
<template>
  <Box padding="4" background="white" borderRadius="md">
    Content goes here
  </Box>
</template>

<script setup>
import { Box } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Spacing Options

### Padding

```tsx
<Box padding="small">Small padding</Box>
<Box padding="medium">Medium padding</Box>
<Box padding="large">Large padding</Box>
```

### Margin

```tsx
<Box margin="small">Small margin</Box>
<Box margin="medium">Medium margin</Box>
<Box margin="large">Large margin</Box>
```

## 🎯 Examples

### Card Layout

#### React

```tsx
function CardExample() {
  return (
    <Box 
      padding="6" 
      background="white" 
      borderRadius="lg" 
      shadow="md"
      margin="4"
    >
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-gray-600">This is a card with consistent spacing and styling.</p>
    </Box>
  );
}
```

#### Vue

```vue
<template>
  <Box 
    padding="6" 
    background="white" 
    borderRadius="lg" 
    shadow="md"
    margin="4"
  >
    <h3 class="text-lg font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">This is a card with consistent spacing and styling.</p>
  </Box>
</template>

<script setup>
import { Box } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `'small' \| 'medium' \| 'large' \| 'none'` | `'none'` | Internal spacing |
| `margin` | `'small' \| 'medium' \| 'large' \| 'none'` | `'none'` | External spacing |
| `background` | `string` | `undefined` | Background color |
| `borderRadius` | `'small' \| 'medium' \| 'large' \| 'none'` | `'none'` | Border radius |
| `shadow` | `'small' \| 'medium' \| 'large' \| 'none'` | `'none'` | Box shadow |
| `border` | `string` | `undefined` | Border style |
| `children` | `ReactNode` | `undefined` | Box content |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Box component includes accessibility features:

- **Semantic HTML**: Uses appropriate HTML elements
- **Screen Reader Support**: Maintains proper reading order

## 🔗 Related Components

- **[Stack](/docs/components/layout-structure/stack)** - Layout with consistent spacing
- **[Layout](/docs/components/layout-structure/layout)** - Application layout structure
- **[Page](/docs/components/layout-structure/page)** - Full-page layout container
