---
id: examples
title: Examples
sidebar_label: Examples
---

# Examples

Explore comprehensive examples of Sirius UI components in action. All examples are available for both React and Vue frameworks - use the library switcher in the navigation to toggle between implementations.

## 🎯 Component Showcase

### Button Variants

#### React

```tsx
import { Button } from '@adersolutions/sirius-react';

function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button outline>Outline</Button>
        <Button link>Link</Button>
      </div>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-4">
    <div class="flex gap-2 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
    </div>
    
    <div class="flex gap-2 flex-wrap">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
    
    <div class="flex gap-2 flex-wrap">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button outline>Outline</Button>
      <Button link>Link</Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@adersolutions/sirius-vue';
</script>
```

### Badge Status Indicators

#### React

```tsx
import { Badge } from '@adersolutions/sirius-react';

function BadgeShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Badge status="default">Default</Badge>
        <Badge status="info">Info</Badge>
        <Badge status="success">Success</Badge>
        <Badge status="warning">Warning</Badge>
        <Badge status="critical">Critical</Badge>
        <Badge status="pending">Pending</Badge>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Badge type="incomplete">In Progress</Badge>
        <Badge type="halfComplete">Half Done</Badge>
        <Badge type="complete">Complete</Badge>
        <Badge type="dashed">Dashed</Badge>
      </div>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="space-y-4">
    <div class="flex gap-2 flex-wrap">
      <Badge status="default">Default</Badge>
      <Badge status="info">Info</Badge>
      <Badge status="success">Success</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="critical">Critical</Badge>
      <Badge status="pending">Pending</Badge>
    </div>
    
    <div class="flex gap-2 flex-wrap">
      <Badge type="incomplete">In Progress</Badge>
      <Badge type="halfComplete">Half Done</Badge>
      <Badge type="complete">Complete</Badge>
      <Badge type="dashed">Dashed</Badge>
    </div>
  </div>
</template>

<script setup>
import { Badge } from '@adersolutions/sirius-vue';
</script>
```

## 📝 Form Examples

### Contact Form

#### React

```tsx
import { 
  TextField, 
  Checkbox, 
  Button, 
  Stack,
  Banner 
} from '@adersolutions/sirius-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitForm(formData);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '', newsletter: false });
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <Banner status="success">
        Thank you for your message! We'll get back to you soon.
      </Banner>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="medium">
        <TextField
          label="Name"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Enter your name"
          required
        />
        
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter your email"
          required
        />
        
        <TextField
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Enter your message"
          required
        />
        
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={handleChange('newsletter')}
        />
        
        <Stack direction="horizontal" gap="small">
          <Button 
            type="submit" 
            variant="primary"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <Button 
            type="button" 
            variant="outline"
            onClick={() => setFormData({ name: '', email: '', message: '', newsletter: false })}
          >
            Clear
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
```

#### Vue

```vue
<template>
  <form @submit="handleSubmit">
    <Stack gap="medium">
      <TextField
        label="Name"
        v-model="formData.name"
        placeholder="Enter your name"
        required
      />
      
      <TextField
        label="Email"
        type="email"
        v-model="formData.email"
        placeholder="Enter your email"
        required
      />
      
      <TextField
        label="Message"
        multiline
        :rows="4"
        v-model="formData.message"
        placeholder="Enter your message"
        required
      />
      
      <Checkbox
        label="Subscribe to newsletter"
        v-model="formData.newsletter"
      />
      
      <Stack direction="horizontal" gap="small">
        <Button 
          type="submit" 
          variant="primary"
          :loading="isSubmitting"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </Button>
        
        <Button 
          type="button" 
          variant="outline"
          @click="clearForm"
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { 
  TextField, 
  Checkbox, 
  Button, 
  Stack 
} from '@adersolutions/sirius-vue';

const formData = reactive({
  name: '',
  email: '',
  message: '',
  newsletter: false
});

const isSubmitting = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  isSubmitting.value = true;
  
  try {
    await submitForm(formData);
    // Handle success
  } catch (error) {
    console.error('Form submission failed:', error);
  } finally {
    isSubmitting.value = false;
  }
};

const clearForm = () => {
  Object.assign(formData, { name: '', email: '', message: '', newsletter: false });
};
</script>
```

## 🎨 Layout Examples

### Dashboard Layout

#### React

