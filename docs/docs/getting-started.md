---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started with Sirius UI

This guide will help you get up and running with Sirius UI in your React project.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** version 18.0 or higher
- **pnpm** package manager (recommended) or npm/yarn
- A React project (version 18.0 or higher)

## 🚀 Installation

### Using pnpm (Recommended)

```bash
pnpm add @adersolutions/sirius-ui-react
```

### Using npm

```bash
npm install @adersolutions/sirius-ui-react
```

### Using yarn

```bash
yarn add @adersolutions/sirius-ui-react
```

## 🎯 Basic Setup

### 1. Import Components

You can import individual components to keep your bundle size minimal:

```tsx
import { Button, Text, Box } from '@adersolutions/sirius-ui-react';
```

### 2. Use Components

Start using components in your React components:

```tsx
import React from 'react';
import { Button, Text, Box, Stack } from '@adersolutions/sirius-ui-react';

function MyComponent() {
  return (
    <Box padding="4">
      <Stack gap="4">
        <Text variant="heading" size="large">
          Welcome to Sirius UI
        </Text>
        <Text>
          This is a beautiful and accessible component library.
        </Text>
        <Button variant="primary" size="medium">
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}

export default MyComponent;
```

## 🎨 Styling and Theming

### CSS Import

Import the base styles in your main application file:

```tsx
// In your main.tsx or App.tsx
import '@adersolutions/sirius-ui-react/index.scss';
```

### Tailwind CSS Integration

Sirius UI is built with Tailwind CSS. Make sure you have Tailwind CSS configured in your project:

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@adersolutions/sirius-ui-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🔧 Configuration

### TypeScript Support

Sirius UI includes full TypeScript support. Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react-jsx"
  }
}
```

### Provider Setup (Optional)

For advanced features like theming and context, wrap your app with the Provider:

```tsx
import { Provider } from '@adersolutions/sirius-ui-react';

function App() {
  return (
    <Provider>
      {/* Your app content */}
    </Provider>
  );
}
```

## 📱 Responsive Design

All components are built with responsive design in mind. They automatically adapt to different screen sizes and can be customized using Tailwind's responsive utilities.

## ♿ Accessibility

Sirius UI components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🧪 Testing

Test your components to ensure they work correctly:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@adersolutions/sirius-ui-react';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});
```

## 📚 Next Steps

Now that you have Sirius UI set up, explore:

- **[Components Documentation](/docs/components/overview)**: Learn about all available components
- **[Examples](/docs/examples)**: See real-world usage patterns
- **[Customization](/docs/customization)**: Learn how to customize components for your needs

## 🆘 Need Help?

If you run into any issues:

1. Check the [Components Documentation](/docs/components/overview)
2. Look at the [Examples](/docs/examples)
3. Search existing [GitHub Issues](https://github.com/adersolutions/sirius-ui/issues)
4. Create a new issue if your problem isn't already documented

## 🎉 Congratulations!

You've successfully set up Sirius UI in your project! You're now ready to build beautiful, accessible, and consistent user interfaces.
