import React from 'react'
import Box from '@/components/layout-structure/Box'
import Page from '@/components/layout-structure/Page'

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
        <Box sectionned shadow="colored">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </Box>
      </Page>
    </div>
  )
}
