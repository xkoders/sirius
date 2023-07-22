import { ROUNDED, SHADOW } from '@/constants'
import { RoundedType, ShadowType } from '@/types'
import React, { ElementType, ReactNode } from 'react'

interface IBoxProps {
  as?: ElementType
  children?: ReactNode
  rounded?: RoundedType
  shadow?: ShadowType | 'colored'
  sectionned?: boolean
  disabled?: boolean
  className?: string
  [x: string]: any
}
const _shadow = Object.assign(SHADOW, { colored: 'colored' })

export function Box({
  as = 'div',
  children,
  rounded = 'md',
  shadow = 'none',
  className = '',
  sectionned = false,
  ...rest
}: IBoxProps) {
  const Wrapper = as || 'div'
  return (
    <Wrapper
      className={[
        ROUNDED[rounded],
        _shadow[shadow === 'none' && sectionned ? 'md' : shadow],
        sectionned ? 'px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 bg-white' : '',
        className || '',
        'w-full relative',
      ].join(' ')}
      {...rest}
    >
      {shadow === 'colored' && (
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 absolute z-[-1] inset-0 blur-[6px] opacity-90 m-1 mt-2"></span>
      )}
      {children}
    </Wrapper>
  )
}
