import { classNames } from '@/helpers'
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface ICheckbox {
  className?: string
  label?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  name?: string
  value?: string
  onChange?: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox = ({
  indeterminate = false,
  label,
  disabled = false,
  name,
  value,
  onChange,
  checked,
  className,
}: ICheckbox) => {
  const cRef = useRef<HTMLInputElement>(null)
  const [checkboxId] = useState((name || 'sirius') + performance.now())
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked, e)
      }
    },
    [onChange],
  )
  useEffect(() => {
    if (cRef.current) {
      cRef.current.indeterminate = indeterminate
    }
  }, [cRef, indeterminate])

  return (
    <div className={classNames('flex items-center justify-center', className)}>
      <input
        type="checkbox"
        className="inp-cbx hidden"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        ref={cRef}
        id={checkboxId}
      />
      <label
        htmlFor={checkboxId}
        className={classNames(
          'cbx cursor-pointer select-none flex items-center text-sm gap-2',
          'checkbox',
          disabled ? 'disabled' : '',
          indeterminate ? `checkbox-indeterminate` : '',
        )}
      >
        <span className="relative w-5 h-5 rounded align-middle scale-100  border hover:border-orange-500 transition-all border-gray-400">
          <svg
            className={classNames(
              indeterminate ? 'indeterminate  stroke-orange-500' : '',
              'transition-all duration-300 delay-100 absolute inset-0 fill-none ',
            )}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            strokeDasharray={26}
            strokeDashoffset={26}
          >
            {indeterminate ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            )}
          </svg>
        </span>
        {label && <span className="flex-1">{label}</span>}
      </label>
    </div>
  )
}
