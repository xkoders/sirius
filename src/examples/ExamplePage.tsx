import React from 'react'
import {
  Box,
  Page,
  Layout,
  LegacyStack,
  SkeletonBodyText,
  SkeletonDisplayText,
  Navigation,
  Frame,
} from '@/components'
import { HomeIcon, InboxIcon, TagIcon } from '@heroicons/react/20/solid'
export default function ExamplePage() {
  const navigation = (
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
            badge: '15',
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
  return (
    <Frame className="" sidebar={navigation}>
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
            label: 'Duplicate',

            onAction: () => alert('Duplicate action'),
          },
          {
            label: 'View on your store',
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
        <Box sectionned shadow="colored" as="section" className="mb-6">
          <LegacyStack alignment="center" spacing="loose" vertical={true}>
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
            <SkeletonBodyText lines={15} />
          </LegacyStack>
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
