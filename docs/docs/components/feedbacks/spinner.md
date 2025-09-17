---
id: spinner
title: Spinner
sidebar_label: Spinner
---

# Spinner

A loading spinner component for indicating asynchronous operations and loading states.

## 📖 Overview

The Spinner component provides visual feedback during loading operations. It's commonly used in buttons, forms, and other interactive elements to show that an action is in progress.

## 🚀 Basic Usage

### React

```tsx
import { Spinner } from '@adersolutions/sirius-ui-react';

function MyComponent() {
  return (
    <div>
      <Spinner />
      Loading...
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <div class="spinner"></div>
    Loading...
  </div>
</template>

<script setup>
// Spinner component will be available in future Vue package updates
</script>
```

## 🎨 Variants

### Default Spinner

```tsx
<Spinner />
```

### Small Spinner

```tsx
<Spinner size="small" />
```

### Medium Spinner

```tsx
<Spinner size="medium" />
```

### Large Spinner

```tsx
<Spinner size="large" />
```

### Custom Size

```tsx
<Spinner size="none" className="w-8 h-8" />
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large' \| 'none'` | `'medium'` | Size of the spinner |
| `className` | `string` | `undefined` | Additional CSS classes |

## 🎯 Examples

### Button with Loading State

```tsx
import { Button, Spinner } from '@adersolutions/sirius-ui-react';

function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await performAction();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={isLoading}
      icon={isLoading ? <Spinner size="small" /> : undefined}
    >
      {isLoading ? 'Loading...' : 'Click Me'}
    </Button>
  );
}
```

### Form Loading State

```tsx
function FormWithSpinner() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="flex items-center gap-2"
      >
        {isSubmitting && <Spinner size="small" />}
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Page Loading State

```tsx
function PageWithSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Spinner size="large" />
          <p className="mt-4 text-gray-600">Loading page...</p>
        </div>
      </div>
    );
  }

  return <div>Page content loaded!</div>;
}
```

### Inline Loading

```tsx
function InlineSpinner() {
  return (
    <div className="flex items-center gap-2">
      <span>Processing</span>
      <Spinner size="small" />
    </div>
  );
}
```

## 🎨 CSS Classes

The Spinner component uses the following CSS classes:

- `.sirius-spinner` - Base spinner class
- `.sirius-spinner--{size}` - Size-specific styles

### Size Classes

```css
/* Small */
.sirius-spinner--small { width: 16px; height: 16px; }

/* Medium */
.sirius-spinner--medium { width: 20px; height: 20px; }

/* Large */
.sirius-spinner--large { width: 24px; height: 24px; }
```

### Custom Styling

```tsx
function CustomSpinner() {
  return (
    <Spinner 
      size="none" 
      className="w-12 h-12 text-blue-500 animate-spin" 
    />
  );
}
```

## ♿ Accessibility

The Spinner component includes several accessibility features:

- **ARIA Support**: Uses `aria-hidden="true"` to hide from screen readers
- **Semantic Meaning**: Indicates loading state to assistive technologies
- **Focus Management**: Doesn't interfere with keyboard navigation

### ARIA Attributes

```tsx
<Spinner 
  size="medium" 
  aria-hidden="true"
  role="status"
  aria-label="Loading"
/>
```

## 🧪 Testing

```tsx
import { render, screen } from '@testing-library/react';
import { Spinner } from '@adersolutions/sirius-ui-react';

test('renders spinner with correct size', () => {
  render(<Spinner size="large" />);
  const spinner = screen.getByRole('status', { hidden: true });
  expect(spinner).toHaveClass('w-6', 'h-6');
});

test('applies custom className', () => {
  render(<Spinner className="custom-spinner" />);
  const spinner = screen.getByRole('status', { hidden: true });
  expect(spinner).toHaveClass('custom-spinner');
});
```

## 🔗 Related Components

- **[Button](/docs/components/actions/button)** - Buttons with loading states
- **[Badge](/docs/components/feedbacks/badge)** - Status indicators
- **[Toast](/docs/components/feedbacks/toast)** - Loading notifications

