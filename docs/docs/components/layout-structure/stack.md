---
id: stack
title: Stack
sidebar_label: Stack
---

# Stack

A layout component for arranging elements in a vertical or horizontal stack with consistent spacing for both React and Vue applications.

## 📖 Overview

The Stack component provides a flexible way to arrange child elements in a consistent layout with customizable spacing, alignment, and direction. It's perfect for creating organized layouts without complex CSS.

## 🚀 Basic Usage

### React

```tsx
import { Stack } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Stack>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}
```

### Vue

```vue
<template>
  <Stack>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
</template>

<script setup>
import { Stack } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Directions

### Vertical Stack (Default)

```tsx
<Stack direction="vertical">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</Stack>
```

### Horizontal Stack

```tsx
<Stack direction="horizontal">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Stack>
```

## 📏 Spacing

### Small Spacing

```tsx
<Stack gap="small">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### Medium Spacing (Default)

```tsx
<Stack gap="medium">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### Large Spacing

```tsx
<Stack gap="large">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## 🎯 Examples

### Button Group

#### React

```tsx
import { Stack, Button } from '@adersolutions/sirius-react';

function ButtonGroup() {
  return (
    <Stack direction="horizontal" gap="small">
      <Button variant="primary">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </Stack>
  );
}
```

#### Vue

```vue
<template>
  <Stack direction="horizontal" gap="small">
    <Button variant="primary">Save</Button>
    <Button variant="outline">Cancel</Button>
    <Button variant="danger">Delete</Button>
  </Stack>
</template>

<script setup>
import { Stack, Button } from '@adersolutions/sirius-vue';
</script>
```

### Form Layout

#### React

```tsx
function ContactForm() {
  return (
    <Stack gap="medium">
      <TextField label="Name" placeholder="Enter your name" />
      <TextField label="Email" type="email" placeholder="Enter your email" />
      <TextField label="Message" multiline rows={4} placeholder="Enter your message" />
      <Stack direction="horizontal" gap="small">
        <Button variant="primary">Send</Button>
        <Button variant="outline">Clear</Button>
      </Stack>
    </Stack>
  );
}
```

#### Vue

```vue
<template>
  <Stack gap="medium">
    <TextField label="Name" placeholder="Enter your name" />
    <TextField label="Email" type="email" placeholder="Enter your email" />
    <TextField label="Message" multiline :rows="4" placeholder="Enter your message" />
    <Stack direction="horizontal" gap="small">
      <Button variant="primary">Send</Button>
      <Button variant="outline">Clear</Button>
    </Stack>
  </Stack>
</template>

<script setup>
import { Stack, Button, TextField } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Direction of the stack |
| `gap` | `'small' \| 'medium' \| 'large' \| 'none'` | `'medium'` | Spacing between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Alignment of items |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around'` | `'start'` | Justification of items |
| `wrap` | `boolean` | `false` | Whether items should wrap |
| `children` | `ReactNode` | `undefined` | Stack content |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Stack component includes accessibility features:

- **Semantic HTML**: Uses appropriate HTML elements
- **Screen Reader Support**: Maintains proper reading order
- **Keyboard Navigation**: Preserves keyboard navigation flow

## 🔗 Related Components

- **[Box](/docs/components/layout-structure/box)** - Basic container component
- **[Layout](/docs/components/layout-structure/layout)** - Application layout structure
- **[Page](/docs/components/layout-structure/page)** - Full-page layout container
