---
id: button
title: Button
sidebar_label: Button
---

# Button

A versatile button component that supports multiple variants, sizes, and states.

## 📖 Overview

The Button component is the primary interactive element in Sirius UI. It provides a consistent way to trigger actions, submit forms, and navigate between pages.

## 🚀 Basic Usage

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

## 🎨 Variants

### Primary Button

The default button style for primary actions.

```tsx
<Button variant="primary">
  Primary Action
</Button>
```

### Secondary Button

For secondary or less important actions.

```tsx
<Button variant="secondary">
  Secondary Action
</Button>
```

### Outline Button

A button with an outlined appearance.

```tsx
<Button variant="outline">
  Outline Button
</Button>
```

### Ghost Button

A minimal button with no background or border.

```tsx
<Button variant="ghost">
  Ghost Button
</Button>
```

### Danger Button

For destructive actions that require caution.

```tsx
<Button variant="danger">
  Delete Item
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
import { Icon } from '@adersolutions/sirius-react';

<Button icon={<Icon name="plus" />}>
  Add Item
</Button>
```

## 🎯 Examples

### Form Submission

```tsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
```

### Button Group

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

### Loading State

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

## 📋 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | The visual style of the button |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show a loading state |
| `icon` | `ReactNode` | `undefined` | Icon to display before the button text |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon relative to text |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The type of the button |
| `onClick` | `(event: MouseEvent) => void` | `undefined` | Click event handler |
| `children` | `ReactNode` | `undefined` | Button content |
| `className` | `string` | `undefined` | Additional CSS classes |
| `style` | `CSSProperties` | `undefined` | Inline styles |

### CSS Classes

The Button component uses the following CSS classes:

- `.sirius-button` - Base button class
- `.sirius-button--{variant}` - Variant-specific styles
- `.sirius-button--{size}` - Size-specific styles
- `.sirius-button--disabled` - Disabled state styles
- `.sirius-button--loading` - Loading state styles
- `.sirius-button--full-width` - Full width styles

### CSS Custom Properties

You can customize the button appearance using CSS custom properties:

```css
:root {
  --sirius-button-primary-bg: #007bff;
  --sirius-button-primary-color: #ffffff;
  --sirius-button-border-radius: 6px;
  --sirius-button-padding-x: 16px;
  --sirius-button-padding-y: 8px;
}
```

## ♿ Accessibility

The Button component includes several accessibility features:

- **Semantic HTML**: Uses the `<button>` element for proper semantics
- **ARIA Support**: Includes appropriate ARIA attributes
- **Keyboard Navigation**: Fully keyboard accessible
- **Focus Management**: Proper focus handling and indicators
- **Screen Reader Support**: Optimized for assistive technologies

### ARIA Attributes

- `role="button"` - Explicitly defines the button role
- `aria-disabled` - Indicates when the button is disabled
- `aria-busy` - Indicates when the button is in a loading state

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

### Using Styled Components

```tsx
import styled from 'styled-components';

const StyledButton = styled(Button)`
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

<StyledButton>Gradient Button</StyledButton>
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
```

## 🔗 Related Components

- **[Button Group](/docs/components/actions/button-group)** - Group related buttons together
- **[Icon](/docs/components/icons/icon)** - Icons for buttons
- **[Stack](/docs/components/layout-structure/stack)** - Layout buttons in groups

## 📚 Additional Resources

- [Button Design Guidelines](https://material.io/design/components/buttons.html)
- [Accessible Button Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Button Best Practices](https://www.nngroup.com/articles/buttons-design/)
