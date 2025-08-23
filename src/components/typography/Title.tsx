import React, { ReactNode, memo } from 'react'
import { Text } from './Text'

interface ITitleProps {
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold'
  color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse'
  disabled?: boolean
  lineClamp?: 1 | 2 | 3 | 4 | 5
}

const TITLE_VARIANTS = {
  sm: 'headingXl',
  md: 'heading2xl',
  lg: 'heading3xl',
  xl: 'heading4xl',
} as const

export const Title = memo(({
  children,
  className,
  size = 'md',
  fontWeight = 'semibold',
  color,
  disabled,
  lineClamp,
}: ITitleProps) => {
  return (
    <Text
      as="h1"
      className={className}
      variant={TITLE_VARIANTS[size]}
      fontWeight={fontWeight}
      color={color}
      disabled={disabled}
      lineClamp={lineClamp}
    >
      {children}
    </Text>
  )
})
