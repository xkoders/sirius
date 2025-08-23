import { classNames } from '@/helpers'
import React, { ElementType, ReactNode, memo } from 'react'
interface IBoxProps {
  as?: ElementType
  children?: ReactNode
  shadow?: 'base' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  className?: string
  lineClamp?: 1 | 2 | 3 | 4 | 5
  color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse'
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold'
  variant?:
    | 'default'
    | 'headingXl'
    | 'heading2xl'
    | 'heading3xl'
    | 'heading4xl'
    | 'heading5xl'
    | 'heading6xl'
    | 'heading7xl'
    | 'bodyXS'
    | 'bodySm'
    | 'bodyMd'
    | 'bodyLg'
  [x: string]: unknown
}
const SHADOW = {
  base: 'drop-shadow',
  sm: 'drop-shadow-sm',
  md: 'drop-shadow-md',
  lg: 'drop-shadow-lg',
  xl: 'drop-shadow-xl',
}
const VARIANTS = {
  default: 'text-base',
  headingXl: 'text-xl',
  heading2xl: 'text-2xl',
  heading3xl: 'text-3xl',
  heading4xl: 'text-4xl',
  heading5xl: 'text-5xl',
  heading6xl: 'text-6xl',
  heading7xl: 'text-7xl',
  bodyXS: 'text-xs',
  bodySm: 'text-sm',
  bodyMd: 'text-md',
  bodyLg: 'text-lg',
}
const LINECLAMP = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
}
const FONT_WEIGHT = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}
const COLORS = {
  info: 'text-blue-600',
  success: 'text-green-500',
  critical: 'text-red-500',
  warning: 'text-yellow-500',
  subdued: 'text-gray-500',
  'text-inverse': 'invert',
}

export const Text = memo(({
  as: Component = 'p',
  children,
  className,
  shadow,
  variant = 'default',
  fontWeight = 'regular',
  color,
  disabled,
  lineClamp,
}: IBoxProps) => {
  return (
    <Component
      className={classNames(
        className,
        VARIANTS[variant],
        shadow && SHADOW[shadow],
        lineClamp && LINECLAMP[lineClamp],
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        FONT_WEIGHT[fontWeight],
        color && COLORS[color],
      )}
      disabled={disabled}
    >
      {children}
    </Component>
  )
})
