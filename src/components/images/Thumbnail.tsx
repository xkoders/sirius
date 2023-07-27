import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { ReactNode } from 'react'

interface IThumbnailProps {
  className?: string
  src?: string | IconType
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
  fit?: 'cover' | 'contain'
}
const SIZE = {
  xs: 'rounded-[3px] h-6 w-6',
  sm: 'rounded h-8 w-8',
  md: 'rounded h-10 w-10',
  lg: 'rounded-md h-14 w-14',
  xl: 'rounded-md h-20 w-20',
  none: '',
}

const PADDING_ICON = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2.5',
  lg: 'p-4',
  xl: 'p-6',
  none: '',
}

export function Thumbnail({
  className,
  alt,
  size = 'md',
  fit = 'contain',
  ...props
}: IThumbnailProps) {
  return (
    <>
      {typeof props.src === 'string' ? (
        <img
          src={props.src}
          alt={alt}
          className={classNames(
            SIZE[size],
            className,
            fit === 'contain' ? 'object-contain' : 'object-cover',
            'border border-gray-300 shadow-sm',
          )}
        />
      ) : (
        <props.src
          className={classNames(
            SIZE[size],
            PADDING_ICON[size],
            className || 'text-gray-500',
            'border border-gray-300 shadow-sm',
          )}
        />
      )}
    </>
  )
}
