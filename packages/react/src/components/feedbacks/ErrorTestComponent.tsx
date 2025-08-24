import React, { useState } from 'react'
import { Button } from '../actions'

interface ErrorTestComponentProps {
  shouldThrow?: boolean
}

export function ErrorTestComponent({ shouldThrow = false }: ErrorTestComponentProps) {
  const [count, setCount] = useState(0)

  if (shouldThrow) {
    throw new Error('This is a test error to demonstrate ErrorBoundary functionality')
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
      <h3 className="text-lg font-medium mb-2">Error Test Component</h3>
      <p className="text-sm text-gray-600 mb-3">
        This component is used to test error boundaries. Click the button below to trigger an error.
      </p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>
        <Button 
          variant="danger" 
          onClick={() => {
            throw new Error('Runtime error triggered by button click')
          }}
        >
          Trigger Runtime Error
        </Button>
      </div>
    </div>
  )
}
