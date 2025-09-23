---
id: button
title: Button
sidebar_label: Button
---

# Button

A versatile button component that supports multiple variants, sizes, and states for both React and Vue applications.

## 📖 Overview

The Button component is the primary interactive element in Sirius UI. It provides a consistent way to trigger actions, submit forms, and navigate between pages across both React and Vue frameworks.

## 🚀 Basic Usage

### React

```tsx
import { Button } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Button onClick={() => console.log('Button clicked!')}>
      Click Me
    </Button>
  );
}
```

### Vue

```vue
<template>
  <Button @click="handleClick">
    Click Me
  </Button>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## 🎨 Variants

### Default Button

The standard button style for general actions.

```tsx
<Button variant="default">
  Default Action
</Button>
```

### Primary Button

The primary button style for main actions.

```tsx
<Button variant="primary">
  Primary Action
</Button>
```

### Success Button

For positive actions like save or confirm.

```tsx
<Button variant="success">
  Save Changes
</Button>
```

### Warning Button

For cautionary actions.

```tsx
<Button variant="warning">
  Proceed with Caution
</Button>
```

### Danger Button

For destructive actions that require caution.

```tsx
<Button variant="danger">
  Delete Item
</Button>
```

### Info Button

For informational actions.

```tsx
<Button variant="info">
  Learn More
</Button>
```

### Ghost Button

A minimal button with no background or border.

```tsx
<Button variant="ghost">
  Ghost Button
</Button>
```

### Subdued Button

A subtle button for secondary actions.

```tsx
<Button variant="subdued">
  Subdued Action
</Button>
```

### Dark Button

A dark-themed button.

```tsx
<Button variant="dark">
  Dark Button
</Button>
```

## 📏 Sizes

### Small

```tsx
<Button size="small">
  Small Button
</Button>
```

### Medium (Default)

```tsx
<Button size="medium">
  Medium Button
</Button>
```

### Large

```tsx
<Button size="large">
  Large Button
</Button>
```

### Slim

```tsx
<Button size="slim">
  Slim Button
</Button>
```

## 🔧 States

### Disabled

```tsx
<Button disabled>
  Disabled Button
</Button>
```

### Loading

```tsx
<Button loading>
  Loading...
</Button>
```

### With Icon

```tsx
import { PlusIcon } from '@heroicons/react/20/solid';

<Button icon={PlusIcon}>
  Add Item
</Button>
```

### Icon Only

```tsx
import { PlusIcon } from '@heroicons/react/20/solid';

<Button icon={PlusIcon} aria-label="Add item" />
```

### Full Width

```tsx
<Button fullwidth>
  Full Width Button
</Button>
```

### Outline Style

```tsx
<Button variant="primary" outline>
  Outline Button
</Button>
```

### Link Style

```tsx
<Button variant="primary" link>
  Link Button
</Button>
```

### Submit Button

```tsx
<Button submit>
  Submit Form
</Button>
```

### External Link

```tsx
<Button url="https://example.com" target="_blank">
  External Link
</Button>
```

## 🎯 Examples

### Form Submission

#### React

```tsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button submit variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

#### Vue

```vue
<template>
  <form @submit="handleSubmit">
    <!-- Form fields -->
    <Button submit variant="primary">
      Send Message
    </Button>
  </form>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue';

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};
</script>
```

### Button Group

#### React

```tsx
import { Button, Stack } from '@adersolutions/sirius-react';

function ActionButtons() {
  return (
    <Stack direction="horizontal" gap="2">
      <Button variant="primary">
        Save
      </Button>
      <Button variant="outline">
        Cancel
      </Button>
      <Button variant="danger">
        Delete
      </Button>
    </Stack>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-2">
    <Button variant="primary">
      Save
    </Button>
    <Button variant="outline">
      Cancel
    </Button>
    <Button variant="danger">
      Delete
    </Button>
  </div>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue';
</script>
```

### Loading State

#### React

```tsx
function SaveButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await saveData();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant="primary" 
      loading={isLoading}
      onClick={handleSave}
    >
      {isLoading ? 'Saving...' : 'Save'}
    </Button>
  );
}
```

#### Vue

```vue
<template>
  <Button 
    variant="primary" 
    :loading="isLoading"
    @click="handleSave"
  >
    {{ isLoading ? 'Saving...' : 'Save' }}
  </Button>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@adersolutions/sirius-vue';

const isLoading = ref(false);

const handleSave = async () => {
  isLoading.value = true;
  try {
    await saveData();
  } finally {
    isLoading.value = false;
  }
};
</script>
```

### Icon Buttons

#### React

