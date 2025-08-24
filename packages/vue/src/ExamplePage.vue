<template>
  <Frame :sidebar="true">
    <template #sidebar>
      <Navigation minimized>
        <Navigation.Section :items="NAVIGATION_SECTION_ITEM" />
        <Navigation.Section :items="NAVIGATION_SECTION_ITEM_2" title="These icons should have" />
        <Navigation.SectionFooter>this is footer</Navigation.SectionFooter>
      </Navigation>
    </template>
    
    <template #header>
      <Header />
    </template>
    
    <Page
      :back-action="{ label: 'Products', url: '#' }"
      title="3/4 inch Leather pet collar"
      subtitle="Perfect for any pet"
      :primary-action="primaryAction"
      :secondary-actions="secondaryActions"
      :action-groups="actionGroups"
    >
      <Box sectionned shadow="large" as="section" class="mb-6 gap-2">
        <Stack alignment="center" spacing="small" vertical>
          <Banner background="black" :icon="StarIcon">
            black background
          </Banner>
          <Banner background="critical" :icon="StarIcon">
            critical background
          </Banner>
          <Banner background="muted" :icon="StarIcon">
            muted background
          </Banner>
          <Banner background="light" :icon="StarIcon">
            light background
          </Banner>
          <Banner background="primary" :icon="StarIcon">
            primary background
          </Banner>
          <Banner background="default" :icon="StarIcon">
            default background
          </Banner>
          <Banner background="white" :icon="StarIcon">
            white background
          </Banner>
          <Banner background="dark" :icon="StarIcon">
            dark background
          </Banner>
          <Banner background="subdued" :icon="StarIcon">
            subdued background
          </Banner>
          <Banner background="info" :icon="StarIcon">
            info background
          </Banner>
          <Banner background="success" :icon="StarIcon">
            success background
          </Banner>
          <Banner background="warning" :icon="StarIcon">
            warning background
          </Banner>
        </Stack>
      </Box>
      
      <Modal :is-open="showModal" @close="showModal = false">
        <Stack alignment="center" spacing="small" vertical>
          <Banner status="default" background="primary">
            souf Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
        </Stack>
      </Modal>
      
      <Box class="mb-5 flex flex-col gap-2">
        <TextField
          type="text"
          suffix="$"
          help-text="Help text"
          placeholder="Placeholder text"
          label="Username"
          :label-action="{ content: 'Look up codes' }"
        />
        <TextField :prefix="TagIcon" size="small" suffix="$" />
        <TextField :prefix="InboxIcon" type="number" :min="1" size="medium" suffix="$" />
        <TextField :prefix="HomeIcon" size="large" suffix="$" />
        <TextField :multiline="3" placeholder="text area" label="text area" />
      </Box>
      
      <Stack>
        <Tooltip content="Store name is required" align="left" dark>
          <Thumbnail
            size="xs"
            src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
          />
        </Tooltip>
        
        <Thumbnail
          size="sm"
          src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        />
        <Thumbnail
          size="md"
          src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        />
        <Thumbnail
          size="lg"
          src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        />
        <Thumbnail
          size="xl"
          src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        />
        
        <Thumbnail size="xs" :src="TagIcon" />
        <Thumbnail size="sm" :src="TagIcon" />
        <Thumbnail size="md" :src="TagIcon" />
        <Thumbnail size="lg" :src="TagIcon" />
        <Thumbnail size="xl" :src="TagIcon" />
      </Stack>
      
      <ExceptionList
        class="text-gray-600 my-5"
        :gap="2"
        :items="[
          {
            icon: InformationCircleIcon,
            description: 'This customer is awesome. Make sure to treat them right!'
          },
          {
            icon: InformationCircleIcon,
            description: 'lorem ipsum dolor sit amet'
          }
        ]"
      />
      
      <Box class="bg-white rounded-lg shadow mb-5">
        <IndexFilters>
          <template #filters>
            <div class="flex space-x-4">
              <div class="min-w-fit">
                <ChoiceList
                  title="Account status"
                  title-hidden
                  :choices="[
                    { label: 'Enabled', value: 'enabled' },
                    { label: 'Not invited', value: 'not invited' },
                    { label: 'Invited', value: 'invited' },
                    { label: 'Declined', value: 'declined' }
                  ]"
                  :selected="accountStatus"
                  @change="handleAccountStatusChange"
                  :allow-multiple="true"
                />
              </div>
            </div>
          </template>
          
          <template #sortOptions>
            <div class="p-3 min-w-fit whitespace-nowrap">
              <ChoiceList :items="plans" name="plans" :default-checked="plans[1]" />
              <InlineError message="Store name is required" />
            </div>
          </template>
        </IndexFilters>
        
        <Table
          :items="orders"
          :headings="[
            { title: 'photo' },
            { title: 'Order' },
            { title: 'Date' },
            { title: 'Customer' },
            { title: 'Total', alignment: 'end' },
            { title: 'Payment status' },
            { title: 'Fulfillment status' }
          ]"
          :bulk-actions="bulkActions"
          :promoted-bulk-actions="promotedBulkActions"
        >
          <Table.Row
            v-for="(order, index) in orders"
            :key="index"
            :item="order"
          >
            <Table.Cell>
              <Thumbnail :src="order.src" :alt="order.order" size="sm" />
            </Table.Cell>
            <Table.Cell>
              <Text color="info" variant="bodyMd" font-weight="semibold">
                {{ order.order }}
              </Text>
            </Table.Cell>
            <Table.Cell>{{ order.date }}</Table.Cell>
            <Table.Cell>{{ order.customer }}</Table.Cell>
            <Table.Cell>{{ order.total }}</Table.Cell>
            <Table.Cell>{{ order.paymentStatus }}</Table.Cell>
            <Table.Cell>{{ order.fulfillmentStatus }}</Table.Cell>
          </Table.Row>
        </Table>
      </Box>
      
      <MediaCard
        url="https://picsum.photos/300/300"
        title="Lorem ipsum"
        class="mb-5"
        :promoted-action="primaryAction"
        :primary-action="secondaryActions"
        :popover-actions="secondaryActions"
      >
        <div class="flex gap-3">
          <Spinner size="large" />
          <Spinner />
          <Spinner size="small" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eveniet, iste. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet, iste. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet, iste.
        </p>
      </MediaCard>
      
      <Buttons />
      
      <Banner title="Title banner " status="critical" class="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
      </Banner>
      
      <Banner class="mb-5" status="critical" @dismiss="() => {}">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
      </Banner>
      
      <Box sectionned shadow="colored" as="section" class="mb-6 gap-2">
        <Text variant="heading2xl" font-weight="medium">
          Text comp: heading2xl - medium
        </Text>
        <Text variant="bodySm" font-weight="regular" color="subdued">
          Text comp: bodySm - regular - subdued
        </Text>
        <br />
        
        <!-- New Typography Components -->
        <div class="space-y-4">
          <Title size="lg">Title Component - Large</Title>
          <Subtitle size="md">Subtitle Component - Medium</Subtitle>
          
          <div class="space-y-2">
            <Heading as="h1" size="3xl">Heading H1 - 3xl</Heading>
            <Heading as="h2" size="2xl">Heading H2 - 2xl</Heading>
            <Heading as="h3" size="xl">Heading H3 - xl</Heading>
          </div>
          
          <div class="space-y-2">
            <Title size="sm">Small Title</Title>
            <Title size="md">Medium Title</Title>
            <Title size="lg">Large Title</Title>
            <Title size="xl">Extra Large Title</Title>
          </div>
          
          <div class="space-y-2">
            <Subtitle size="xs">Extra Small Subtitle</Subtitle>
            <Subtitle size="sm">Small Subtitle</Subtitle>
            <Subtitle size="md">Medium Subtitle</Subtitle>
            <Subtitle size="lg">Large Subtitle</Subtitle>
          </div>
        </div>
        
        <br />
        <Stack alignment="center" spacing="baseTight" vertical>
          <Banner status="default">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
          <Banner status="info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
          <Banner status="pending">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
          <Banner status="success">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
        </Stack>
      </Box>
      
      <Box sectionned class="mb-5">
        <EmptyState
          heading="Upload a file to get started"
          :actions="[{ label: 'Upload files' }]"
          thumb="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>
            You can use the Files section to upload images, videos, and other documents. This
            example shows the content with a centered layout and full width.
          </p>
        </EmptyState>
      </Box>
      
      <EmptyState
        heading="Upload a file to get started"
        :actions="[{ label: 'Upload files' }]"
        :thumb="TagIcon"
      >
        <p>
          You can use the Files section to upload images, videos, and other documents. This
          example shows the content with a centered layout and full width.
        </p>
      </EmptyState>
      
      <Box sectionned as="section" class="mb-6 gap-2">
        <Stack alignment="center" spacing="baseTight" vertical>
          <Banner status="warning">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
          </Banner>
          <SkeletonBodyText :lines="3" />
        </Stack>
      </Box>
      
      <Layout class="mb-5">
        <LayoutSection primary>
          <SkeletonDisplayText size="5xl" :width="100" />
        </LayoutSection>
        <LayoutSection>
          <SkeletonDisplayText size="5xl" :width="100" />
        </LayoutSection>
      </Layout>
      
      <Layout class="mb-5">
        <LayoutSection secondary>
          <SkeletonDisplayText size="5xl" :width="100" />
        </LayoutSection>
        <LayoutSection>
          <SkeletonDisplayText size="5xl" :width="100" />
        </LayoutSection>
      </Layout>
      
      <Layout class="mb-5">
        <LayoutAnnotatedSection
          title="3/4 inch Leather pet collar"
          description="Perfect for any pet"
        >
          <Box sectionned shadow="md">
            <SkeletonBodyText :lines="5" />
          </Box>
        </LayoutAnnotatedSection>
        <LayoutAnnotatedSection
          title="3/4 inch Leather pet collar"
          description="Perfect for any pet"
        >
          <Box sectionned shadow="md">
            <SkeletonBodyText :lines="5" />
          </Box>
        </LayoutAnnotatedSection>
      </Layout>
    </Page>
  </Frame>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Box,
  Page,
  Layout,
  LayoutSection,
  LayoutAnnotatedSection,
  Stack,
  SkeletonBodyText,
  SkeletonDisplayText,
  Navigation,
  Frame,
  Table,
  Badge,
  Text,
  Heading,
  Title,
  Subtitle,
  Banner,
  Button,
  EmptyState,
  ChoiceList,
  InlineError,
  MediaCard,
  Spinner,
  IndexFilters,
  Thumbnail,
  Tooltip,
  Modal,
  ExceptionList,
  Header,
  TextField,
  useToast
} from './index'
import type { IAction } from './types/common'

