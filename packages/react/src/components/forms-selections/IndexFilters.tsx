import { classNames } from '@/helpers'
import React, { useCallback, useState } from 'react'
import { Tabs } from './Tabs'
import { Button } from '../actions'
import { Popover } from './Popover'
import { SearchField } from './SearchField'
import { Transition } from '../feedbacks'
import { Text } from '../typography'
interface IFilters {
  key: string
  label: string
  filter: React.ReactNode
  shortcut?: boolean
}
interface IIndexFiltersProps {
  className?: string
  sortOptions?: React.ReactNode
  filters?: IFilters[]
  onChange?: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void
}
export const IndexFilters = ({ className, sortOptions, filters }: IIndexFiltersProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [activeFilters, setActiveFilters] = useState<IFilters[]>([])
  const [initialFilters, setInitialFilters] = useState<IFilters[]>(filters || [])
  const [search, setSearch] = useState('')
  const handleChange = useCallback((idx: number) => {
    setSelectedTab(idx)
  }, [])
  const handleAddFilter = useCallback((item: IFilters) => {
    setActiveFilters((v: IFilters[]) => [...v, item])
    setInitialFilters((value: IFilters[]) => value.filter(({ key }) => key !== item.key))
  }, [])

  const handleClearAll = useCallback(() => {
    setActiveFilters([])
    filters && setInitialFilters(filters)
  }, [filters])

  const tabs = [
    { label: 'My Account' },
    { label: 'Company' },
    { label: 'Team Members' },
    { label: 'Billing' },
  ]

  return (
    <section className={classNames('flex flex-col', className)}>
      <article className="p-1.5 flex gap-2">
        <Transition className="flex-1">
          {showSearch ? (
            <SearchField
              className="flex-1"
              placeholder="Searching for..."
              onChange={setSearch}
              value={search}
            />
          ) : (
            <Tabs
              tabs={tabs}
              onChange={handleChange}
              selected={selectedTab}
              canCreateTab
            />
          )}
        </Transition>

        <button
          onClick={() => setShowSearch(!showSearch)}
          className={classNames(
            showSearch
              ? 'px-2 '
              : 'w-12 border border-gray-400/90 shadow-sm rounded-md hover:bg-gray-100 ',
            'h-8 flex justify-center items-center trans ',
          )}
        >
          <Transition className="flex" as="p">
            {showSearch ? (
              <Text color="info" variant="bodySm" as="span">
                cancel
              </Text>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </Transition>
        </button>
        {!!sortOptions && (
          <Popover
            activator={
              <button className="h-8 w-8 border border-gray-400/90 shadow-sm rounded-md flex justify-center items-center hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            }
          >
            {sortOptions}
          </Popover>
        )}
      </article>
      <Transition type="collapsible" duration={500} timing="ease-out">
        {showSearch && !!filters?.length && (
          <>
            <div className="px-2 py-3 h-full flex flex-wrap items-center gap-2 text-gray-950 border-t">
              {/* {!!filters?.length && filters.map((item, idx) => <div key={idx}>{item.label}</div>)} */}
              {activeFilters &&
                activeFilters.map((item, idx) => (
                  <Popover
                    key={idx}
                    activator={
                      <button className="text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1">
                        {item.label}
                      </button>
                    }
                  >
                    {item.filter}
                  </Popover>
                ))}

              <Popover
                disabled={!initialFilters.length}
                activator={
                  <button className="text-xs rounded-full border border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 px-3 h-6 flex items-center gap-1">
                    <span> Add filter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 -mr-1.5"
                    >
                      <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                    </svg>
                  </button>
                }
              >
                <ul className="p-2 text-sm flex flex-col gap-px">
                  {initialFilters?.map((item: IFilters, idx) => (
                    <li
                      className="py-2 px-2 rounded-md hover:bg-gray-100"
                      key={idx}
                      onClick={() => handleAddFilter(item)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </Popover>
              {!!activeFilters.length && (
                <Button variant="info" link size="slim" onClick={handleClearAll}>
                  Clear All
                </Button>
              )}
            </div>
          </>
        )}
      </Transition>
    </section>
  )
}
