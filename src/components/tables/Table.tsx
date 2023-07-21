import React, { ReactNode, useContext, useMemo, useRef } from 'react'
import { classNames, stringify } from '@/helpers'
import { Popover } from '@headlessui/react'
import { AppContext } from '../provider/Provider'
import { Checkbox } from '../forms'

interface IBase {
  children: ReactNode
  className?: string
}
interface IHeadings {
  title: string
  alignment?: 'start' | 'center' | 'end'
}
interface IBulkActions {
  label: string
  onAction?: () => void
}

interface ITableProps extends IBase {
  children: React.ReactNode
  className?: string
  headings: IHeadings[]
  items?: any[]
  bulkActions?: IBulkActions[]
  promotedBulkActions?: IBulkActions[]
}

function MainTable({
  children = <></>,
  items = [],
  className,
  headings,
  bulkActions,
  promotedBulkActions,
}: ITableProps) {
  const { dispatch, tableResources } = useContext(AppContext)
  const cRef = useRef<HTMLInputElement>(null)
  const checkboxType = useMemo(() => {
    const selectedCount = tableResources.selectedItems.length
    const itemsCount = items.length
    if (selectedCount && selectedCount < itemsCount) {
      return 'intermediate'
    } else if (selectedCount === itemsCount) {
      return 'all'
    }
    return 'none'
  }, [tableResources.selectedItems])
  return (
    <div className="relative">
      <div className="overflow-x-auto h-fit rounded-md">
        <table className={classNames('min-w-full divide-y divide-gray-300', className)}>
          <thead className="bg-gray-200">
            <tr>
              {tableResources.select && (
                <th className=" text-sm  text-gray-900 align-middle">
                  <Checkbox
                    checked={checkboxType === 'all'}
                    indeterminate={checkboxType === 'intermediate'}
                    onChange={(value) => {
                      dispatch({
                        type: 'SELECT_ALL',
                        payload: value ? items : [],
                      })
                    }}
                  />
                </th>
              )}
              {headings.map((heading, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-xs font-normal text-gray-900 sm:pl-6"
                >
                  {heading.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">{children}</tbody>
        </table>
      </div>

      {!!tableResources.selectedItems?.length && (
        <div className="absolute top-full translate-y-1 left-1/2 -translate-x-1/2 z-50 bg-white p-4 shadow-lg rounded-md border flex gap-4 h-fit">
          {promotedBulkActions && (
            <div className="flex">
              {promotedBulkActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onAction}
                  className="bg-white shadow-sm border border-gray-400 hover:text-indigo-700 flex justify-center items-center h-9 px-3 rounded-md"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
          {bulkActions && (
            <Popover className="relative h-9">
              <Popover.Button className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-9 h-9 p-1.5 bg-white shadow-sm border border-gray-400 rounded-md"
                >
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </Popover.Button>

              <Popover.Panel className="absolute z-10 bg-white shadow bottom-11 w-40 rounded-md flex flex-col p-3 right-0 text-gray-600 text-[15px]">
                {bulkActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.onAction}
                    className="hover:text-indigo-700 flex items-center h-9 px-3 rounded-md"
                  >
                    {action.label}
                  </button>
                ))}
              </Popover.Panel>
            </Popover>
          )}
        </div>
      )}
    </div>
  )
}
function Row({ children, className, item }: { item: any } & IBase) {
  const { dispatch, tableResources } = useContext(AppContext)
  const isSelected = useMemo(
    () => tableResources.selectedItems.some((i) => stringify(i) === stringify(item)),
    [tableResources.selectedItems],
  )
  const handleChangeSelect = (checked: boolean) => {
    const type = checked ? 'ADD_SELECTED_ITEM' : 'REMOVE_SELECTED_ITEM'
    dispatch({ type, payload: item })
  }
  return (
    <tr className={classNames('relative', className, isSelected ? 'bg-slate-100' : '')}>
      {tableResources.select && (
        <td className="whitespace-nowrap py-1 text-sm font-medium text-gray-900 text-center px-2">
          {isSelected && (
            <span className="absolute inset-y-1 left-px flex items-center w-1  bg-orange-500 rounded-full"></span>
          )}
          <Checkbox checked={isSelected} name="table-row-checkbox" onChange={handleChangeSelect} />
        </td>
      )}
      {children}
    </tr>
  )
}
function Cell({ children, className }: IBase) {
  return (
    <td className={classNames(className, 'whitespace-nowrap  pl-4 pr-3 text-sm sm:pl-6 h-9')}>
      {children}
    </td>
  )
}
export const Table = Object.assign(MainTable, {
  Row,
  Cell,
})
