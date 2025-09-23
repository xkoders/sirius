---
id: badge
title: Badge
sidebar_label: Badge
---

# Badge

A versatile badge component for displaying status, labels, and notifications with various visual styles for both React and Vue applications.

## 📖 Overview

The Badge component is used to display small pieces of information such as status indicators, labels, or notification counts. It supports multiple status types, progress indicators, and can include icons for enhanced visual communication across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Badge } from '@adersolutions/sirius-react';

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
  <Badge status="success">
    Completed
  </Badge>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

## 🎨 Status Variants

### Default Badge

The standard badge style for general information.

```tsx
<Badge status="default">Default</Badge>
```

### Info Badge

For informational content and general notices.

```tsx
<Badge status="info">Information</Badge>
```

### Success Badge

For positive status indicators and successful actions.

```tsx
<Badge status="success">Success</Badge>
```

### Warning Badge

For cautionary information and warnings.

```tsx
<Badge status="warning">Warning</Badge>
```

### Critical Badge

For critical errors and important alerts.

```tsx
<Badge status="critical">Critical</Badge>
```

### Pending Badge

For items that are waiting or in progress.

```tsx
<Badge status="pending">Pending</Badge>
```

## 🔄 Progress Indicators

### Incomplete

Shows an empty circle for incomplete tasks.

```tsx
<Badge type="incomplete">In Progress</Badge>
```

### Half Complete

Shows a half-filled circle for partially completed tasks.

```tsx
<Badge type="halfComplete">Half Done</Badge>
```

### Complete

Shows a filled circle for completed tasks.

```tsx
<Badge type="complete">Complete</Badge>
```

### Dashed

Shows a dashed circle for special states.

```tsx
<Badge type="dashed">Dashed</Badge>
```

## 🎯 Examples

### Status Indicators

#### React

```tsx
import { Badge } from '@adersolutions/sirius-react';

function StatusExample() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge status="success">Active</Badge>
      <Badge status="warning">Pending</Badge>
      <Badge status="critical">Error</Badge>
      <Badge status="info">New</Badge>
      <Badge status="default">Default</Badge>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <Badge status="success">Active</Badge>
    <Badge status="warning">Pending</Badge>
    <Badge status="critical">Error</Badge>
    <Badge status="info">New</Badge>
    <Badge status="default">Default</Badge>
  </div>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

### With Icons

#### React

```tsx
import { Badge } from '@adersolutions/sirius-react';
import { 
  CheckIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ClockIcon 
} from '@heroicons/react/20/solid';

function IconBadgeExample() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge status="success" icon={CheckIcon}>
        Verified
      </Badge>
      <Badge status="warning" icon={ExclamationTriangleIcon}>
        Attention Required
      </Badge>
      <Badge status="info" icon={InformationCircleIcon}>
        Information
      </Badge>
      <Badge status="pending" icon={ClockIcon}>
        Processing
      </Badge>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <Badge status="success" icon="CheckIcon">
      Verified
    </Badge>
    <Badge status="warning" icon="ExclamationTriangleIcon">
      Attention Required
    </Badge>
    <Badge status="info" icon="InformationCircleIcon">
      Information
    </Badge>
    <Badge status="pending" icon="ClockIcon">
      Processing
    </Badge>
  </div>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

### Progress Indicators

#### React

```tsx
function ProgressBadgeExample() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge type="incomplete">In Progress</Badge>
      <Badge type="halfComplete">Half Done</Badge>
      <Badge type="complete">Complete</Badge>
      <Badge type="dashed">Dashed</Badge>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <Badge type="incomplete">In Progress</Badge>
    <Badge type="halfComplete">Half Done</Badge>
    <Badge type="complete">Complete</Badge>
    <Badge type="dashed">Dashed</Badge>
  </div>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

### Task Status Dashboard

#### React

```tsx
function TaskDashboard() {
  const tasks = [
    { id: 1, name: 'Design Review', status: 'complete', type: 'complete' },
    { id: 2, name: 'Code Review', status: 'halfComplete', type: 'halfComplete' },
    { id: 3, name: 'Testing', status: 'warning', type: 'incomplete' },
    { id: 4, name: 'Deployment', status: 'pending', type: 'dashed' },
  ];

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <div key={task.id} className="flex items-center justify-between">
          <span className="text-sm font-medium">{task.name}</span>
          <Badge status={task.status} type={task.type}>
            {task.status === 'complete' ? 'Done' : 
             task.status === 'halfComplete' ? 'In Progress' :
             task.status === 'warning' ? 'Needs Attention' : 'Pending'}
          </Badge>
        </div>
      ))}
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-2">
    <div 
      v-for="task in tasks" 
      :key="task.id" 
      class="flex items-center justify-between"
    >
      <span class="text-sm font-medium">{{ task.name }}</span>
      <Badge :status="task.status" :type="task.type">
        {{ getStatusText(task.status) }}
      </Badge>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Badge } from '@adersolutions/sirius-vue';

