import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { HTMLInputTypeAttribute, ReactNode, useMemo, useState, memo } from 'react'
import { InlineError } from './InlineError'
import { ExceptionList, IExceptionListItem } from '../feedbacks'

type InputType = React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
type InputAttributeType = {
  size?: 'sm' | 'md' | 'lg'
  value?: string
  onChange?: (value: string) => void
  onClick?: (value?: unknown) => void
  onBlur?: (value?: unknown) => void
  className?: string
  inputClassName?: string
  name?: string
  label?: string | ReactNode
  fieldID?: string
  labelAction?: {
    icon?: IconType
    onClick?: (value?: unknown) => void
    content?: string
  }
  prefix?: string | IconType
  suffix?: string | IconType
  multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  helpText?: IExceptionListItem | string
  error?: string
  type?: HTMLInputTypeAttribute
  // Accessibility props
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
  'aria-readonly'?: boolean
  'aria-placeholder'?: string
  required?: boolean
  readOnly?: boolean
  autoComplete?: string
}

type ITextFieldProps = InputAttributeType & Omit<InputType, keyof InputAttributeType>

const SIZE = {
  sm: 'text-xs min-h-[1.8rem] py-1',
  md: 'text-sm min-h-[2rem] py-1',
  lg: 'text-md min-h-[2rem] py-1.5',
}

export const TextField = memo(({
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
  'aria-describedby': ariaDescribedby,
  'aria-invalid': ariaInvalid,
  'aria-required': ariaRequired,
  'aria-readonly': ariaReadonly,
  'aria-placeholder': ariaPlaceholder,
  required,
  readOnly,
  autoComplete,
  ...props
}: ITextFieldProps) => {
  const [textFieldId] = useState(fieldID || (props.name || 'sirius-') + performance.now())
  const Component = multiline ? 'textarea' : 'input'
  
  // Generate help text ID for aria-describedby
  const helpTextId = helpText ? `${textFieldId}-help` : undefined
  const errorId = error ? `${textFieldId}-error` : undefined
  
  // Combine aria-describedby with help text and error IDs
  const describedBy = [
    ariaDescribedby,
    helpTextId,
    errorId
  ].filter(Boolean).join(' ')
  
  const _prefix = useMemo(() => {
    if (typeof prefix === 'string') {
      return <span className=" text-sm flex justify-center items-center" aria-hidden="true">{prefix}</span>
    } else if (prefix) {
      return prefix
    }
  }, [prefix])
  const _suffix = useMemo(() => {
    if (typeof suffix === 'string') {
      return <span className=" text-sm flex justify-center items-center" aria-hidden="true">{suffix}</span>
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
            {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        {labelAction && (
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600 hover:underline font-normal text-sm"
            onClick={labelAction.onClick}
            aria-label={labelAction.content}
          >
            {labelAction.icon && <span aria-hidden="true">{labelAction.icon}</span>}
            {labelAction.content}
          </button>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500" aria-hidden="true">
            {_prefix}
          </div>
        )}
        {suffix && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 p-[7px] text-gray-500" aria-hidden="true">
            {_suffix}
          </div>
        )}
        <Component
          {...props}
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
          value={value}
          rows={multiline}
          onClick={onClick}
          onBlur={onBlur}
          onChange={(event) => onChange?.(event.target.value)}
          id={textFieldId}
          // Accessibility attributes
          aria-describedby={describedBy || undefined}
          aria-invalid={ariaInvalid ?? !!error}
          aria-required={ariaRequired ?? required}
          aria-readonly={ariaReadonly ?? readOnly}
          aria-placeholder={ariaPlaceholder || placeholder}
          required={required}
          readOnly={readOnly}
          autoComplete={autoComplete}
        />
      </div>

      {helpText && (
        <div id={helpTextId} className="sr-only">
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
        </div>
      )}
      {error && (
        <div id={errorId} className="sr-only">
          <InlineError message={error} />
        </div>
      )}
      <InlineError message={error} />
    </div>
  )
})
