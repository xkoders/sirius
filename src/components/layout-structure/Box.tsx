import React, { ElementType, HTMLAttributes, ReactNode } from 'react'
import type { ComponentProps } from 'react'

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

export default function Box({
  as = 'div',
  children,
  rounded = 'md',
  shadow = 'md',
  className = '',
  sectionned = false,
  ...rest
}: IBoxProps) {
  const Wrapper = as || 'div'
  const ROUNDED: { [x: string]: string } = {
    full: 'rounded-full',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    '4xl': 'rounded-4xl',
    '5xl': 'rounded-5xl',
  }
  const SHADOW: { [x: string]: string } = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    '3xl': 'shadow-3xl',
    '4xl': 'shadow-4xl',
    '5xl': 'shadow-5xl',
    colored: 'colored',
  }

  return (
    <Wrapper
      className={[
        ROUNDED[rounded],
        SHADOW[shadow],
        sectionned ? 'px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-5 bg-white' : '',
        className || '',
        'w-full relative',
      ].join(' ')}
      {...rest}
    >
      {shadow === 'colored' && (
        <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-orange-500 absolute z-[-1] inset-0 blur-xl opacity-80 mx-2 my-3 md:mx-3 md:my-4 lg:mx-4 lg:my-5"></span>
      )}
      <div>{children}</div>
    </Wrapper>
  )
}