const tasks = ref([
  { id: 1, name: 'Design Review', status: 'complete', type: 'complete' },
  { id: 2, name: 'Code Review', status: 'halfComplete', type: 'halfComplete' },
  { id: 3, name: 'Testing', status: 'warning', type: 'incomplete' },
  { id: 4, name: 'Deployment', status: 'pending', type: 'dashed' },
]);

const getStatusText = (status) => {
  switch (status) {
    case 'complete': return 'Done';
    case 'halfComplete': return 'In Progress';
    case 'warning': return 'Needs Attention';
    default: return 'Pending';
  }
};
</script>
```

### Custom Styling

#### React

```tsx
function CustomBadgeExample() {
  return (
    <div className="space-y-2">
      <Badge 
        status="success" 
        className="text-lg px-4 py-2 font-bold"
      >
        Custom Styled
      </Badge>
      
      <Badge 
        status="info" 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
      >
        Gradient Badge
      </Badge>
      
      <Badge 
        status="warning" 
        className="animate-pulse"
      >
        Animated Badge
      </Badge>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-2">
    <Badge 
      status="success" 
      class="text-lg px-4 py-2 font-bold"
    >
      Custom Styled
    </Badge>
    
    <Badge 
      status="info" 
      class="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
    >
      Gradient Badge
    </Badge>
    
    <Badge 
      status="warning" 
      class="animate-pulse"
    >
      Animated Badge
    </Badge>
  </div>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | Badge content |
| `status` | `'default' \| 'info' \| 'warning' \| 'critical' \| 'success' \| 'pending'` | `'default'` | Visual status of the badge |
| `type` | `'incomplete' \| 'halfComplete' \| 'complete' \| 'dashed'` | `undefined` | Progress indicator type |
| `icon` | `ReactElement \| Component` | `undefined` | Icon to display before the badge text |
| `className` | `string` | `undefined` | Additional CSS classes |

### CSS Classes

The Badge component uses the following CSS classes:

- `.inline-flex` - Inline flexbox layout
- `.gap-1` - Small gap between elements
- `.items-center` - Center items vertically
- `.px-2` - Horizontal padding
- `.py-0.5` - Vertical padding
- `.rounded-full` - Fully rounded corners
- `.text-xs` - Extra small text size
- `.font-medium` - Medium font weight

### Status-specific Classes

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
- **Color Contrast**: Ensures sufficient contrast ratios for all status variants
- **Screen Reader Support**: Proper text content for assistive technologies
- **Icon Support**: Icons are properly labeled with `aria-hidden` when decorative

### Accessibility Best Practices

- Use descriptive text content for badges
- Ensure sufficient color contrast for all status variants
- Provide alternative text for status information when using icons
- Consider using `aria-label` for icon-only badges

## 🧪 Testing

### Basic Test

```tsx
import { render, screen } from '@testing-library/react';
import { Badge } from '@adersolutions/sirius-react';

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

### Testing Different States

```tsx
test('renders progress indicator when type is provided', () => {
  render(<Badge type="complete">Complete</Badge>);
  const badge = screen.getByText('Complete');
  expect(badge).toContainHTML('svg');
});

test('renders icon when icon prop is provided', () => {
  const MockIcon = () => <div data-testid="icon">Icon</div>;
  render(<Badge icon={MockIcon}>With Icon</Badge>);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
```

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Interactive buttons with badges
- **[Banner](/docs/components/feedbacks/banner)** - Status banners
- **[Toast](/docs/components/feedbacks/toast)** - Notification toasts
- **[Spinner](/docs/components/feedbacks/spinner)** - Loading indicators

## 📚 Additional Resources

- [Badge Design Guidelines](https://material.io/design/components/chips.html)
- [Status Indicators Best Practices](https://www.nngroup.com/articles/status-indicators/)
- [Color and Accessibility](https://webaim.org/articles/contrast/)

