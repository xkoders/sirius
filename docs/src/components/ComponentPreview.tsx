'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import clsx from 'clsx'

// Sirius React components will be imported when the workspace packages are built
// For now, we'll use fallback components to ensure the documentation works
let ReactButton: any, ReactBadge: any, ReactCard: any, ReactSpinner: any
let ReactTextField: any, ReactCheckbox: any, ReactBox: any
let ReactToast: any, ReactBanner: any, ReactNavigation: any
let ReactModal: any, ReactTooltip: any
let ReactTabs: any, ReactSearchField: any, ReactStack: any
let ReactEmptyState: any, ReactTable: any, ReactThumbnail: any
let ReactHeading: any, ReactTitle: any, ReactSubtitle: any, ReactText: any

// TODO: Import actual Sirius React components when workspace packages are built
// import { Button as ReactButton, Badge as ReactBadge, ... } from '@adersolutions/sirius-react'

// Fallback components for when Sirius components aren't available
const FallbackButton = ({ children, variant = 'primary', ...props }: any) => (
  <button 
    className={`px-4 py-2 rounded ${
      variant === 'primary' ? 'bg-blue-500 text-white' : 
      variant === 'secondary' ? 'bg-gray-200 text-gray-800' : 
      'border border-gray-300 bg-white text-gray-800'
    }`}
    {...props}
  >
    {children}
  </button>
)

const FallbackBadge = ({ children, status = 'default', ...props }: any) => (
  <span 
    className={`px-2 py-1 rounded text-xs ${
      status === 'success' ? 'bg-green-100 text-green-800' :
      status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
      status === 'critical' ? 'bg-red-100 text-red-800' :
      status === 'info' ? 'bg-blue-100 text-blue-800' :
      'bg-gray-100 text-gray-800'
    }`}
    {...props}
  >
    {children}
  </span>
)

const FallbackSpinner = ({ size = 'medium', ...props }: any) => (
  <div 
    className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-500 ${
      size === 'small' ? 'h-4 w-4' :
      size === 'large' ? 'h-8 w-8' :
      'h-6 w-6'
    }`}
    {...props}
  />
)

const FallbackBox = ({ children, shadow = 'none', rounded = 'md', className = '', ...props }: any) => (
  <div 
    className={`${
      shadow === 'sm' ? 'shadow-sm' :
      shadow === 'md' ? 'shadow-md' :
      shadow === 'lg' ? 'shadow-lg' :
      shadow === 'colored' ? 'shadow-lg shadow-blue-500/25' :
      ''
    } ${
      rounded === 'sm' ? 'rounded-sm' :
      rounded === 'md' ? 'rounded-md' :
      rounded === 'lg' ? 'rounded-lg' :
      rounded === 'xl' ? 'rounded-xl' :
      rounded === '2xl' ? 'rounded-2xl' :
      rounded === 'full' ? 'rounded-full' :
      'rounded-md'
    } ${className}`}
    {...props}
  >
    {children}
  </div>
)

const FallbackTabs = ({ tabs = [], selected = 0, onChange, ...props }: any) => (
  <div className="border-b border-gray-200">
    <nav className="-mb-px flex space-x-8">
      {tabs.map((tab: any, index: number) => (
        <button
          key={index}
          className={`py-2 px-1 border-b-2 font-medium text-sm ${
            selected === index
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => onChange?.(index, tab)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </div>
)

const FallbackSearchField = ({ value = '', onChange, placeholder = 'Search...', ...props }: any) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    />
  </div>
)

const FallbackStack = ({ children, vertical = false, spacing = 'baseTight', className = '', ...props }: any) => (
  <div 
    className={`flex ${vertical ? 'flex-col' : 'flex-row'} ${
      spacing === 'extraTight' ? 'gap-1' :
      spacing === 'tight' ? 'gap-2' :
      spacing === 'baseTight' ? 'gap-4' :
      spacing === 'loose' ? 'gap-8' :
      spacing === 'extraLoose' ? 'gap-12' :
      'gap-0'
    } ${className}`}
    {...props}
  >
    {children}
  </div>
)

const FallbackEmptyState = ({ heading = 'No items', children, ...props }: any) => (
  <div className="text-center py-12">
    <div className="mx-auto h-12 w-12 text-gray-400">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    </div>
    <h3 className="mt-2 text-sm font-medium text-gray-900">{heading}</h3>
    {children && <p className="mt-1 text-sm text-gray-500">{children}</p>}
  </div>
)

const FallbackThumbnail = ({ src, alt = '', size = 'md', ...props }: any) => (
  <div className={`${
    size === 'xs' ? 'h-6 w-6' :
    size === 'sm' ? 'h-8 w-8' :
    size === 'md' ? 'h-10 w-10' :
    size === 'lg' ? 'h-14 w-14' :
    size === 'xl' ? 'h-20 w-20' :
    'h-10 w-10'
  } rounded-md bg-gray-200 flex items-center justify-center`}>
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-md" />
    ) : (
      <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    )}
  </div>
)

