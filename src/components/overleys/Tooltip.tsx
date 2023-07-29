import { classNames } from '@/helpers'
import React, { ReactNode } from 'react'

interface ITooltipProps {
  children: React.ReactNode
  className?: string
  content?: string | ReactNode
  align?: 'left' | 'right' | 'center'
  down?: boolean
  dark?: boolean
}

export function Tooltip({
  children,
  className,
  content,
  align = 'center',
  dark,
  down,
}: ITooltipProps) {
  return (
    <div className="relative group/t h-fit">
      <div
        className={classNames(
          className,
          'absolute  px-3 py-1 rounded-md shadow-md text-sm whitespace-nowrap border z-50',
          align === 'left' ? 'left-0' : align === 'right' ? 'right-0' : 'right-1/2 translate-x-1/2',
          dark ? 'bg-gray-950 text-white border-gray-900' : 'bg-white',
          down ? 'top-full' : 'bottom-full mb-1',
          'invisible opacity-0 translate-y-5 group-hover/t:translate-y-0 group-hover/t:visible group-hover/t:opacity-100 transition-all',
        )}
      >
        {content}
      </div>
      {children}
    </div>
  )
}
