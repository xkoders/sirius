import React, { ReactNode, memo } from 'react'
import { Text } from './Text'

interface ISubtitleProps {
  children?: ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold'
  color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse'
  disabled?: boolean
  lineClamp?: 1 | 2 | 3 | 4 | 5
}

const SUBTITLE_VARIANTS = {
  xs: 'bodyXS',
  sm: 'bodySm',
  md: 'bodyMd',
  lg: 'bodyLg',
} as const

export const Subtitle = memo(({
  children,
  className,
  size = 'md',
  fontWeight = 'regular',
  color = 'subdued',
  disabled,
  lineClamp,
}: ISubtitleProps) => {
  return (
    <Text
      as="p"
      className={className}
      variant={SUBTITLE_VARIANTS[size]}
      fontWeight={fontWeight}
      color={color}
      disabled={disabled}
      lineClamp={lineClamp}
    >
      {children}
    </Text>
  )
})
