# @adersolutions/sirius-react

A comprehensive React UI components library built with modern design principles and accessibility in mind.

## Installation

```bash
npm install @adersolutions/sirius-react
# or
pnpm add @adersolutions/sirius-react
# or
yarn add @adersolutions/sirius-react
```

## Peer Dependencies

This package requires React 17.x or 18.x:

```bash
npm install react react-dom
```

## Usage

### Basic Setup

```tsx
import React from 'react';
import { Button, Badge, Spinner } from '@adersolutions/sirius-react';
import '@adersolutions/sirius-react/style.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Badge color="blue">New</Badge>
      <Spinner size="medium" />
    </div>
  );
}

export default App;
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

## Styling

The package includes a CSS file that you need to import. Make sure to include Tailwind CSS in your project for full styling support.

```tsx
import '@adersolutions/sirius-react/style.css';
```

## TypeScript Support

This package is built with TypeScript and includes full type definitions. All components are fully typed with proper prop interfaces and JSDoc comments.

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