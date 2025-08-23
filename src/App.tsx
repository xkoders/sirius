import React from 'react'
import { ProviderSirius, ErrorBoundary } from './components'
import ExamplePage from './examples/ExamplePage'

function App() {
  return (
    <ErrorBoundary>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <ProviderSirius>
        <ExamplePage />
      </ProviderSirius>
    </ErrorBoundary>
  )
}

export default App
