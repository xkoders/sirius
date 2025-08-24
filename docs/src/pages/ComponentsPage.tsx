import React from 'react'

const ComponentsPage: React.FC = () => {
  const componentCategories = [
    {
      name: 'Actions',
      components: ['Button'],
      description: 'Interactive elements for user actions'
    },
    {
      name: 'Feedback',
      components: ['Badge', 'Banner', 'ErrorBoundary', 'Spinner', 'Toast'],
      description: 'Components for user feedback and status'
    },
    {
      name: 'Forms & Selections',
      components: ['Checkbox', 'ChoiceList', 'IndexFilters', 'SearchField', 'TextField', 'Tabs'],
      description: 'Form controls and input components'
    },
    {
      name: 'Layout & Structure',
      components: ['Box', 'Layout', 'Page', 'Stack', 'Header', 'EmptyState'],
      description: 'Layout and structural components'
    },
    {
      name: 'Navigation',
      components: ['Frame', 'Navigation'],
      description: 'Navigation and routing components'
    },
    {
      name: 'Overlays',
      components: ['Modal', 'Portal', 'Tooltip', 'Popover'],
      description: 'Overlay and popup components'
    },
    {
      name: 'Typography',
      components: ['Heading', 'Text', 'Title', 'Subtitle'],
      description: 'Text and typography components'
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Components</h1>
        <p className="mt-2 text-gray-600">
          Explore all available components in the Sirius UI library
        </p>
      </div>

      <div className="space-y-8">
        {componentCategories.map((category) => (
          <div key={category.name} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {category.name}
            </h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.components.map((component) => (
                <div
                  key={component}
                  className="border border-gray-200 rounded-md p-4 hover:border-blue-300 hover:shadow-md transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{component}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Component description will be added here
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentsPage
