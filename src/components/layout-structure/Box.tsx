import { ROUNDED, SHADOW } from '@/constants'
import React, { ElementType, ReactNode } from 'react'

interface IBoxProps {
  as?: ElementType
  children?: ReactNode
  rounded?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'colored'
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
  shadow = 'md',
  className = '',
  sectionned = false,
  ...rest
}: IBoxProps) {
  const Wrapper = as || 'div'
  return (
    <Wrapper
      className={[
        ROUNDED[rounded],
        _shadow[shadow],
        sectionned ? 'px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 bg-white' : '',
        className || '',
        'w-full relative',
      ].join(' ')}
      {...rest}
    >
      {shadow === 'colored' && (
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 absolute z-[-1] inset-0 blur-xl opacity-80 mx-2 my-3 md:mx-3 md:my-4 lg:mx-4 lg:my-5"></span>
      )}
      {children}
    </Wrapper>
  )
}
