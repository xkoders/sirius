# Sirius UI Vue Components

A comprehensive Vue 3 component library built with TypeScript and Tailwind CSS.

## Features

- **Vue 3 Composition API**: Built with modern Vue 3 features
- **TypeScript**: Full TypeScript support with proper type definitions
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **Responsive**: Mobile-first responsive design
- **Customizable**: Easy to customize with CSS variables and Tailwind classes

## Installation

```bash
pnpm add @adersolutions/sirius-ui-vue
```

## Usage

### Basic Setup

```vue
<template>
  <div>
    <Button variant="primary" @click="showToast">
      Show Toast
    </Button>
    
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { Button, ToastContainer, useToast } from '@adersolutions/sirius-ui-vue'

const { success } = useToast()

const showToast = () => {
  success('This is a success message!')
}
</script>
```

### Components

#### Actions
- **Button**: Versatile button component with multiple variants, sizes, and states

#### Feedback
- **Spinner**: Loading spinner with customizable sizes
- **Badge**: Status indicators with various types and colors
- **Toast**: Notification system with multiple types
- **ToastContainer**: Container for managing multiple toasts

#### Typography
- **Text**: Flexible text component with variants and styling options
- **Heading**: Heading components with semantic HTML and styling

#### Forms & Selections
- **TextField**: Input field with validation states and icons
- **Checkbox**: Checkbox input with proper labeling and states

#### Layout & Structure
- **Box**: Container component with padding, margin, and styling options
- **Stack**: Flexbox-based layout component for arranging elements

#### Tables
- **Table**: Data table with customizable styling and slots

#### Overlays
- **Modal**: Modal dialog with backdrop and transitions

#### Navigation
- **Navigation**: Navigation bar with responsive mobile menu

#### Provider
- **Provider**: Context provider for theme and locale

### Composables

#### useToast
```vue
<script setup lang="ts">
import { useToast } from '@adersolutions/sirius-ui-vue'

const { success, error, warning, info, removeToast, clearToasts } = useToast()

// Show different types of toasts
success('Operation completed successfully!')
error('Something went wrong!')
warning('Please check your input!')
info('Here is some information!')

// Remove specific toast
removeToast('toast-id')

// Clear all toasts
clearToasts()
</script>
```

## Styling

The library uses Tailwind CSS for styling. You can customize the appearance by:

1. Overriding Tailwind classes
2. Using CSS custom properties
3. Extending the component props

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
