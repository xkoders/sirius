# Sirius UI React

A modern, accessible, and customizable UI component library for React applications.

## Installation

```bash
npm install @adersolutions/sirius-ui-react
# or
pnpm add @adersolutions/sirius-ui-react
# or
yarn add @adersolutions/sirius-ui-react
```

## Usage

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

## Components

- **Actions**: Button
- **Feedback**: Badge, Banner, ErrorBoundary, Spinner, Toast
- **Forms & Selections**: Checkbox, ChoiceList, IndexFilters, SearchField, TextField, Tabs
- **Layout & Structure**: Box, Layout, Page, Stack, Header, EmptyState
- **Navigation**: Frame, Navigation
- **Overlays**: Modal, Portal, Tooltip, Popover
- **Typography**: Heading, Text, Title, Subtitle

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```
