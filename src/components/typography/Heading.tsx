import React, { ElementType, ReactNode, memo } from 'react'
import { Text } from './Text'

interface IHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: ReactNode
  className?: string
  variant?: 'headingXl' | 'heading2xl' | 'heading3xl' | 'heading4xl' | 'heading5xl' | 'heading6xl' | 'heading7xl'
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold'
  color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse'
  disabled?: boolean
  lineClamp?: 1 | 2 | 3 | 4 | 5
}

export const Heading = memo(({
  as = 'h2',
  children,
  className,
  variant = 'heading2xl',
  fontWeight = 'semibold',
  color,
  disabled,
  lineClamp,
}: IHeadingProps) => {
  return (
    <Text
      as={as}
      className={className}
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      disabled={disabled}
      lineClamp={lineClamp}
    >
      {children}
    </Text>
  )
})
