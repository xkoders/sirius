import React from 'react'

import { classNames, stringify } from '@/helpers'

interface IChoiceListItem {
  id?: string
  label: string
  description?: string
  checked?: boolean
  disabled?: boolean
}
interface IChoiceListProps {
  className?: string
  name: string
  items: IChoiceListItem[]
  defaultChecked?: IChoiceListItem
  horizontal?: boolean
  onChange?: (val: IChoiceListItem) => void
}

export function ChoiceList({
  className = '',
  name,
  horizontal,
  items = [],
  defaultChecked,
  onChange,
}: IChoiceListProps) {
  return (
    <fieldset>
      <legend className="sr-only">{name}</legend>
      <div
        className={classNames(
          className,
          horizontal ? 'flex-row' : 'flex-col',
          'flex gap-y-5 gap-x-6',
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {items.map((item: IChoiceListItem | any, idx: number) => (
          <div key={idx} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={`${name}-${idx}`}
                aria-describedby={`${name}-${idx}-description`}
                name={name}
                type="radio"
                value={item}
                defaultChecked={stringify(defaultChecked) === stringify(item)}
                className="h-5 w-5 border-gray-100 text-indigo-600 focus:ring-indigo-600"
                onChange={() => onChange?.(item)}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={`${name}-${idx}`} className="font-medium text-gray-900">
                {item.label}
              </label>
              <p id={`${name}-${idx}-description`} className="text-gray-500 text-xs">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
