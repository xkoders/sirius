---
id: components-overview
title: Components Overview
sidebar_label: Overview
---

# Components Overview

Sirius UI provides a comprehensive set of React components organized into logical categories. Each component is designed to be accessible, customizable, and performant.

## 🎯 Component Categories

### Actions
Interactive elements that users can interact with to perform actions.

- **[Button](/docs/components/actions/button)** - Primary interactive element with multiple variants
- **[Button Group](/docs/components/actions/button-group)** - Group related buttons together

### Feedback
Components that provide visual feedback to users about the state of the application.

- **[Badge](/docs/components/feedbacks/badge)** - Small status indicators and labels
- **[Banner](/docs/components/feedbacks/banner)** - Important messages and announcements
- **[Spinner](/docs/components/feedbacks/spinner)** - Loading indicators
- **[Toast](/docs/components/feedbacks/toast)** - Temporary notification messages
- **[Skeleton](/docs/components/feedbacks/skeleton)** - Loading placeholders for content

### Forms & Selections
Components for collecting user input and making selections.

- **[Button](/docs/components/forms-selections/button)** - Form submission and action buttons
- **[Checkbox](/docs/components/forms-selections/checkbox)** - Binary selection input
- **[Choice List](/docs/components/forms-selections/choice-list)** - Radio button and checkbox groups
- **[Search Field](/docs/components/forms-selections/search-field)** - Text input for searching
- **[Text Field](/docs/components/forms-selections/text-field)** - Single-line text input
- **[Tabs](/docs/components/forms-selections/tabs)** - Content organization with tabbed interface

### Layout & Structure
Components for organizing and structuring the layout of your application.

- **[Box](/docs/components/layout-structure/box)** - Basic container with spacing and styling
- **[Stack](/docs/components/layout-structure/stack)** - Vertical or horizontal layout with consistent spacing
- **[Page](/docs/components/layout-structure/page)** - Full-page layout container
- **[Layout](/docs/components/layout-structure/layout)** - Application layout structure
- **[Empty State](/docs/components/layout-structure/empty-state)** - Display when there's no content
- **[Media Card](/docs/components/layout-structure/media-card)** - Card layout for media content

### Navigation
Components for navigating between different parts of your application.

- **[Navigation](/docs/components/navigations/navigation)** - Main navigation menu
- **[Frame](/docs/components/navigations/frame)** - Application frame with navigation

### Overlays
Components that appear above the main content.

- **[Modal](/docs/components/overleys/modal)** - Dialog boxes and overlays
- **[Popover](/docs/components/overleys/popover)** - Contextual information panels
- **[Tooltip](/docs/components/overleys/tooltip)** - Hover information displays
- **[Portal](/docs/components/overleys/portal)** - Render content in different DOM locations

### Typography
Text components for displaying content with consistent styling.

- **[Text](/docs/components/typography/text)** - Basic text display with variants
- **[Heading](/docs/components/typography/heading)** - Section headings and titles
- **[Title](/docs/components/typography/title)** - Page and section titles
- **[Subtitle](/docs/components/typography/subtitle)** - Supporting text below titles

### Data Display
Components for displaying structured data and media.

- **[Table](/docs/components/tables/table)** - Data tables with sorting and pagination
- **[Thumbnail](/docs/components/images/thumbnail)** - Image thumbnails and previews

## 🎨 Design Principles

All components follow these design principles:

### Consistency
- Unified design language across all components
- Consistent spacing, typography, and color usage
- Predictable behavior and interactions

### Accessibility
- WCAG 2.1 AA compliance
- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader compatibility

### Customization
- Extensive theming options
- Flexible prop-based customization
- CSS custom properties for styling
- Tailwind CSS integration

### Performance
- Optimized bundle size
- Lazy loading where appropriate
- Efficient re-renders
- Minimal dependencies

## 🚀 Getting Started with Components

### Basic Usage

```tsx
import { Button, Text, Box } from '@adersolutions/sirius-react';

function MyComponent() {
  return (
    <Box padding="4">
      <Text variant="heading" size="large">
        Hello World
      </Text>
      <Button variant="primary">
        Click Me
      </Button>
    </Box>
  );
}
```

### Component Props

Most components accept common props:

- **`className`** - Additional CSS classes
- **`style`** - Inline styles
- **`id`** - Unique identifier
- **`data-*`** - Custom data attributes

### Variants and Sizes

Many components support different variants and sizes:

```tsx
// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// Size variations
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## 🔧 Customization

### Theming

Customize the appearance using CSS custom properties:

```css
:root {
  --sirius-primary-color: #007bff;
  --sirius-border-radius: 8px;
  --sirius-spacing-unit: 8px;
}
```

### Tailwind CSS

Use Tailwind utilities to customize components:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600 text-white">
  Custom Button
</Button>
```

## 📱 Responsive Design

All components are built with responsive design in mind:

- Mobile-first approach
- Flexible layouts that adapt to screen size
- Touch-friendly interactions
- Optimized for different device types

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of HTML elements
- **ARIA Support**: Comprehensive ARIA attribute support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling and indicators
- **Screen Reader Support**: Optimized for assistive technologies

## 🧪 Testing

Components are thoroughly tested:

- Unit tests for all functionality
- Integration tests for component interactions
- Accessibility testing with automated tools
- Cross-browser compatibility testing

## 📚 Next Steps

- Explore individual component documentation
- Check out the [Examples](/docs/examples) section
- Learn about [Customization](/docs/customization) options
- Review the [Changelog](/docs/changelog) for updates

## 🆘 Need Help?

If you have questions about components:

1. Check the specific component documentation
2. Look at the examples and code samples
3. Review the [Getting Started](/docs/getting-started) guide
4. Search existing [GitHub Issues](https://github.com/adersolutions/sirius-ui/issues)
5. Create a new issue for bugs or feature requests
