---
id: error-boundary
title: Error Boundary
sidebar_label: Error Boundary
---

# Error Boundary

A React error boundary component for catching and handling JavaScript errors in component trees for both React and Vue applications.

## 📖 Overview

The Error Boundary component provides a way to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI instead of the component tree that crashed across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { ErrorBoundary } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ComponentThatMightError />
    </ErrorBoundary>
  );
}
```

### Vue

```vue
<template>
  <ErrorBoundary fallback="<div>Something went wrong</div>">
    <ComponentThatMightError />
  </ErrorBoundary>
</template>

<script setup>
import { ErrorBoundary } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fallback` | `ReactNode` | `undefined` | Fallback UI to display on error |
| `onError` | `(error: Error, errorInfo: ErrorInfo) => void` | `undefined` | Error handler callback |
| `children` | `ReactNode` | `undefined` | Child components |

## ♿ Accessibility

The Error Boundary component includes accessibility features:

- **Error Recovery**: Provides graceful error handling
- **Screen Reader Support**: Fallback content is accessible

## 🔗 Related Components

- **[Banner](/docs/components/feedbacks/banner)** - Error messages
- **[Toast](/docs/components/feedbacks/toast)** - Error notifications
