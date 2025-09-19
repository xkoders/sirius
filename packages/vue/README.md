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
    <SiriusButton variant="primary">Click me</SiriusButton>
    <SiriusBadge color="blue">New</SiriusBadge>
    <SiriusSpinner size="medium" />
  </div>
</template>

<script setup>
import { 
  SiriusButton, 
  SiriusBadge, 
  SiriusSpinner 
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
- **SiriusButton** - Interactive buttons with multiple variants and states

#### Feedback
- **SiriusBadge** - Status indicators and labels
- **SiriusBanner** - Important announcements and alerts
- **SiriusErrorBoundary** - Error catching and fallback UI
- **SiriusExceptionList** - Display lists of errors or exceptions
- **SiriusSkeletonBodyText** - Loading placeholder for text content
- **SiriusSkeletonDisplayText** - Loading placeholder for headings
- **SiriusSpinner** - Loading indicators
- **SiriusToast** - Temporary notifications
- **SiriusTransition** - Smooth animations and transitions

#### Forms & Selections
- **SiriusCheckbox** - Boolean input controls
- **SiriusRadioButton** - Single selection from multiple options
- **SiriusSelect** - Dropdown selection controls
- **SiriusTextField** - Text input fields
- **SiriusToggle** - On/off switches

#### Images
- **SiriusThumbnail** - Image previews and avatars

#### Layout & Structure
- **SiriusCard** - Content containers with consistent styling
- **SiriusDivider** - Visual separators
- **SiriusGrid** - Responsive grid system
- **SiriusLayout** - Page layout components
- **SiriusPage** - Full-page layout wrapper
- **SiriusSection** - Content sections
- **SiriusStack** - Vertical and horizontal stacking
- **SiriusTabs** - Tabbed content organization

#### Navigation
- **SiriusFrame** - Application frame with navigation
- **SiriusNavigation** - Navigation components

#### Overlays
- **SiriusModal** - Overlay dialogs and forms
- **SiriusPopover** - Contextual overlays
- **SiriusTooltip** - Hover information

#### Tables
- **SiriusDataTable** - Structured data display
- **SiriusTable** - Basic table components

#### Typography
- **SiriusDisplayText** - Large display text
- **SiriusHeading** - Section headings
- **SiriusLink** - Interactive links
- **SiriusText** - Body text and paragraphs
- **SiriusTextStyle** - Text with semantic styling

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