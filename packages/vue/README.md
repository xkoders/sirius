# @adersolutions/sirius-vue

A comprehensive Vue 3 UI components library built with modern design principles and accessibility in mind.

## Installation

```bash
npm install @adersolutions/sirius-vue
# or
pnpm add @adersolutions/sirius-vue
# or
yarn add @adersolutions/sirius-vue
```

## Peer Dependencies

This package requires Vue 3.3.0 or higher:

```bash
npm install vue@^3.3.0
```

## Usage

### Basic Setup

```vue
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Badge color="blue">New</Badge>
    <Spinner size="medium" />
  </div>
</template>

<script setup>
import { 
  Button, 
  Badge, 
  Spinner 
} from '@adersolutions/sirius-vue';
import '@adersolutions/sirius-vue/style.css';
</script>
```

### Global Registration (Optional)

```javascript
// main.js
import { createApp } from 'vue';
import Sirius from '@adersolutions/sirius-vue';
import '@adersolutions/sirius-vue/style.css';

const app = createApp(App);
app.use(Sirius);
app.mount('#app');
```

### Available Components

#### Actions
- **Button** - Interactive buttons with multiple variants and states

#### Feedback
- **Badge** - Status indicators and labels
- **Banner** - Important announcements and alerts
- **ErrorBoundary** - Error catching and fallback UI
- **ExceptionList** - Display lists of errors or exceptions
- **SkeletonBodyText** - Loading placeholder for text content
- **SkeletonDisplayText** - Loading placeholder for headings
- **Spinner** - Loading indicators
- **Toast** - Temporary notifications
- **Transition** - Smooth animations and transitions

#### Forms & Selections
- **Checkbox** - Boolean input controls
- **RadioButton** - Single selection from multiple options
- **Select** - Dropdown selection controls
- **TextField** - Text input fields
- **Toggle** - On/off switches

#### Images
- **Thumbnail** - Image previews and avatars

#### Layout & Structure
- **Card** - Content containers with consistent styling
- **Divider** - Visual separators
- **Grid** - Responsive grid system
- **Layout** - Page layout components
- **Page** - Full-page layout wrapper
- **Section** - Content sections
- **Stack** - Vertical and horizontal stacking
- **Tabs** - Tabbed content organization

#### Navigation
- **Frame** - Application frame with navigation
- **Navigation** - Navigation components

#### Overlays
- **Modal** - Overlay dialogs and forms
- **Popover** - Contextual overlays
- **Tooltip** - Hover information

#### Tables
- **DataTable** - Structured data display
- **Table** - Basic table components

#### Typography
- **DisplayText** - Large display text
- **Heading** - Section headings
- **Link** - Interactive links
- **Text** - Body text and paragraphs
- **TextStyle** - Text with semantic styling

## Composables

The package also provides useful composables:

```javascript
import { useToast } from '@adersolutions/sirius-vue';

// In your component
const { showToast, hideToast } = useToast();
```

## Styling

The package includes a CSS file that you need to import. Make sure to include Tailwind CSS in your project for full styling support.

```javascript
import '@adersolutions/sirius-vue/style.css';
```

## TypeScript Support

This package is built with TypeScript and includes full type definitions. All components and composables are fully typed with proper interfaces and JSDoc comments.

## Demo

You can run the demo application to see all components in action:

```bash
# Navigate to the Vue package directory
cd packages/vue

# Install dependencies
pnpm install

# Run demo
pnpm demo

# Build demo
pnpm demo:build
```

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Watch mode for development
pnpm dev
```

## License

MIT

## Contributing

Please refer to the main repository for contributing guidelines.

## Support

For issues and feature requests, please visit our [GitHub repository](https://github.com/adersolutions/sirius).