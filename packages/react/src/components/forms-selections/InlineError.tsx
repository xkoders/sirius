import { classNames } from '@/helpers'
import React from 'react'

export function InlineError({ message, className = '' }: { message?: string; className?: string }) {
  if (!message) {
    return null
  }
  return (
    <div className={classNames('text-red-600 flex gap-1 text-xs items-center mt-1', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>

      <p>{message}</p>
    </div>
  )
}
