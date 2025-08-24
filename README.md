# Sirius UI

A modern, accessible, and customizable UI component library for React and Vue applications.

## 🚀 Quick Start

### React
```bash
npm install @adersolutions/sirius-ui-react
# or
pnpm add @adersolutions/sirius-ui-react
```

```tsx
import { Button, Badge, Text } from '@adersolutions/sirius-ui-react'
import '@adersolutions/sirius-ui-react/style.css'

function App() {
  return (
    <div>
      <Text>Hello World</Text>
      <Button>Click me</Button>
      <Badge>New</Badge>
    </div>
  )
}
```

### Vue
```bash
npm install @adersolutions/sirius-ui-vue
# or
pnpm add @adersolutions/sirius-ui-vue
```

```vue
<template>
  <div>
    <SiriusText>Hello World</SiriusText>
    <SiriusButton>Click me</SiriusButton>
    <SiriusBadge>New</SiriusBadge>
  </div>
</template>

<script setup lang="import">
import { SiriusText, SiriusButton, SiriusBadge } from '@adersolutions/sirius-ui-vue'
import '@adersolutions/sirius-ui-vue/style.css'
</script>
```

## 📦 Packages

This monorepo contains the following packages:

- **`@adersolutions/sirius-ui-react`** - React component library
- **`@adersolutions/sirius-ui-vue`** - Vue component library  
- **`@adersolutions/sirius-ui-examples`** - Component examples and showcase
- **`@adersolutions/sirius-ui-docs`** - Comprehensive documentation website

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 9+

### Setup
```bash
# Install dependencies
pnpm install

# Start examples development server
pnpm dev:examples

# Start documentation development server  
pnpm dev:docs

# Build React library
pnpm build:react

# Build Vue library
pnpm build:vue

# Build all libraries
pnpm build:all
```

### Scripts
- `pnpm dev:examples` - Start examples server (port 4000)
- `pnpm dev:docs` - Start documentation server (port 3000)
- `pnpm build:react` - Build React library
- `pnpm build:vue` - Build Vue library
- `pnpm build:all` - Build all libraries
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🎨 Components

### Actions
- **Button** - Interactive buttons with various styles and states

### Feedback
- **Badge** - Status indicators and labels
- **Banner** - Informational banners and alerts
- **ErrorBoundary** - React error boundary component
- **Spinner** - Loading indicators
- **Toast** - Notification toasts

### Forms & Selections
- **Checkbox** - Checkbox input component
- **ChoiceList** - Radio button groups
- **IndexFilters** - Advanced filtering interface
- **SearchField** - Search input with suggestions
- **TextField** - Text input component
- **Tabs** - Tabbed interface component

### Layout & Structure
- **Box** - Basic layout container
- **Layout** - Page layout wrapper
- **Page** - Page container with header
- **Stack** - Vertical spacing component
- **Header** - Page header component
- **EmptyState** - Empty state placeholder

### Navigation
- **Frame** - Application frame wrapper
- **Navigation** - Navigation menu component

### Overlays
- **Modal** - Modal dialog component
- **Portal** - Portal for rendering outside DOM tree
- **Tooltip** - Tooltip component
- **Popover** - Popover component

### Typography
- **Heading** - Heading text component
- **Text** - Basic text component
- **Title** - Title text component
- **Subtitle** - Subtitle text component

## 🌟 Features

- **Modern Design** - Clean, accessible design system
- **TypeScript** - Full TypeScript support
- **Accessibility** - WCAG compliant components
- **Customizable** - Easy theming and customization
- **Performance** - Optimized for modern web applications
- **Cross-framework** - Available for both React and Vue

## 📚 Documentation

- **Examples** - Interactive component examples at `/examples`
- **Documentation** - Full documentation at `/docs`
- **API Reference** - Complete component API documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

- **Soufiyan** - [benallalsoufiane1@gmail.com](mailto:benallalsoufiane1@gmail.com)

---

Built with ❤️ by the Adersolutions team