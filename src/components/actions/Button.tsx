import React, { useCallback } from 'react'
import { ROUNDED } from '@/constants'
import { classNames } from '@/helpers'
import { VariantType, IconType, RoundedType } from '@/types'
import { Spinner } from '../feedbacks'

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  size?: 'medium' | 'large' | 'small' | 'slim' | 'none'
  variant?: VariantType | 'none'
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
  medium: 'text-sm px-4 py-1.5 !h-8',
  small: 'text-[14px] px-2 py-1',
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
const SIZE_ICON_ONLY = {
  large: { ibg: 'h-6 w-6 p-px', bg: '!h-[45px] !w-[45px]' },
  medium: { ibg: 'h-5 w-5 p-px', bg: '!h-[32px] !w-[32px]' },
  small: { ibg: 'h-4 w-4', bg: '!h-8 !w-8' },
  slim: { ibg: 'h-3 w-3 ', bg: '!h-6 !w-6' },
  none: { ibg: 'h-full', bg: '' },
}
const VARIANT = {
  default:
    'bg-white border border-gray-400 disabled:bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100',
  primary: 'bg-indigo-600 border-indigo-900 text-white hover:bg-indigo-700',
  success: 'bg-green-600 border-green-800 text-white hover:bg-green-700',
  warning: 'bg-orange-400 border-orange-600 text-white hover:bg-orange-500',
  danger: 'bg-red-600 border-red-800 text-white hover:bg-red-700',
  info: 'bg-blue-600 border-blue-800 text-white hover:bg-blue-700',
  ghost: 'shadow-none text-slate-700 hover:bg-slate-100',
  subdued: 'text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300',
  dark: 'text-gray-100 hover:text-white bg-gray-950 hover:bg-gray-900',
  none: '',
}
const COLOR = {
  default: 'text-gray-900 hover:bg-gray-200',
  primary: 'text-indigo-600 hover:bg-indigo-100',
  success: 'text-green-600 hover:bg-green-100',
  warning: 'text-orange-600 hover:bg-orange-100',
  danger: 'text-red-600 hover:bg-red-100',
  info: 'text-blue-600 hover:bg-blue-100',
  dark: 'text-black hover:bg-gray-100',
  ghost: 'text-slate-700',
  subdued: 'hover:bg-gray-200 !border-gray-300',
  none: '',
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
  rounded = 'xl',
  alignment = 'center',
  fullwidth,
  variant = 'default',
  size = 'medium',
  // icon: IconComp,
  ...props
}: IButtonProps) => {
  const handleClick = useCallback(() => {
    onClick?.()
  }, [onClick])
  const Component = url ? 'a' : 'button'
  const IconComp = props.icon as React.ElementType
  return (
    <Component
      className={classNames(
        'h-fit flex items-center transition-all active:scale-95 active:opacity-70',
        fullwidth ? 'w-full' : '',
        disabled
          ? 'text-[#666] cursor-not-allowed pointer-events-none select-none bg-[#eaeaea] ring-1 ring-[#e0e0e0] opacity-70'
          : '',
        !children && props.icon ? SIZE_ICON_ONLY[size].bg : SIZE[size],
        ALIGNMENT[alignment],
        ROUNDED[rounded],
        outline || link ? COLOR[variant] : disabled ? '' : VARIANT[variant],
        outline && !link ? ' border border-current' : '',
        outline && variant === 'default' ? '!border-gray-400' : '',
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
        IconComp && (
          <div>
            {
              <IconComp
                className={classNames(
                  !children && props.icon ? SIZE_ICON_ONLY[size].ibg : SIZE_ICON[size],
                  'fill-current',
                )}
              />
            }
          </div>
        )
      )}

      {children}
    </Component>
  )
}
