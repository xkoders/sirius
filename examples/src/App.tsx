import React from 'react'
import { ProviderSirius, ErrorBoundary } from '@adersolutions/sirius-react'
import ExamplePage from './ExamplePage'

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
