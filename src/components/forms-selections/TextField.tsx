import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { HTMLInputTypeAttribute, ReactNode, useState } from 'react'
import { InlineError } from './InlineError'

interface ITextFieldProps {
  value?: string
  onChange?: (value: string) => void
  onClick?: (value: any) => void
  onBlur?: (value: any) => void
  className?: string
  placeholder?: string
  prefix?: string | IconType
  suffix?: string | IconType
  multiline?: number
  error?: string
  type: HTMLInputTypeAttribute
}
export function TextField({
  value,
  placeholder = '',
  onChange,
  onClick,
  onBlur,
  error,
  type = 'text',
  className,
}: ITextFieldProps) {
  return (
    <div className={classNames(className, 'relative')}>
      <input
        type={type}
        className="h-8 rounded-md w-full border-0 bg-transparent pl-9 pr-4 text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
        placeholder={placeholder}
        name="q"
        autoFocus
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <InlineError message={error} />
    </div>
  )
}
