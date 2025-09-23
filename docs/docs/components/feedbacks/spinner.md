---
id: spinner
title: Spinner
sidebar_label: Spinner
---

# Spinner

A loading spinner component for indicating ongoing processes and operations for both React and Vue applications.

## 📖 Overview

The Spinner component provides visual feedback during loading states, data fetching, and other asynchronous operations. It supports multiple sizes and can be customized with different colors and animations across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Spinner } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Spinner />
  );
}
```

### Vue

```vue
<template>
  <Spinner />
</template>

<script setup>
import { Spinner } from '@adersolutions/sirius-vue';
</script>
```

## 📏 Sizes

### Small

```tsx
<Spinner size="small" />
```

### Medium (Default)

```tsx
<Spinner size="medium" />
```

### Large

```tsx
<Spinner size="large" />
```

## 🎯 Examples

### Basic Spinners

#### React

```tsx
import { Spinner } from '@adersolutions/sirius-react';

function SpinnerExample() {
  return (
    <div className="flex gap-4 items-center">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-4 items-center">
    <Spinner size="small" />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
</template>

<script setup>
import { Spinner } from '@adersolutions/sirius-vue';
</script>
```

### Loading States

#### React

```tsx
function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await fetchData();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleClick}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"
    >
      {isLoading && <Spinner size="small" />}
      {isLoading ? 'Loading...' : 'Load Data'}
    </button>
  );
}
```

#### Vue

```vue
<template>
  <button 
    @click="handleClick"
    :disabled="isLoading"
    class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"
  >
    <Spinner v-if="isLoading" size="small" />
    {{ isLoading ? 'Loading...' : 'Load Data' }}
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { Spinner } from '@adersolutions/sirius-vue';

const isLoading = ref(false);

const handleClick = async () => {
  isLoading.value = true;
  try {
    await fetchData();
  } finally {
    isLoading.value = false;
  }
};
</script>
```

### Page Loading

#### React

```tsx
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Spinner size="large" />
        <p className="mt-4 text-gray-600">Loading page...</p>
      </div>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <Spinner size="large" />
      <p class="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
</template>

<script setup>
import { Spinner } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large' \| 'none'` | `'medium'` | Size of the spinner |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Spinner component includes accessibility features:

- **ARIA Support**: Includes `aria-hidden="true"` for decorative spinners
- **Screen Reader Support**: Can be labeled for screen readers when needed

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Buttons with loading states
- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
- **[Toast](/docs/components/feedbacks/toast)** - Notification toasts