```tsx
import { 
  PlusIcon, 
  TrashIcon, 
  PencilIcon,
  CheckIcon 
} from '@heroicons/react/20/solid';

function IconButtons() {
  return (
    <div className="flex gap-2">
      <Button icon={PlusIcon} variant="primary" aria-label="Add item" />
      <Button icon={PencilIcon} variant="info" aria-label="Edit item" />
      <Button icon={CheckIcon} variant="success" aria-label="Complete task" />
      <Button icon={TrashIcon} variant="danger" aria-label="Delete item" />
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="flex gap-2">
    <Button icon="PlusIcon" variant="primary" aria-label="Add item" />
    <Button icon="PencilIcon" variant="info" aria-label="Edit item" />
    <Button icon="CheckIcon" variant="success" aria-label="Complete task" />
    <Button icon="TrashIcon" variant="danger" aria-label="Delete item" />
  </div>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue';
</script>
```

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'ghost' \| 'subdued' \| 'dark' \| 'none'` | `'default'` | The visual style of the button |
| `size` | `'small' \| 'medium' \| 'large' \| 'slim' \| 'none'` | `'medium'` | The size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show a loading state |
| `icon` | `ReactElement \| Component` | `undefined` | Icon to display before the button text |
| `alignment` | `'center' \| 'start' \| 'end'` | `'center'` | Text alignment within the button |
| `rounded` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'none'` | `'xl'` | Border radius of the button |
| `fullwidth` | `boolean` | `false` | Whether the button should take full width |
| `outline` | `boolean` | `false` | Whether to show as outline style |
| `link` | `boolean` | `false` | Whether to show as link style |
| `submit` | `boolean` | `false` | Whether this is a submit button |
| `url` | `string` | `undefined` | URL for link buttons |
| `target` | `'_blank' \| '_self' \| '_parent'` | `undefined` | Target for link buttons |
| `onClick` | `() => void` | `undefined` | Click event handler |
| `children` | `ReactNode` | `undefined` | Button content |
| `className` | `string` | `undefined` | Additional CSS classes |
| `aria-label` | `string` | `undefined` | Accessible label for screen readers |
| `aria-describedby` | `string` | `undefined` | ID of element that describes the button |
| `aria-expanded` | `boolean` | `undefined` | Whether the button controls expanded content |
| `aria-pressed` | `boolean` | `undefined` | Whether the button is pressed |
| `aria-haspopup` | `boolean` | `undefined` | Whether the button opens a popup |
| `role` | `string` | `undefined` | ARIA role for the button |
| `title` | `string` | `undefined` | Tooltip text for the button |

### CSS Classes

The Button component uses the following CSS classes:

- `.h-fit` - Height fits content
- `.flex` - Flexbox layout
- `.items-center` - Center items vertically
- `.transition-all` - Smooth transitions
- `.active:scale-95` - Scale down on click
- `.active:opacity-70` - Reduce opacity on click

### Variant-specific Classes

- `.bg-white` - Default background
- `.bg-indigo-600` - Primary background
- `.bg-green-600` - Success background
- `.bg-orange-400` - Warning background
- `.bg-red-600` - Danger background
- `.bg-blue-600` - Info background

## ♿ Accessibility

The Button component includes comprehensive accessibility features:

- **Semantic HTML**: Uses the `<button>` element for proper semantics
- **ARIA Support**: Includes appropriate ARIA attributes
- **Keyboard Navigation**: Fully keyboard accessible
- **Focus Management**: Proper focus handling and indicators
- **Screen Reader Support**: Optimized for assistive technologies
- **Loading States**: Properly announces loading states to screen readers

### ARIA Attributes

- `aria-label` - Provides accessible name for icon-only buttons
- `aria-describedby` - References descriptive text
- `aria-expanded` - Indicates expanded/collapsed state
- `aria-pressed` - Indicates pressed state for toggle buttons
- `aria-haspopup` - Indicates button opens a popup
- `aria-busy` - Indicates when the button is in a loading state
- `aria-live` - Announces loading state changes

## 🎨 Customization

### Using Tailwind CSS

```tsx
<Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full">
  Custom Button
</Button>
```

### Using CSS Modules

```tsx
import styles from './CustomButton.module.css';

<Button className={styles.customButton}>
  Custom Styled Button
</Button>
```

### Custom Variants

You can create custom button variants by extending the component:

```tsx
const CustomButton = styled(Button)`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
```

## 🧪 Testing

### Basic Test

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@adersolutions/sirius-react';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing Different States

```tsx
test('disables button when disabled prop is true', () => {
  render(<Button disabled>Disabled Button</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});

test('shows loading state when loading prop is true', () => {
  render(<Button loading>Loading Button</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
});

test('renders icon-only button with proper accessibility', () => {
  render(<Button icon={PlusIcon} aria-label="Add item" />);
  expect(screen.getByRole('button', { name: 'Add item' })).toBeInTheDocument();
});
```

## 🔗 Related Components

- **[Stack](/docs/components/layout-structure/stack)** - Layout buttons in groups
- **[Spinner](/docs/components/feedbacks/spinner)** - Loading indicator used in buttons
- **[Icon Components](/docs/components/icons)** - Icons for buttons

## 📚 Additional Resources

- [Button Design Guidelines](https://material.io/design/components/buttons.html)
- [Accessible Button Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Button Best Practices](https://www.nngroup.com/articles/buttons-design/)
