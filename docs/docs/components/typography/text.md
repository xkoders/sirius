---
id: text
title: Text
sidebar_label: Text
---

# Text

A versatile text component for displaying content with consistent typography and styling for both React and Vue applications.

## 📖 Overview

The Text component provides a consistent way to display text content with various sizes, weights, colors, and styles. It ensures typography consistency across your application for both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Text } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Text size="medium" weight="normal">
      This is some text content
    </Text>
  );
}
```

### Vue

```vue
<template>
  <Text size="medium" weight="normal">
    This is some text content
  </Text>
</template>

<script setup>
import { Text } from '@adersolutions/sirius-vue';
</script>
```

## 📏 Sizes

### Small

```tsx
<Text size="small">Small text</Text>
```

### Medium (Default)

```tsx
<Text size="medium">Medium text</Text>
```

### Large

```tsx
<Text size="large">Large text</Text>
```

## 🎨 Variants

### Body Text

```tsx
<Text variant="body">Body text</Text>
```

### Caption Text

```tsx
<Text variant="caption">Caption text</Text>
```

### Code Text

```tsx
<Text variant="code">Code text</Text>
```

## 🎯 Examples

### Typography Scale

#### React

```tsx
function TypographyExample() {
  return (
    <div className="space-y-4">
      <Text size="large" weight="bold">
        Large Bold Text
      </Text>
      <Text size="medium" weight="semibold">
        Medium Semibold Text
      </Text>
      <Text size="medium" weight="normal">
        Medium Normal Text
      </Text>
      <Text size="small" weight="normal" color="gray">
        Small Gray Text
      </Text>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-4">
    <Text size="large" weight="bold">
      Large Bold Text
    </Text>
    <Text size="medium" weight="semibold">
      Medium Semibold Text
    </Text>
    <Text size="medium" weight="normal">
      Medium Normal Text
    </Text>
    <Text size="small" weight="normal" color="gray">
      Small Gray Text
    </Text>
  </div>
</template>

<script setup>
import { Text } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Text size |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | Font weight |
| `variant` | `'body' \| 'caption' \| 'code'` | `'body'` | Text variant |
| `color` | `string` | `undefined` | Text color |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `children` | `ReactNode` | `undefined` | Text content |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Text component includes accessibility features:

- **Semantic HTML**: Uses appropriate HTML elements
- **Screen Reader Support**: Proper text content for assistive technologies
- **Color Contrast**: Ensures sufficient contrast ratios

## 🔗 Related Components

- **[Heading](/docs/components/typography/heading)** - Section headings
- **[Title](/docs/components/typography/title)** - Page titles
- **[Subtitle](/docs/components/typography/subtitle)** - Supporting text
