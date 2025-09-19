import React, { ReactNode, useEffect, useState, useRef, memo } from 'react'
import { IAction } from '@/types'
import { classNames } from '@/helpers'
import { Button } from '../actions'
import { Transition } from './Transition'

export interface IToastProps {
  content: string | ReactNode
  className?: string
  classOverride?: string
  id?: string | number
  key?: string | number
  type?: 'success' | 'error' | 'info' | 'warning' | 'default'
  duration?: number
  onDismiss?: () => void
  action?: IAction
}

const TYPE = {
  success: 'bg-green-100 text-green-700 border-green-300 shadow-green-500',
  error: 'bg-red-100 text-red-700 border-red-300 shadow-red-500',
  info: 'bg-blue-100 text-blue-700 border-blue-300 shadow-blue-500',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-300 shadow-yellow-500',
  default: 'bg-gray-900 text-white',
}

export const Toast = memo(({
  content,
  className,
  classOverride,
  type = 'default',
  duration = 4500,
  onDismiss = () => {},
  action,
}: IToastProps) => {
  const [dismissed, setDismissed] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setDismissed(true)
    }, duration)

    // Cleanup function to clear timeout when component unmounts or dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [duration]) // Only re-run when duration changes

  if (dismissed) {
    return null
  }
  
  return (
    <Transition
      duration={300}
      type="slide-up"
      className={classNames(
        className,
        dismissed ? 'bottom-0' : 'bottom-10',
        classOverride ||
          'shadow-xl rounded-xl px-2 min-h-12 absolute transition-all z-30 left-1/2 -translate-x-1/2 w-fit flex gap-2 items-center md:min-w-[20rem]',
        TYPE[type],
      )}
    >
      <div className="flex-1 h-full min-h-12 flex items-center " onClick={onDismiss}>
        {content}
      </div>
      {action && (
        <Button
          link
          size="small"
          icon={action.icon}
          url={action.url}
          rel={action.rel}
          target={action.target}
          variant={action.variant || 'none'}
          disabled={action.disabled}
          loading={action.loading}
          onClick={action.onAction}
        >
          {action.label}
        </Button>
      )}
      <button onClick={onDismiss} className="hover:opacity-75 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </Transition>
  )
})
