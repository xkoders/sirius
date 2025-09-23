---
id: banner
title: Banner
sidebar_label: Banner
---

# Banner

A banner component for displaying important messages, announcements, and alerts with various status types for both React and Vue applications.

## 📖 Overview

The Banner component is used to display prominent messages that require user attention. It supports multiple status types, dismissible functionality, and can include actions for user interaction across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Banner } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Banner status="info">
      This is an informational banner message.
    </Banner>
  );
}
```

### Vue

```vue
<template>
  <Banner status="info">
    This is an informational banner message.
  </Banner>
</template>

<script setup>
import { Banner } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Status Variants

### Info Banner

For informational messages and general notices.

```tsx
<Banner status="info">
  Information: This is an informational message.
</Banner>
```

### Success Banner

For positive feedback and successful operations.

```tsx
<Banner status="success">
  Success: Your changes have been saved.
</Banner>
```

### Warning Banner

For cautionary information and warnings.

```tsx
<Banner status="warning">
  Warning: Please review your settings before proceeding.
</Banner>
```

### Critical Banner

For critical errors and important alerts.

```tsx
<Banner status="critical">
  Critical: System maintenance required.
</Banner>
```

## 🎯 Examples

### Basic Banners

#### React

```tsx
import { Banner } from '@adersolutions/sirius-react';

function BannerExample() {
  return (
    <div className="space-y-4">
      <Banner status="info">
        Welcome to our new dashboard! Check out the latest features.
      </Banner>
      
      <Banner status="success">
        Your account has been successfully created.
      </Banner>
      
      <Banner status="warning">
        Your subscription will expire in 7 days. Please renew to continue.
      </Banner>
      
      <Banner status="critical">
        System maintenance scheduled for tonight at 2 AM EST.
      </Banner>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-4">
    <Banner status="info">
      Welcome to our new dashboard! Check out the latest features.
    </Banner>
    
    <Banner status="success">
      Your account has been successfully created.
    </Banner>
    
    <Banner status="warning">
      Your subscription will expire in 7 days. Please renew to continue.
    </Banner>
    
    <Banner status="critical">
      System maintenance scheduled for tonight at 2 AM EST.
    </Banner>
  </div>
</template>

<script setup>
import { Banner } from '@adersolutions/sirius-vue';
</script>
```

### Dismissible Banners

#### React

```tsx
function DismissibleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Banner 
      status="info" 
      onDismiss={() => setIsVisible(false)}
    >
      This banner can be dismissed by clicking the close button.
    </Banner>
  );
}
```

#### Vue

```vue
<template>
  <Banner 
    v-if="isVisible"
    status="info" 
    @dismiss="isVisible = false"
  >
    This banner can be dismissed by clicking the close button.
  </Banner>
</template>

<script setup>
import { ref } from 'vue';
import { Banner } from '@adersolutions/sirius-vue';

const isVisible = ref(true);
</script>
```

### Banners with Actions

#### React

```tsx
function ActionBanner() {
  return (
    <Banner 
      status="warning"
      action={{
        content: 'Learn More',
        url: '/help'
      }}
    >
      Your storage is almost full. Consider upgrading your plan.
    </Banner>
  );
}
```

#### Vue

```vue
<template>
  <Banner 
    status="warning"
    :action="{
      content: 'Learn More',
      url: '/help'
    }"
  >
    Your storage is almost full. Consider upgrading your plan.
  </Banner>
</template>

<script setup>
import { Banner } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | Banner content |
| `status` | `'info' \| 'success' \| 'warning' \| 'critical'` | `'info'` | Visual status of the banner |
| `title` | `string` | `undefined` | Optional title for the banner |
| `action` | `{ content: string; url?: string; onAction?: () => void }` | `undefined` | Action button configuration |
| `onDismiss` | `() => void` | `undefined` | Callback when banner is dismissed |
| `dismissible` | `boolean` | `false` | Whether the banner can be dismissed |
| `className` | `string` | `undefined` | Additional CSS classes |

## ♿ Accessibility

The Banner component includes comprehensive accessibility features:

- **Semantic HTML**: Uses appropriate HTML elements
- **ARIA Support**: Includes proper ARIA attributes for alerts
- **Screen Reader Support**: Optimized for assistive technologies
- **Keyboard Navigation**: Fully keyboard accessible

## 🔗 Related Components

- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
- **[Toast](/docs/components/feedbacks/toast)** - Notification toasts
- **[Button](/docs/components/actions/button)** - Action buttons in banners
