import { classNames } from '@/helpers'
import React, { useMemo } from 'react'

export type TabsProps = {
  label?: string | React.ReactNode
  index?: number
  onAction?: () => void
  actions?: React.ReactNode
}
export type ITabsProps = {
  children?: React.ReactNode
  className?: string
  onChange?: (index: number, val: TabsProps) => void
  tabs: TabsProps[]
  selected?: string | number | readonly string[] | undefined
  filled?: boolean
  canCreateTab?: boolean
}

export function Tabs({ tabs, className, canCreateTab, filled, selected, onChange }: ITabsProps) {
  const selectedIndex = useMemo(() => selected || 0, [selected])
  return (
    <div className={classNames(className, 'flex-1')}>
      <div className="sm:!hidden text-sm flex w-full">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 border px-2 shadow-sm"
          defaultValue={selected}
        >
          {tabs.map((tab, idx) => (
            <option key={idx} value={idx}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex gap-3 " aria-label="Tabs">
          {tabs.map((tab, idx) => (
            <div
              key={idx}
              className={classNames(
                selectedIndex === idx
                  ? 'bg-orange-100 text-orange-500'
                  : 'text-gray-800 hover:bg-gray-100 transition-all',
                'rounded-md px-3 h-8 text-xs font-medium cursor-pointer flex items-center',
                filled ? 'flex-1 text-center justify-center' : '',
              )}
              onClick={() => onChange?.(idx, tab)}
            >
              {tab.label}
            </div>
          ))}
          {canCreateTab && (
            <button
              className={classNames(
                'text-gray-800 hover:bg-gray-100 transition-all rounded-md px-2 h-8',
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
            </button>
          )}
        </nav>
      </div>
    </div>
  )
}
