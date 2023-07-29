import React, { useState } from 'react'
import {
  Box,
  Page,
  Layout,
  Stack,
  SkeletonBodyText,
  SkeletonDisplayText,
  Navigation,
  Frame,
  Table,
  Badge,
  Text,
  Banner,
  Button,
  EmptyState,
  ChoiceList,
  InlineError,
  MediaCard,
  Popover,
  Spinner,
  IndexFilters,
  Thumbnail,
  Tooltip,
  Modal,
  ExceptionList,
} from '@/components'
import { HomeIcon, InboxIcon, TagIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { useToast } from '@/hooks'
import { IAction } from '@/types'

const toastData = {
  id: 1,
  content: 'This is a toast content',
  duration: 1000000,
  action: {
    label: 'Undo',
    onAction: () => {},
  },
}

const sidebar = (
  <Navigation>
    <Navigation.Section
      items={[
        {
          url: '#',
          label: 'Home',
          disabled: true,
          icon: HomeIcon,
        },
        {
          url: '#',
          label: 'Orders',
          icon: InboxIcon,
          badge: <Badge status="critical">16</Badge>,
        },
        {
          url: '#',
          label: 'Products',
          icon: TagIcon,
          selected: true,
          subNavigationItems: [
            {
              url: '#',
              selected: true,
              label: 'Collections',
            },
            {
              url: '#',
              disabled: true,
              label: 'Inventory',
            },
          ],
        },
      ]}
    />
  </Navigation>
)

const promotedBulkActions = [
  {
    label: 'Create shipping labels',
    onAction: () => console.log('Todo: implement bulk edit'),
  },
]
const bulkActions = [
  {
    label: 'Add tags',
    onAction: () => console.log('Todo: implement bulk add tags'),
  },
  {
    label: 'Remove tags',
    onAction: () => console.log('Todo: implement bulk remove tags'),
  },
  {
    label: 'Delete orders',
    onAction: () => console.log('Todo: implement bulk delete'),
  },
]
const actionGroups = [
  {
    title: 'Promote',
    actions: [
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action'),
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action'),
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action'),
      },
      {
        label: 'Share on Facebook',
        onAction: () => alert('Share on Facebook action'),
      },
    ],
  },
]

