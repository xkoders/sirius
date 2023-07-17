import { GAP, ROUNDED, SIZE } from '@/constants'
import React from 'react'
interface ISkeletonBodyTextProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  rounded?: 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  width?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
}

export function SkeletonDisplayText({
  size = 'md',
  rounded = 'md',
  width = 20,
  className = 'md',
}: ISkeletonBodyTextProps) {
  return (
    <div
      style={{ width: `${width}%` }}
      className={['inline-block bg-gray-300 animate-pulse', SIZE[size], ROUNDED[rounded], className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
