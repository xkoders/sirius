import React, { ReactNode } from 'react'
import { classNames } from '@/helpers'

interface IFrameProps {
  children: ReactNode
  sidebar?: ReactNode
  header?: ReactNode
  className?: string
}

export function Frame({ children, sidebar, header, className }: IFrameProps) {
  return (
    <div className={classNames('w-full min-h-screen bg-gray-100', className)}>
      {header}
      <div className="flex w-full">
        {sidebar}
        {children}
      </div>
    </div>
  )
}
