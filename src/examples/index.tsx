import React from 'react'
import Box from '@/components/layout-structure/Box'
import Page from '@/components/layout-structure/Page'
import Layout from '@/components/layout-structure/Layout'
import LegacyStack from '@/components/layout-structure/LegacyStack'

export default function ExamplePage() {
  return (
    <div className="container mx-auto flex justify-center h-screen">
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
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
            <p className="bg-indigo-100 text-indigo-700 px-2 rounded w-fit">test</p>
          </LegacyStack>
        </Box>
        <Layout as="section">
          <Layout.Section primary> 1111</Layout.Section>
          <Layout.Section> 222</Layout.Section>
          <Layout.Section secondary> 1111</Layout.Section>
          <Layout.Section> 222</Layout.Section>
          {/* <Layout.Section> 222</Layout.Section> */}
          {/* <Layout.AnnotatedSection>2222</Layout.AnnotatedSection> */}
        </Layout>
      </Page>
    </div>
  )
}
