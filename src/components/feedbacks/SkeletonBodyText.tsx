import React from 'react'
import { GAP } from '@/constants'
interface ISkeletonBodyTextProps {
  className?: string
  lines?: number
  gap?: number
}

export function SkeletonBodyText({ lines = 3, className = '', gap = 3 }: ISkeletonBodyTextProps) {
  return (
    <div className={['grid animate-pulse', className, GAP[gap]].filter(Boolean).join(' ')}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-2 rounded-lg bg-gray-300 flex-1 last:w-2/3" />
      ))}
    </div>
  )
}