// Vue component imports would go here when Vue is set up
// import { Button as VueButton } from '@adersolutions/sirius-vue'

interface ComponentPreviewContextType {
  selectedFramework: 'react' | 'vue'
  setSelectedFramework: (framework: 'react' | 'vue') => void
}

const ComponentPreviewContext = createContext<ComponentPreviewContextType | null>(null)

export function useComponentPreview() {
  const context = useContext(ComponentPreviewContext)
  if (!context) {
    // Return default values when not in provider context
    return {
      selectedFramework: 'react' as const,
      setSelectedFramework: () => {}
    }
  }
  return context
}

interface ComponentPreviewProviderProps {
  children: React.ReactNode
  defaultFramework?: 'react' | 'vue'
}

export function ComponentPreviewProvider({ 
  children, 
  defaultFramework = 'react' 
}: ComponentPreviewProviderProps) {
  const [selectedFramework, setSelectedFramework] = useState<'react' | 'vue'>(defaultFramework)

  return (
    <ComponentPreviewContext.Provider value={{ selectedFramework, setSelectedFramework }}>
      {children}
    </ComponentPreviewContext.Provider>
  )
}

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function ComponentPreview({ children, className, title }: ComponentPreviewProps) {
  return (
    <div className={clsx('my-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800', className)}>
      {title && (
        <h4 className="mb-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</h4>
      )}
      <div className="flex items-center justify-center min-h-[120px]">
        {children}
      </div>
    </div>
  )
}

// Example component renderers for different frameworks
export function ReactComponentRenderer({ component, props }: { component: string; props?: Record<string, any> }) {
  try {
    const components: Record<string, React.ComponentType<any>> = {
      Button: ReactButton || FallbackButton,
      Badge: ReactBadge || FallbackBadge,
      MediaCard: ReactCard || FallbackBox,
      Spinner: ReactSpinner || FallbackSpinner,
      TextField: ReactTextField || FallbackBox,
      Checkbox: ReactCheckbox || FallbackBox,
      Box: ReactBox || FallbackBox,
      Toast: ReactToast || FallbackBox,
      Banner: ReactBanner || FallbackBox,
      Navigation: ReactNavigation || FallbackBox,
      Modal: ReactModal || FallbackBox,
      Tooltip: ReactTooltip || FallbackBox,
      Tabs: ReactTabs || FallbackTabs,
      SearchField: ReactSearchField || FallbackSearchField,
      Stack: ReactStack || FallbackStack,
      EmptyState: ReactEmptyState || FallbackEmptyState,
      Table: ReactTable || FallbackBox,
      Thumbnail: ReactThumbnail || FallbackThumbnail,
      Heading: ReactHeading || FallbackBox,
      Title: ReactTitle || FallbackBox,
      Subtitle: ReactSubtitle || FallbackBox,
      Text: ReactText || FallbackBox,
    }

    const Component = components[component]
    
    if (!Component) {
      return (
        <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50">
          Component "{component}" not found in React library
        </div>
      )
    }

    // Add a note if using fallback components
    const isFallback = !ReactButton && (component === 'Button' || component === 'Badge' || component === 'Spinner' || component === 'Box')
    
    return (
      <div>
        {isFallback && (
          <div className="text-xs text-yellow-600 mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
            Using fallback component - Sirius React package not available
          </div>
        )}
        <Component {...props} />
      </div>
    )
  } catch (error) {
    return (
      <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50">
        Error rendering {component}: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    )
  }
}

export function VueComponentRenderer({ component, props }: { component: string; props?: Record<string, any> }) {
  // This would render Vue components when Vue is properly integrated
  return (
    <div className="text-yellow-600 text-sm p-4 border border-yellow-200 rounded bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400">
      Vue component rendering not yet implemented. Component: {component}
    </div>
  )
}

interface LiveComponentProps {
  component: string
  props?: Record<string, any>
  frameworks?: ('react' | 'vue')[]
}

export function LiveComponent({ component, props = {}, frameworks = ['react', 'vue'] }: LiveComponentProps) {
  try {
    const { selectedFramework } = useComponentPreview()

    const renderComponent = () => {
      try {
        switch (selectedFramework) {
          case 'react':
            return <ReactComponentRenderer component={component} props={props} />
          case 'vue':
            return <VueComponentRenderer component={component} props={props} />
          default:
            return (
              <div className="text-gray-500 text-sm p-4 border border-gray-200 rounded bg-gray-50">
                Unknown framework: {selectedFramework}
              </div>
            )
        }
      } catch (error) {
        return (
          <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50">
            Error rendering component: {error instanceof Error ? error.message : 'Unknown error'}
          </div>
        )
      }
    }

    if (!frameworks.includes(selectedFramework)) {
      return (
        <div className="text-gray-500 text-sm p-4 border border-gray-200 rounded bg-gray-50">
          Component not available for {selectedFramework}
        </div>
      )
    }

    return (
      <div className="transition-all duration-200">
        {renderComponent()}
      </div>
    )
  } catch (error) {
    return (
      <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50">
        Error in LiveComponent: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    )
  }
}