// Mock icons
const HomeIcon = { template: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>' }
const InboxIcon = { template: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a5 5 0 0010 0V7a1 1 0 112 0v6a7 7 0 11-14 0V7a5 5 0 0110-1z" clip-rule="evenodd"/></svg>' }
const TagIcon = { template: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/></svg>' }
const InformationCircleIcon = { template: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>' }
const StarIcon = { template: '<span class="text-sm/5 w-4 h-4">⭐</span>' }

const { success } = useToast()
const showModal = ref(false)
const accountStatus = ref<string[]>([])

const primaryAction: IAction = {
  label: 'Save',
  onAction: () => {
    success('This is a toast content')
  }
}

const secondaryActions = [
  {
    label: 'Modal',
    onAction: () => setShowModal(true)
  },
  {
    label: 'View on store',
    onAction: () => alert('View on your store action')
  }
]

const actionGroups = [
  {
    title: 'Promote',
    actions: [
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action')
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action')
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action')
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action')
      }
    ]
  }
]

const promotedBulkActions = [
  {
    label: 'Create shipping labels',
    onAction: () => console.log('Todo: implement bulk edit')
  }
]

const bulkActions = [
  {
    label: 'Add tags',
    onAction: () => console.log('Todo: implement bulk add tags')
  },
  {
    label: 'Remove tags',
    onAction: () => console.log('Todo: implement bulk remove tags')
  },
  {
    label: 'Delete orders',
    onAction: () => console.log('Todo: implement bulk delete')
  }
]

const orders = [
  {
    id: '1020',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1020',
    date: 'Jul 20 at 4:34pm',
    customer: 'Jaydon Stanton',
    total: '$969.44',
    paymentStatus: 'default - incomplete',
    fulfillmentStatus: 'info - live'
  },
  {
    id: '1019',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1019',
    date: 'Jul 20 at 3:46pm',
    customer: 'Ruben Westerfelt',
    total: '$701.19',
    paymentStatus: 'pending - halfComplete',
    fulfillmentStatus: 'success - complete'
  },
  {
    id: '1018',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1018',
    date: 'Jul 20 at 3.44pm',
    customer: 'Leo Carder',
    total: '$798.24',
    paymentStatus: 'warning - dashed',
    fulfillmentStatus: 'critical - publish'
  }
]

const plans = [
  { id: 'small', label: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', label: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', label: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' }
]

const NAVIGATION_SECTION_ITEM = [
  {
    url: '#',
    label: 'Home',
    disabled: true,
    icon: HomeIcon
  },
  {
    url: '#',
    label: 'Orders',
    icon: InboxIcon,
    badge: '16'
  },
  {
    url: '#',
    label: 'Products',
    icon: TagIcon,
    subNavigationItems: [
      {
        disabled: true,
        url: '#',
        label: 'Collections'
      },
      {
        url: '#',
        label: 'Inventory'
      }
    ]
  }
]

const NAVIGATION_SECTION_ITEM_2 = [
  {
    url: '#',
    label: 'Home',
    disabled: true,
    icon: HomeIcon
  },
  {
    url: '#',
    label: 'Mail',
    icon: InboxIcon,
    badge: 'new'
  },
  {
    url: '#',
    label: 'Products',
    icon: TagIcon,
    selected: true,
    subNavigationItems: [
      {
        url: '#',
        label: 'Collections'
      },
      {
        url: '#',
        label: 'Inventory'
      },
      {
        url: '#',
        selected: true,
        label: 'stock'
      },
      {
        url: '#',
        label: 'another one'
      }
    ]
  }
]

const handleAccountStatusChange = (selected: string[]) => {
  accountStatus.value = selected
}

const setShowModal = (value: boolean) => {
  showModal.value = value
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
