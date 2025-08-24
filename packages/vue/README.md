# Sirius UI Vue

A modern, accessible, and customizable UI component library for Vue applications.

## Installation

```bash
npm install @adersolutions/sirius-ui-vue
# or
pnpm add @adersolutions/sirius-ui-vue
# or
yarn add @adersolutions/sirius-ui-vue
```

## Usage

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

## Components

Vue components will be available here once implemented:

- **Actions**: Button
- **Feedback**: Badge, Banner, Spinner, Toast
- **Forms & Selections**: Checkbox, SearchField, TextField, Tabs
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
