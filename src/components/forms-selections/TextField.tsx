import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { HTMLInputTypeAttribute, ReactNode, useMemo, useState } from 'react'
import { InlineError } from './InlineError'
import { ExceptionList, IExceptionListItem } from '../feedbacks'

type InputType = React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
type InputAttributeType = {
  size?: 'sm' | 'md' | 'lg'
  value?: string
  onChange?: (value: string) => void
  onClick?: (value: any) => void
  onBlur?: (value: any) => void
  className?: string
  inputClassName?: string
  name?: string
  label?: string | ReactNode
  fieldID?: string
  labelAction?: {
    icon?: IconType
    onClick?: (value?: any) => void
    content?: string
  }
  prefix?: string | IconType
  suffix?: string | IconType
  multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  helpText?: IExceptionListItem | string
  error?: string
  type?: HTMLInputTypeAttribute
}

type ITextFieldProps = InputAttributeType & Omit<InputType, keyof InputAttributeType>

const SIZE = {
  sm: 'text-xs min-h-[1.7rem] py-0.5',
  md: 'text-sm min-h-[2rem] py-1',
  lg: 'text-md min-h-[2.5rem] py-2',
}

export function TextField({
  value,
  placeholder = '',
  onChange,
  onClick,
  onBlur,
  error,
  helpText,
  type = 'text',
  multiline,
  className,
  prefix,
  suffix,
  inputClassName,
  label,
  fieldID,
  labelAction,
  size = 'md',
  ...props
}: ITextFieldProps) {
  const [textFieldId] = useState(fieldID || (props.name || 'sirius-') + performance.now())
  const Component = multiline ? 'textarea' : 'input'
  const _prefix = useMemo(() => {
    if (typeof prefix === 'string') {
      return <span className=" text-sm flex justify-center items-center">{prefix}</span>
    } else if (prefix) {
      return prefix
    }
  }, [prefix])
  const _suffix = useMemo(() => {
    if (typeof suffix === 'string') {
      return <span className=" text-sm flex justify-center items-center">{suffix}</span>
    } else if (suffix) {
      return suffix
    }
  }, [suffix])
  return (
    <div className={classNames(className)}>
      <div className="flex justify-between">
        {label && (
          <label className="text-gray-900 font-normal text-sm" htmlFor={textFieldId}>
            {label}
          </label>
        )}
        {labelAction && (
          <button
            className="text-blue-500 hover:text-blue-600 hover:underline font-normal text-sm"
            onClick={labelAction.onClick}
          >
            {labelAction.icon && labelAction.icon}
            {labelAction.content}
          </button>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500">
            {_prefix}
          </div>
        )}
        {suffix && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500">
            {_suffix}
          </div>
        )}
        <Component
          {...(props as any)}
          type={type}
          className={classNames(
            inputClassName,
            'rounded-md w-full border text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 focus:outline-none',
            SIZE[size],
            prefix ? 'pl-7' : 'pl-2',
            suffix ? 'pr-7' : 'pr-2',
            error ? 'border-red-500 bg-red-400/10' : 'border-gray-400  bg-transparent',
          )}
          placeholder={placeholder}
          autoFocus
          value={value}
          rows={multiline}
          onClick={onClick}
          onBlur={onBlur}
          onChange={(event) => onChange?.(event.target.value)}
          id={textFieldId}
        />
      </div>

      {helpText && (
        <ExceptionList
          className="text-gray-600 mt-1"
          gap={2}
          items={[
            typeof helpText === 'string'
              ? {
                  description: helpText,
                }
              : helpText,
          ]}
        />
      )}
      <InlineError message={error} />
    </div>
  )
}
