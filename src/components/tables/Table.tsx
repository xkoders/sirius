import React, { useContext } from 'react'
import { Box } from '../layout-structure'
import { classNames } from '@/helpers'
import { Popover } from '@headlessui/react'
import { AppContext } from '../provider/Provider'
import { Checkbox } from '../forms'
interface IBase {
  children: React.ReactNode
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
  bulkActions?: IBulkActions[]
  promotedBulkActions?: IBulkActions[]
}

function MainTable({
  children,
  className,
  headings,
  bulkActions,
  promotedBulkActions,
}: ITableProps) {
  const { dispatch, tableResources } = useContext(AppContext)
  return (
    <div className="relative">
      <div className="overflow-x-auto h-fit rounded-md">
        <table className={classNames('min-w-full divide-y divide-gray-300', className)}>
          <thead className="bg-gray-200">
            <tr>
              {tableResources.select && (
                <th className=" text-sm font-semibold text-gray-900 align-middle">
                  <input
                    aria-describedby="td-description"
                    name="table-row-checkbox"
                    type="checkbox"
                    className="h-[18px] w-[18px] my-1 rounded-full checked:bg-slate-400 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </th>
              )}
              {headings.map((heading, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {heading.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">{children}</tbody>
        </table>
      </div>

      {!!tableResources.selectedItems?.length && (
        <div className="absolute top-full translate-y-1 left-1/2 -translate-x-1/2 z-50 bg-white p-4 shadow-lg rounded-lg border flex gap-4 h-fit">
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

              <Popover.Panel className="absolute z-10 bg-white shadow bottom-11 w-40 rounded-lg flex flex-col p-3 right-0 text-gray-600 text-[15px]">
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

  const handleChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    const type = e.target.checked ? 'addSelectedItem' : 'removeSelectedItem'
    dispatch({ type, payload: item })
  }
  return (
    <tr className={classNames(className, '')}>
      {tableResources.select && (
        <td className="whitespace-nowrap py-1 text-sm font-medium text-gray-900 text-center px-2">
          <input
            aria-describedby="td-description"
            name="table-row-checkbox"
            type="checkbox"
            onChange={handleChangeSelect}
            className="h-[18px] w-[18px]  rounded-full checked:bg-slate-400 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </td>
      )}
      {children}
    </tr>
  )
}
function Cell({ children, className }: IBase) {
  return (
    <td
      className={classNames(
        className,
        'whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 h-10',
      )}
    >
      {children}
    </td>
  )
}
export const Table = Object.assign(MainTable, {
  Row,
  Cell,
})