const orders = [
  {
    id: '1020',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1020',
    date: 'Jul 20 at 4:34pm',
    customer: 'Jaydon Stanton',
    total: '$969.44',
    paymentStatus: (
      <Badge status="default" type="incomplete">
        default - incomplete
      </Badge>
    ),
    fulfillmentStatus: (
      <Badge icon={TagIcon} status="info">
        info - live
      </Badge>
    ),
  },
  {
    id: '1019',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1019',
    date: 'Jul 20 at 3:46pm',
    customer: 'Ruben Westerfelt',
    total: '$701.19',
    paymentStatus: (
      <Badge status="pending" type="halfComplete">
        pending - halfComplete
      </Badge>
    ),
    fulfillmentStatus: (
      <Badge status="success" type="complete">
        success - complete
      </Badge>
    ),
  },
  {
    id: '1018',
    src: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    order: '#1018',
    date: 'Jul 20 at 3.44pm',
    customer: 'Leo Carder',
    total: '$798.24',
    paymentStatus: (
      <Badge status="warning" type="dashed">
        warning - dashed
      </Badge>
    ),
    fulfillmentStatus: <Badge status="critical">critical - publish</Badge>,
  },
]
const plans = [
  { id: 'small', label: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', label: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', label: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]
const FILTERS = [
  {
    key: 'accountStatus',
    label: 'Account status',
    filter: (
      <></>

      // <ChoiceList
      //   title="Account status"
      //   titleHidden
      //   choices={[
      //     { label: 'Enabled', value: 'enabled' },
      //     { label: 'Not invited', value: 'not invited' },
      //     { label: 'Invited', value: 'invited' },
      //     { label: 'Declined', value: 'declined' },
      //   ]}
      //   selected={accountStatus || []}
      //   onChange={handleAccountStatusChange}
      //   allowMultiple
      // />
    ),
    shortcut: true,
  },
  {
    key: 'taggedWith',
    label: 'Tagged with',
    filter: (
      <></>

      // <TextField
      //   label="Tagged with"
      //   value={taggedWith}
      //   onChange={handleTaggedWithChange}
      //   autoComplete="off"
      //   labelHidden
      // />
    ),
    shortcut: true,
  },
  {
    key: 'moneySpent',
    label: 'Money spent',
    filter: (
      <></>
      // <RangeSlider
      //   label="Money spent is between"
      //   labelHidden
      //   value={moneySpent || [0, 500]}
      //   prefix="$"
      //   output
      //   min={0}
      //   max={2000}
      //   step={1}
      //   onChange={handleMoneySpentChange}
      // />
    ),
  },
]
export default function ExamplePage() {
  const toast = useToast()
  const [showModal, setShowModal] = useState(false)
  const primaryAction: IAction = {
    label: 'Save',
    // disabled: false,
    onAction: () => {
      console.log('Save action')
      toast.show(toastData)
    },
  }
  const secondaryActions = [
    {
      label: 'Modal',
      onAction: () => setShowModal(true),
    },

    {
      label: 'View on store',
      onAction: () => alert('View on your store action'),
    },
  ]

  return (
    <Frame sidebar={sidebar}>
      <Page
        backAction={{ label: 'Products', url: '#' }}
        title="3/4 inch Leather pet collar"
        subtitle="Perfect for any pet"
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        actionGroups={actionGroups}
      >
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Stack alignment="center" spacing="baseTight" vertical={true}>
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
        </Modal>

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

          <Thumbnail size="xs" src={TagIcon} />
          <Thumbnail size="sm" src={TagIcon} />
          <Thumbnail size="md" src={TagIcon} />
          <Thumbnail size="lg" src={TagIcon} />

          <Thumbnail size="xl" src={TagIcon} />
        </Stack>
        <ExceptionList
          className="text-gray-600 my-5"
          gap={2}
          items={[
            {
              icon: InformationCircleIcon,
              description: 'This customer is awesome. Make sure to treat them right!',
            },
            {
              icon: InformationCircleIcon,
              description: 'lorem ipsum dolor sit amet',
            },
          ]}
        />
        <Box className="bg-white rounded-lg shadow mb-5">
          <IndexFilters
            filters={FILTERS}
            sortOptions={
              <Box className="p-3 min-w-fit whitespace-nowrap">
                <ChoiceList items={plans} name="plans" defaultChecked={plans[1]} />
                <InlineError message="Store name is required" />
              </Box>
            }
          />
          <Table
            items={orders}
            headings={[
              { title: 'photo' },
              { title: 'Order' },
              { title: 'Date' },
              { title: 'Customer' },
              { title: 'Total', alignment: 'end' },
              { title: 'Payment status' },
              { title: 'Fulfillment status' },
            ]}
            bulkActions={bulkActions}
            promotedBulkActions={promotedBulkActions}
          >
            {orders.map((order, index) => (
              <Table.Row item={order} key={index}>
                <Table.Cell>
                  <Thumbnail src={order.src} alt={order.order} size="sm" />
                </Table.Cell>
                <Table.Cell>
                  <Text color="info" variant="bodyMd" fontWeight="semibold">
                    {order.order}
                  </Text>
                </Table.Cell>
                <Table.Cell>{order.date}</Table.Cell>
                <Table.Cell>{order.customer}</Table.Cell>
                <Table.Cell>{order.total}</Table.Cell>
                <Table.Cell>{order.paymentStatus}</Table.Cell>
                <Table.Cell>{order.fulfillmentStatus}</Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Box>

        <MediaCard
          url="https://picsum.photos/300/300"
          title="Lorem ipsum"
          className="mb-5"
          promotedAction={primaryAction}
          primaryAction={secondaryActions}
          popoverActions={secondaryActions}
        >
          <div className="flex gap-3">
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
        <Banner title="Title banner " status="critical" className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
        </Banner>
        <Box sectionned shadow="colored" as="section" className="mb-6 gap-2">
          <Text variant="heading2xl" fontWeight="medium">
            Text comp: heading2xl - medium
          </Text>
          <Text variant="bodySm" fontWeight="regular" color="subdued">
            Text comp: bodySm - regular - subdued
          </Text>
          <br />
          <Stack alignment="center" spacing="baseTight" vertical={true}>
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
        <Box sectionned className="mb-5">
          <EmptyState
            heading="Upload a file to get started"
            actions={[{ label: 'Upload files' }]}
            thumb="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <p>
              You can use the Files section to upload images, videos, and other documents. This
              example shows the content with a centered layout and full width.
            </p>
          </EmptyState>
        </Box>
        {/* <Box sectionned className="mb-5"> */}
        <EmptyState
          heading="Upload a file to get started"
          actions={[{ label: 'Upload files' }]}
          thumb={<TagIcon className="text-orange-500" />}
        >
          <p>
            You can use the Files section to upload images, videos, and other documents. This
            example shows the content with a centered layout and full width.
          </p>
        </EmptyState>
        {/* </Box> */}
        <Box sectionned as="section" className="mb-6 gap-2">
          <Stack alignment="center" spacing="baseTight" vertical={true}>
            <Banner status="warning">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, numquam.
            </Banner>
            <SkeletonBodyText lines={3} />
          </Stack>
        </Box>
        <Layout className="mb-5">
          <Layout.Section primary>
            <SkeletonDisplayText size="5xl" width={100} />
          </Layout.Section>
          <Layout.Section>
            <SkeletonDisplayText size="5xl" width={100} />
          </Layout.Section>
        </Layout>
        <Layout className="mb-5">
          <Layout.Section secondary>
            <SkeletonDisplayText size="5xl" width={100} />
          </Layout.Section>
          <Layout.Section>
            <SkeletonDisplayText size="5xl" width={100} />
          </Layout.Section>
        </Layout>
        <Layout className="mb-5">
          <Layout.AnnotatedSection
            title="3/4 inch Leather pet collar"
            description="Perfect for any pet"
          >
            <Box sectionned shadow="md">
              <SkeletonBodyText lines={5} />
            </Box>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="3/4 inch Leather pet collar"
            description="Perfect for any pet"
          >
            <Box sectionned shadow="md">
              <SkeletonBodyText lines={5} />
            </Box>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    </Frame>
  )
}

const Buttons = () => (
  <>
    <Box className="mb-6 flex gap-2 flex-wrap">
      <Button size="large" fullwidth>
        Button: default - large - fullWidth
      </Button>
      <Button>Button</Button>
      <Button outline>Button</Button>
      <Button size="small">Button</Button>
      <Button size="slim">Button</Button>
      <Button variant="info" link size="none">
        link
      </Button>
    </Box>
    <Box className="mb-6 flex gap-2 flex-wrap">
      <Button variant="ghost">ghost</Button>
      <Button variant="danger">danger</Button>
      <Button variant="primary">primary</Button>
      <Button variant="subdued">subdued</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info" loading>
        info
      </Button>
      <Button icon={TagIcon}>info</Button>
      <Button icon={TagIcon} variant="info" rounded="full">
        info
      </Button>
    </Box>
  </>
)
