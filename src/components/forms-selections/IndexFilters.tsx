import { classNames } from '@/helpers'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Tabs } from './Tabs'
import { Button } from '../actions'
import { Popover } from './Popover'
import { Box } from '../layout-structure'
import { SearchField } from './SearchField'
import { Transition } from '../feedbacks'
import { Text } from '../typography'

interface IIndexFiltersProps {
  className?: string
  sortOptions?: React.ReactNode
  onChange?: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void
}
export const IndexFilters = ({ onChange, className, sortOptions }: IIndexFiltersProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showSearch, setShowSearch] = useState(true)
  const [search, setSearch] = useState('')
  const handleChange = useCallback(
    (idx: number, item: any) => {
      setSelectedTab(idx)
    },
    [onChange],
  )
  useEffect(() => {}, [])
  const tabs = [
    { label: 'My Account' },
    { label: 'Company' },
    { label: 'Team Members' },
    { label: 'Billing' },
  ]
  const Search = () => {
    // return (div.re)
  }
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
              className="flex-1"
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
    </section>
  )
}
