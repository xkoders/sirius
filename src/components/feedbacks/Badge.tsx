import { classNames } from '@/helpers'
import React from 'react'

interface IBadgeProps {
  children?: React.ReactNode
  className?: string
  status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending'
  type?: 'incomplete' | 'halfComplete' | 'complete' | 'publish' | 'live' | 'dashed'
}

const STATUS = {
  info: 'bg-blue-100 text-blue-600 border border-blue-300',
  warning: 'bg-yellow-100 text-yellow-600 border border-yellow-300',
  critical: 'bg-red-100 text-red-600 border border-red-300',
  success: 'bg-green-100 text-green-600 border border-green-300',
  pending: 'bg-gray-100 text-gray-600 border border-gray-300',
  default: 'bg-white text-gray-600 border border-gray-300',
}
const TYPE: Record<string, string> = {
  // ○ ● ◐
  incomplete: '○',
  halfComplete: '◒',
  complete: '◉',
  publish: '●',
  live: '•',
  dashed: '◌',
  //   ○ ◌   ◒ ◓
}
export function Badge({ children, status = 'default', type, className }: IBadgeProps) {
  return (
    <div
      className={classNames(
        className,
        STATUS[status],
        'inline-flex gap-1 items-center px-2 py-0.5 rounded-full text-xs font-medium',
      )}
    >
      {type && (
        <div className="-ml-1 relative">
          {type === 'live' ? (
            <span className="block rounded-full w-2 h-2 bg-green-600 ring-4 ring-green-100 ml-0.5 mr-1 "></span>
          ) : (
            TYPE[type]
          )}
        </div>
      )}
      {children}
    </div>
  )
}
