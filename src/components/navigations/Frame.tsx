import React, { ReactNode, useContext, useEffect } from 'react'
import { classNames } from '@/helpers'
import { Popover } from '../forms-selections'
import { AppContext } from '../provider/Provider'

interface IFrameProps {
  children: ReactNode
  sidebar?: ReactNode
  header?: ReactNode
  className?: string
}

export function Frame({ children, sidebar, header, className }: IFrameProps) {
  return (
    <div className={classNames('w-full', className)}>
      {header}
      <div className="flex w-full">
        {sidebar}
        {children}
      </div>
    </div>
  )
}
