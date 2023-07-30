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
  prefix?: string | IconType
  suffix?: string | IconType
  multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  helpText?: IExceptionListItem | string
  error?: string
  type?: HTMLInputTypeAttribute
}

type ITextFieldProps = InputAttributeType & Omit<InputType, keyof InputAttributeType>

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
  ...props
}: ITextFieldProps) {
  const [textFieldId] = useState(props.fieldID || (props.name || 'sirius-') + performance.now())
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
      {label && (
        <label className="text-gray-900 font-medium text-sm" htmlFor={textFieldId}>
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <div className="absolute left-0 top-0 h-8 w-8 p-1.5 text-gray-500">{_prefix}</div>
        )}
        {suffix && (
          <div className="absolute right-0 top-0 h-8 w-8 p-1.5 text-gray-500">{_suffix}</div>
        )}
        <Component
          {...(props as any)}
          type={type}
          className={classNames(
            inputClassName,
            'min-h-[2rem] py-1 rounded-md w-full border text-gray-950 placeholder-gray-600 focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 focus:outline-none sm:text-sm',
            prefix ? 'pl-8' : 'pl-4',
            suffix ? 'pr-8' : 'pr-4',
            error ? 'border-red-500 bg-red-50' : 'border-gray-400  bg-transparent',
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
