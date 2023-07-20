import React from 'react'
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
} from '@/components'
import { HomeIcon, InboxIcon, TagIcon } from '@heroicons/react/20/solid'

export default function ExamplePage() {
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

  const orders = [
    {
      id: '1020',
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
  return (
    <Frame sidebar={sidebar}>
      <Page
        backAction={{ label: 'Products', url: '#' }}
        title="3/4 inch Leather pet collar"
        subtitle="Perfect for any pet"
        primaryAction={{ label: 'Save', disabled: true }}
        secondaryActions={[
          {
            label: 'Duplicate',
            onAction: () => alert('Duplicate action'),
          },

          {
            label: 'View on store',
            onAction: () => alert('View on your store action'),
          },
        ]}
        actionGroups={[
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
        ]}
      >
        <Box className="bg-white rounded-lg shadow mb-20">
          <Table
            items={orders}
            headings={[
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
                <Table.Cell>{order.order}</Table.Cell>
                <Table.Cell>{order.date}</Table.Cell>
                <Table.Cell>{order.customer}</Table.Cell>
                <Table.Cell>{order.total}</Table.Cell>
                <Table.Cell>{order.paymentStatus}</Table.Cell>
                <Table.Cell>{order.fulfillmentStatus}</Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Box>
        <Box sectionned shadow="colored" as="section" className="mb-6">
          <Stack alignment="center" spacing="loose" vertical={true}>
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
            <SkeletonBodyText lines={15} />
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
