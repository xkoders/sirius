import React from 'react'
import { classNames } from '@/helpers'
import { GAP } from '@/constants'
import { IconType } from '@/types'

export interface IExceptionListItem {
  icon?: IconType
  description: string
}
interface IExceptionListProps {
  className?: string
  items?: IExceptionListItem[]
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  message?: string
}

export function ExceptionList({ items, className = '', gap = 3 }: IExceptionListProps) {
  if (!items?.length) {
    return null
  }
  return (
    <ul className={classNames('flex flex-col w-full text-xs', className, GAP[gap])}>
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2 items-center">
          {item.icon && <item.icon className="w-4 h-4 fill-current" />}
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
