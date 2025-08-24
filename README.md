# @adersolutions/sirius-ui

A modern, accessible React component library built with TypeScript, Tailwind CSS, and best practices. Sirius UI provides a comprehensive set of reusable components for building beautiful, responsive web applications.

## ✨ Features

- **TypeScript First**: Full TypeScript support with comprehensive type definitions
- **Modern React**: Built with React 18+ and modern hooks
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Accessible**: WCAG compliant components with proper ARIA attributes
- **Customizable**: Flexible theming and customization options
- **Tree Shakeable**: Only import what you need to keep your bundle size minimal
- **Responsive**: Mobile-first responsive design patterns

## 🚀 Installation

```bash
# Using npm
npm install @adersolutions/sirius-ui

# Using yarn
yarn add @adersolutions/sirius-ui

# Using pnpm
pnpm add @adersolutions/sirius-ui
```

## 📦 Usage

### Basic Setup

```tsx
import React from 'react'
import { Button, Text, Heading, ProviderSirius } from '@adersolutions/sirius-ui'
import '@adersolutions/sirius-ui/style.css'

function App() {
  return (
    <ProviderSirius>
      <div>
        <Heading as="h1" variant="heading2xl">
          Welcome to Sirius UI
        </Heading>
        <Text variant="bodyMd" color="subdued">
          A beautiful component library for modern React applications
        </Text>
        <Button variant="primary" size="medium">
          Get Started
        </Button>
      </div>
    </ProviderSirius>
  )
}
```

### Importing Styles

```tsx
// Import the main CSS file
import '@adersolutions/sirius-ui/style.css'
```

## 🧩 Components

### Provider & Context

The **ProviderSirius** component is required and must wrap your application to provide essential context and functionality:

- **Context Management**: Provides global state for table resources, selections, and frame presence
- **Toast System**: Manages toast notifications with automatic positioning and error handling
- **Error Boundary**: Includes error boundary for toast system with fallback UI
- **Required Wrapper**: Must wrap your entire application or the components that use Sirius UI features

```tsx
import { ProviderSirius } from '@adersolutions/sirius-ui'

// Wrap your entire app
function App() {
  return (
    <ProviderSirius>
      {/* Your application components */}
    </ProviderSirius>
  )
}

// Or wrap specific sections
function Dashboard() {
  return (
    <ProviderSirius>
      <Layout>
        {/* Dashboard components */}
      </Layout>
    </ProviderSirius>
  )
}
```

**Note**: The ProviderSirius component is essential for proper functioning of toast notifications, table selections, and other interactive features.

### Typography

- **Text**: Flexible text component with multiple variants and colors
- **Heading**: Semantic heading components (h1-h6)
- **Title**: Page title components with size variants
- **Subtitle**: Secondary text and description components

```tsx
import { Text, Heading, Title, Subtitle } from '@adersolutions/sirius-ui'

<Title size="lg">Main Page Title</Title>
<Subtitle size="md">Page description goes here</Subtitle>
<Heading as="h2" variant="heading2xl">Section Heading</Heading>
<Text variant="bodyMd" color="info">Information text</Text>
```

### Actions

- **Button**: Versatile button component with multiple variants and sizes

```tsx
import { Button } from '@adersolutions/sirius-ui'

<Button variant="primary" size="medium">
  Primary Action
</Button>
<Button variant="secondary" size="small">
  Secondary Action
</Button>
```

### Layout & Structure

- **Box**: Flexible container with shadow and border radius options
- **Layout**: Responsive layout system with sections
- **Page**: Page wrapper with title, subtitle, and action support
- **Stack**: Vertical and horizontal stacking component
- **EmptyState**: Empty state component for lists and content

```tsx
import { Box, Layout, Page, Stack } from '@adersolutions/sirius-ui'

<Page title="Dashboard" subtitle="Overview of your data">
  <Layout>
    <Layout.Section primary>
      <Box sectionned shadow="md">
        <Stack spacing="base" vertical>
          <Text variant="headingXl">Content</Text>
          <Text variant="bodyMd">Your content here</Text>
        </Stack>
      </Box>
    </Layout.Section>
  </Layout>
</Page>
```

### Forms & Selections

- **TextField**: Input and textarea components with validation support
- **Checkbox**: Accessible checkbox component
- **ChoiceList**: Radio button and checkbox list components
- **SearchField**: Search input with advanced filtering
- **Tabs**: Tab navigation component

```tsx
import { TextField, Checkbox, ChoiceList, Tabs } from '@adersolutions/sirius-ui'

<TextField 
  label="Email" 
  type="email" 
  required 
  placeholder="Enter your email"
/>
<Checkbox label="I agree to terms" />
<Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]} />
```

### Feedback & Notifications

- **Banner**: Status banners for important messages
- **Toast**: Toast notification system
- **Badge**: Status and count badges
- **Spinner**: Loading indicators
- **Skeleton**: Loading skeleton components

```tsx
import { Banner, Toast, Badge, Spinner } from '@adersolutions/sirius-ui'

<Banner status="success">Operation completed successfully!</Banner>
<Badge status="info">New</Badge>
<Spinner size="medium" />
```

### Navigation

- **Navigation**: Sidebar navigation component
- **Frame**: Application frame wrapper
- **Header**: Page header component

```tsx
import { Navigation, Frame, Header } from '@adersolutions/sirius-ui'

<Frame>
  <Navigation items={navigationItems} />
  <Header title="Application" />
  {/* Your app content */}
</Frame>
```

### Overlays & Modals

- **Modal**: Accessible modal dialog component
- **Tooltip**: Tooltip component
- **Popover**: Popover component for additional content

```tsx
import { Modal, Tooltip, Popover } from '@adersolutions/sirius-ui'

<Modal open={isOpen} onClose={handleClose} title="Modal Title">
  Modal content goes here
</Modal>
<Tooltip content="Helpful information">Hover me</Tooltip>
```

## 🎨 Theming & Customization

### CSS Custom Properties

Sirius UI uses CSS custom properties for theming. You can override these in your CSS:

```css
:root {
  --sirius-primary-color: #3b82f6;
  --sirius-border-radius: 0.5rem;
  --sirius-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

### Tailwind CSS Integration

All components are built with Tailwind CSS classes and can be customized using Tailwind's configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@adersolutions/sirius-ui/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      }
    }
  }
}
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

```tsx
// Components automatically adapt to different screen sizes
<Box className="p-4 md:p-6 lg:p-8">
  <Text variant="headingXl md:heading2xl lg:heading3xl">
    Responsive Heading
  </Text>
</Box>
```

## ♿ Accessibility

Sirius UI components follow WCAG 2.1 guidelines:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🔧 Development

### Prerequisites

- Node.js 16+
- pnpm (recommended) or npm

### Setup

```bash
git clone <your-repo>
cd sirius
pnpm install
pnpm run dev
```

### Build

```bash
pnpm run build
```

### Testing

```bash
pnpm run test
```

## �� API Reference

For detailed API documentation, visit our [Storybook](link-to-storybook) or check the TypeScript definitions.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Link to docs]
- **Issues**: [GitHub Issues](link-to-issues)
- **Discussions**: [GitHub Discussions](link-to-discussions)
- **Email**: benallalsoufiane1@gmail.com

## �� Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Components inspired by modern design systems

---

Made with ❤️ by [Adersolutions](https://ader-solutions.com)