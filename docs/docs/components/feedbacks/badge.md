---
id: badge
title: Badge
sidebar_label: Badge
---

# Badge

A versatile badge component for displaying status, labels, and notifications with various visual styles.

## 📖 Overview

The Badge component is used to display small pieces of information such as status indicators, labels, or notification counts. It supports multiple status types and can include icons for enhanced visual communication.

## 🚀 Basic Usage

### React

```tsx
import { Badge } from '@adersolutions/sirius-ui-react';

function MyComponent() {
  return (
    <Badge status="success">
      Completed
    </Badge>
  );
}
```

### Vue

```vue
<template>
  <div class="badge badge-success">
    Completed
  </div>
</template>

<script setup>
// Badge component will be available in future Vue package updates
</script>
```

## 🎨 Status Variants

### Default Badge

```tsx
<Badge status="default">Default</Badge>
```

### Info Badge

```tsx
<Badge status="info">Information</Badge>
```

### Success Badge

```tsx
<Badge status="success">Success</Badge>
```

### Warning Badge

```tsx
<Badge status="warning">Warning</Badge>
```

### Critical Badge

```tsx
<Badge status="critical">Critical</Badge>
```

### Pending Badge

```tsx
<Badge status="pending">Pending</Badge>
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | Badge content |
| `status` | `'default' \| 'info' \| 'warning' \| 'critical' \| 'success' \| 'pending'` | `'default'` | Visual status of the badge |
| `type` | `'incomplete' \| 'halfComplete' \| 'complete' \| 'dashed'` | `undefined` | Progress indicator type |
| `icon` | `IconType` | `undefined` | Icon to display before the badge text |
| `className` | `string` | `undefined` | Additional CSS classes |

## 🎯 Examples

### Status Indicators

```tsx
import { Badge } from '@adersolutions/sirius-ui-react';

function StatusExample() {
  return (
    <div className="space-x-2">
      <Badge status="success">Active</Badge>
      <Badge status="warning">Pending</Badge>
      <Badge status="critical">Error</Badge>
      <Badge status="info">New</Badge>
    </div>
  );
}
```

### With Icons

```tsx
import { Badge } from '@adersolutions/sirius-ui-react';
import { CheckIcon, ExclamationIcon } from '@heroicons/react/20/solid';

function IconBadgeExample() {
  return (
    <div className="space-x-2">
      <Badge status="success" icon={CheckIcon}>
        Verified
      </Badge>
      <Badge status="warning" icon={ExclamationIcon}>
        Attention Required
      </Badge>
    </div>
  );
}
```

### Progress Indicators

```tsx
function ProgressBadgeExample() {
  return (
    <div className="space-x-2">
      <Badge type="incomplete">In Progress</Badge>
      <Badge type="halfComplete">Half Done</Badge>
      <Badge type="complete">Complete</Badge>
      <Badge type="dashed">Dashed</Badge>
    </div>
  );
}
```

### Custom Styling

```tsx
function CustomBadgeExample() {
  return (
    <Badge 
      status="success" 
      className="text-lg px-4 py-2 font-bold"
    >
      Custom Styled
    </Badge>
  );
}
```

## 🎨 CSS Classes

The Badge component uses the following CSS classes:

- `.sirius-badge` - Base badge class
- `.sirius-badge--{status}` - Status-specific styles
- `.sirius-badge--with-icon` - Badge with icon styles

### Status-specific Colors

```css
/* Info */
.bg-blue-100 text-blue-600 border border-blue-300

/* Success */
.bg-green-100 text-green-600 border border-green-300

/* Warning */
.bg-yellow-100 text-yellow-600 border border-yellow-300

/* Critical */
.bg-red-100 text-red-600 border border-red-300

/* Pending */
.bg-gray-100 text-gray-600 border border-gray-300

/* Default */
.bg-white text-gray-600 border border-gray-300
```

## ♿ Accessibility

The Badge component includes several accessibility features:

- **Semantic HTML**: Uses appropriate HTML elements
- **Color Contrast**: Ensures sufficient contrast ratios
- **Screen Reader Support**: Proper text content for assistive technologies

## 🧪 Testing

```tsx
import { render, screen } from '@testing-library/react';
import { Badge } from '@adersolutions/sirius-ui-react';

test('renders badge with correct text', () => {
  render(<Badge>Test Badge</Badge>);
  expect(screen.getByText('Test Badge')).toBeInTheDocument();
});

test('applies correct status classes', () => {
  render(<Badge status="success">Success</Badge>);
  const badge = screen.getByText('Success');
  expect(badge).toHaveClass('bg-green-100', 'text-green-600');
});
```

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Interactive buttons with badges
- **[Banner](/docs/components/feedbacks/banner)** - Status banners
- **[Toast](/docs/components/feedbacks/toast)** - Notification toasts
