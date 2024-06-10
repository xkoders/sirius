import { classNames } from '@/helpers'
import React, { ElementType } from 'react'
import { Text } from '../typography'
import { IconType } from '@/types'
interface IBannerProps {
  children?: React.ReactNode
  as?: ElementType
  icon?: IconType
  className?: string
  status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending'
  title?: string
  onDismiss?: () => void
}

const STATUS = {
  info: {
    icon: (
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    ),
    className: 'bg-blue-100 text-blue-600 border border-blue-300',
  },
  warning: {
    icon: (
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    ),
    className: 'bg-orange-50 text-orange-600 border border-orange-300',
  },
  critical: {
    icon: (
      <path
        fillRule="evenodd"
        d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    ),
    className: 'bg-red-100 text-red-600 border border-red-300',
  },

  success: {
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    ),
    className: 'bg-green-100 text-green-600 border border-green-300',
  },
  pending: {
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
        clipRule="evenodd"
      />
    ),
    className: 'bg-gray-100 text-gray-600 border border-gray-300',
  },
  default: {
    icon: null,
    className: 'text-gray-600 border border-gray-300',
  },
}
export function Banner({
  children,
  as: Component = 'div',
  className,
  onDismiss,
  title,
  status = 'default',
}: IBannerProps) {
  return (
    <Component
      className={classNames(
        className || '',
        STATUS[status].className,
        'w-full flex gap-3 p-3 rounded-md  relative',
      )}
    >
      {STATUS[status].icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          {STATUS[status].icon}
        </svg>
      )}

      <div>
        {title && (
          <Text as="h5" variant="bodySm" fontWeight="semibold" className="-mt-0.5 mb-0.5">
            {title}
          </Text>
        )}
        <div className="text-xs opacity-75">{children}</div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={onDismiss}
        className="w-6 h-6 p-1 absolute right-1 top-1 hover:bg-black/10 rounded-full cursor-pointer transition-all active:scale-95"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </Component>
  )
}