```tsx
import { 
  Stack, 
  Box, 
  Badge, 
  Button,
  TextField 
} from '@adersolutions/sirius-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <Stack gap="large">
          {/* Header */}
          <Box className="bg-white p-6 rounded-lg shadow">
            <Stack direction="horizontal" justify="space-between" align="center">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600">Welcome back!</p>
              </div>
              <Stack direction="horizontal" gap="small">
                <Badge status="success">Online</Badge>
                <Button variant="primary">Settings</Button>
              </Stack>
            </Stack>
          </Box>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Box className="bg-white p-6 rounded-lg shadow">
              <Stack gap="small">
                <h3 className="text-lg font-semibold">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
                <Badge status="success">+12% from last month</Badge>
              </Stack>
            </Box>
            
            <Box className="bg-white p-6 rounded-lg shadow">
              <Stack gap="small">
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p className="text-3xl font-bold text-green-600">$45,678</p>
                <Badge status="success">+8% from last month</Badge>
              </Stack>
            </Box>
            
            <Box className="bg-white p-6 rounded-lg shadow">
              <Stack gap="small">
                <h3 className="text-lg font-semibold">Orders</h3>
                <p className="text-3xl font-bold text-purple-600">567</p>
                <Badge status="warning">-2% from last month</Badge>
              </Stack>
            </Box>
          </div>
          
          {/* Quick Actions */}
          <Box className="bg-white p-6 rounded-lg shadow">
            <Stack gap="medium">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <Stack direction="horizontal" gap="small" wrap>
                <Button variant="primary">Add User</Button>
                <Button variant="success">Create Order</Button>
                <Button variant="info">Generate Report</Button>
                <Button variant="outline">Export Data</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto p-6">
      <Stack gap="large">
        <!-- Header -->
        <Box class="bg-white p-6 rounded-lg shadow">
          <Stack direction="horizontal" justify="space-between" align="center">
            <div>
              <h1 class="text-2xl font-bold">Dashboard</h1>
              <p class="text-gray-600">Welcome back!</p>
            </div>
            <Stack direction="horizontal" gap="small">
              <Badge status="success">Online</Badge>
              <Button variant="primary">Settings</Button>
            </Stack>
          </Stack>
        </Box>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Box class="bg-white p-6 rounded-lg shadow">
            <Stack gap="small">
              <h3 class="text-lg font-semibold">Total Users</h3>
              <p class="text-3xl font-bold text-blue-600">1,234</p>
              <Badge status="success">+12% from last month</Badge>
            </Stack>
          </Box>
          
          <Box class="bg-white p-6 rounded-lg shadow">
            <Stack gap="small">
              <h3 class="text-lg font-semibold">Revenue</h3>
              <p class="text-3xl font-bold text-green-600">$45,678</p>
              <Badge status="success">+8% from last month</Badge>
            </Stack>
          </Box>
          
          <Box class="bg-white p-6 rounded-lg shadow">
            <Stack gap="small">
              <h3 class="text-lg font-semibold">Orders</h3>
              <p class="text-3xl font-bold text-purple-600">567</p>
              <Badge status="warning">-2% from last month</Badge>
            </Stack>
          </Box>
        </div>
        
        <!-- Quick Actions -->
        <Box class="bg-white p-6 rounded-lg shadow">
          <Stack gap="medium">
            <h2 class="text-xl font-semibold">Quick Actions</h2>
            <Stack direction="horizontal" gap="small" wrap>
              <Button variant="primary">Add User</Button>
              <Button variant="success">Create Order</Button>
              <Button variant="info">Generate Report</Button>
              <Button variant="outline">Export Data</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </div>
  </div>
</template>

<script setup>
import { 
  Stack, 
  Box, 
  Badge, 
  Button 
} from '@adersolutions/sirius-vue';
</script>
```

## 🚀 Getting Started

### Installation

#### React
```bash
pnpm add @adersolutions/sirius-react
```

#### Vue
```bash
pnpm add @adersolutions/sirius-vue
```

### Basic Setup

#### React
```tsx
import { Button, Badge, Stack } from '@adersolutions/sirius-react';
import '@adersolutions/sirius-react/style.css';

function App() {
  return (
    <Stack gap="medium">
      <Badge status="success">Ready to go!</Badge>
      <Button variant="primary">Get Started</Button>
    </Stack>
  );
}
```

#### Vue
```vue
<template>
  <Stack gap="medium">
    <Badge status="success">Ready to go!</Badge>
    <Button variant="primary">Get Started</Button>
  </Stack>
</template>

<script setup>
import { Button, Badge, Stack } from '@adersolutions/sirius-vue';
import '@adersolutions/sirius-vue/style.css';
</script>
```

## 📚 Next Steps

- Explore individual component documentation
- Check out the [Getting Started](/docs/getting-started) guide
- Browse the [Components Overview](/docs/components/components-overview)
- Join our community on [GitHub](https://github.com/adersolutions/sirius-ui)
