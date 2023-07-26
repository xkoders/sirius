import { ROUNDED } from '@/constants'
import { classNames } from '@/helpers'
import { VariantType, IconType, RoundedType } from '@/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Spinner } from '../feedbacks'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  size?: 'medium' | 'large' | 'small' | 'slim' | 'none'
  variant?: VariantType
  submit?: boolean
  alignment?: 'center' | 'start' | 'end'
  rounded?: RoundedType
  fullwidth?: boolean
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: IconType
  link?: boolean
  url?: string
  target?: '_blank' | '_self' | '_parent' | undefined
  rel?: 'noreferrer' | undefined
  onClick?: () => void
}

const ALIGNMENT = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
}

const SIZE = {
  large: 'text-lg px-6 py-2',
  medium: 'text-sm px-4 py-1.5 !h-9',
  small: 'text-[14px] px-3 py-1',
  slim: 'text-xs px-2 py-px !h-6',
  none: '',
}

const SIZE_ICON = {
  large: 'h-6 w-6 -ml-3 mr-3',
  medium: 'h-5 w-5 -ml-2 mr-2',
  small: 'h-4 w-4 -ml-1.5 mr-1.5',
  slim: 'h-3 w-3 -ml-1 mr-1',
  none: 'h-full w-full',
}
const VARIANT = {
  default: 'bg-white border border-gray-400 text-gray-900 shadow-sm hover:bg-gray-100',
  primary: 'bg-indigo-600 border-indigo-900 text-white hover:bg-indigo-700',
  success: 'bg-green-600 border-green-800 text-white hover:bg-green-700',
  warning: 'bg-orange-400 border-orange-600 text-white hover:bg-orange-500',
  danger: 'bg-red-600 border-red-800 text-white hover:bg-red-700',
  info: 'bg-blue-600 border-blue-800 text-white hover:bg-blue-700',
  ghost: 'shadow-none text-slate-700 hover:bg-slate-100',
  subdued: 'text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300',
}
const COLOR = {
  default: 'text-gray-900 hover:bg-gray-200 ',
  primary: 'text-indigo-600 hover:bg-indigo-100',
  success: 'text-green-600 hover:bg-green-100',
  warning: 'text-orange-600 hover:bg-orange-100',
  danger: 'text-red-600 hover:bg-red-100',
  info: 'text-blue-600 hover:bg-blue-100',
  ghost: 'text-slate-700',
  subdued: 'hover:bg-gray-200 !border-gray-300',
}
export const Button = ({
  children,
  onClick,
  className,
  submit,
  disabled,
  loading,
  outline,
  link,
  target,
  url,
  rel,
  rounded = 'md',
  alignment = 'center',
  fullwidth,
  variant = 'default',
  size = 'medium',
  ...props
}: IButtonProps) => {
  const handleClick = useCallback(() => {
    onClick?.()
  }, [])
  const Component = url ? 'a' : 'button'
  return (
    <Component
      className={classNames(
        'h-fit flex items-center  transition-colors active:opacity-70',
        fullwidth ? 'w-full' : '',
        disabled ? '!opacity-50 cursor-not-allowed pointer-events-none select-none' : '',
        SIZE[size],
        ALIGNMENT[alignment],
        ROUNDED[rounded],
        outline || link ? COLOR[variant] : VARIANT[variant],
        outline && !link ? ' border border-current' : '',
        link ? '!bg-transparent  hover:underline' : '',
        className,
      )}
      {...(url ? { href: url || '#' } : {})}
      type={submit ? 'submit' : 'button'}
      target={target}
      rel={rel}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? (
        <Spinner className={classNames(SIZE_ICON[size], 'fill-current')} size="none" />
      ) : (
        props.icon && (
          <div>{<props.icon className={classNames(SIZE_ICON[size], 'fill-current')} />}</div>
        )
      )}

      {children}
    </Component>
  )
}
