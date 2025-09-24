# Sirius UI Documentation System

This documentation system has been fully adapted to showcase the Sirius UI component library with comprehensive React and Vue support, live previews, and interactive examples.

## Features

### 1. Enhanced Code Groups
The `EnhancedCodeGroup` component provides:
- **Framework Tabs**: Switch between React and Vue code examples
- **Live Previews**: See components rendered in real-time above the code
- **Syntax Highlighting**: Proper highlighting for React (TSX) and Vue code
- **Copy to Clipboard**: Easy copying of code examples

### 2. Component Preview System
The preview system includes:
- **Live Component Rendering**: Components are rendered using the actual UI library
- **Framework Switching**: Preview components change based on selected framework
- **Props Support**: Pass props to preview components dynamically

## Usage

### Basic Enhanced Code Group

```mdx
<EnhancedCodeGroup 
  title="Button Examples" 
  component="Button" 
  componentProps={{ children: 'Click me', variant: 'primary' }}
  showPreview={true}
  frameworks={['react', 'vue']}
>

```tsx {{ title: 'React' }}
import { Button } from '@adersolutions/sirius-react'

function MyComponent() {
  return <Button variant="primary">Click me</Button>
}
```

```vue {{ title: 'Vue' }}
<template>
  <Button variant="primary">Click me</Button>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue'
</script>
```

</EnhancedCodeGroup>
```

### Props

#### EnhancedCodeGroup Props
- `title`: Optional title for the code group
- `component`: Component name to preview (e.g., "Button", "Badge")
- `componentProps`: Props to pass to the preview component
- `showPreview`: Whether to show the live preview above the code
- `frameworks`: Array of supported frameworks (default: ['react', 'vue'])

#### Component Props
- `component`: String name of the component to render
- `componentProps`: Object with props to pass to the component
- `frameworks`: Array of frameworks that support this component

## Available Components

The following components are fully documented with React and Vue examples:

### Actions
- **Button**: Interactive button component with multiple variants, sizes, and states

### Feedbacks  
- **Badge**: Status indicator component with different status types
- **Spinner**: Loading indicator component with multiple sizes
- **Toast**: Notification messages (imported but not yet documented)
- **Banner**: Alert banner component (imported but not yet documented)

### Forms
- **TextField**: Text input with validation, multiline support, and prefixes/suffixes
- **Checkbox**: Selection input with indeterminate state support

### Layout
- **Box**: Flexible container with shadows, rounded corners, and sectioning
- **MediaCard**: Specialized card for media content with actions

### Navigation
- **Navigation**: Structured navigation menus with sections and sub-navigation

### Overlays
- **Modal**: Overlay dialogs with accessibility features
- **Tooltip**: Contextual hover information

### Typography
- **Heading**: Semantic headings with different levels
- **Title**: Page and section titles
- **Subtitle**: Secondary headings
- **Text**: Body text with various sizes and weights

## Adding New Components

To add support for new components:

1. **Import the component** in `ComponentPreview.tsx`:
```tsx
import { NewComponent } from '@adersolutions/sirius-react'
```

2. **Add to the components registry**:
```tsx
const components: Record<string, React.ComponentType<any>> = {
  // ... existing components
  NewComponent: NewComponent,
}
```

3. **Update the documentation** with the new component name.

## Framework Support

### React
- Full support with TypeScript
- Components imported from `@adersolutions/sirius-react`
- Syntax highlighting for TSX/JSX

### Vue
- Placeholder support (Vue components not yet fully integrated)
- Components imported from `@adersolutions/sirius-vue`
- Syntax highlighting for Vue SFC

## Example Documentation Page

See `/src/app/components/page.mdx` for a complete example of how to document components using the enhanced system.

## Styling

The preview components use Tailwind CSS classes and follow the design system:
- Light/dark mode support
- Consistent spacing and typography
- Responsive design
- Accessibility features

## Troubleshooting

### React Dispatcher Error

If you encounter "Cannot read properties of undefined (reading 'ReactCurrentDispatcher')", this usually means:

1. **Workspace packages not built**: Run `pnpm install` and build the React/Vue packages
2. **Import issues**: The system includes fallback components that will display when Sirius components aren't available
3. **Context issues**: The ComponentPreviewProvider ensures proper React context

### Fallback System

The documentation system includes fallback components that render when the Sirius UI packages aren't available:

- **Button**: Basic styled button with variants
- **Badge**: Colored status badges
- **Spinner**: Animated loading spinner
- **Box**: Container with shadows and rounded corners

When fallbacks are used, a yellow notice will appear above the component preview.

## Development

To extend or modify the preview system:

1. **ComponentPreview.tsx**: Core preview logic and component rendering with fallback system
2. **EnhancedCodeGroup.tsx**: Code group with tabs and preview integration
3. **mdx.tsx**: MDX component exports

The system is built with React 19, Next.js 15, and Tailwind CSS 4.
