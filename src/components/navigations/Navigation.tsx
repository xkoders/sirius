import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { ReactNode, useCallback, useContext } from 'react'
import { AppContext } from '../provider/Provider'

interface INavigationProps {
  children: React.ReactNode
  minimized?: boolean
  className?: string
}

interface IItemProps {
  url: string
  label: string
  icon?: IconType
  badge?: string | ReactNode
  className?: string
  disabled?: boolean
  selected?: boolean
}

interface IItemsProps extends IItemProps {
  subNavigationItems?: IItemProps[]
}
interface ISectionProps {
  items: IItemsProps[]
  title?: string
}

function MainNavigation({ children, minimized, className }: INavigationProps) {
  const { isFramePresent } = useContext(AppContext)
  return (
    <aside
      className={classNames(
        'transition-all duration-500 overflow-y-auto sticky z-10 hidden border-r divide-y flex-col',
        className,
        minimized ? 'w-[61px] md:w-60 sm:flex' : ' md:flex w-60',
        isFramePresent ? ' h-[calc(100vh-56px)] top-14' : 'h-screen top-0',
      )}
    >
      {children}
    </aside>
  )
}
function SectionFooter({ children }: { children: ReactNode }) {
  return <div className="flex gap-3 p-2">{children}</div>
}

function Section({ items, title }: ISectionProps) {
  const ActiveDot = () => (
    <span className="absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500"></span>
  )
  const isSelectedPassed = useCallback((subItems: IItemProps[], index: number) => {
    const findIndex = subItems.findIndex((item: IItemProps) => item.selected)
    if (findIndex !== -1) {
      return index < findIndex // 0 3
    }
    return false
  }, [])
  // const handleCollapsible = useCallback(
  //   (subItems: IItemProps[], index: number) => {
  //     const findIndex = subItems.findIndex((item: IItemProps) => item.selected)
  //     if (findIndex !== -1) {
  //       return index < findIndex // 0 3
  //     }
  //     return false
  //   },
  //   [items],
  // )
  return (
    <ul className="py-3 w-full text-[15px] text-gray-950 last:flex-1 last-of-type:flex-1">
      <li className="text-xs font-medium px-5 py-1 text-gray-500">{title}</li>
      {items.map((item, index) => (
        <li key={index} className="px-3 flex flex-col gap-1 ">
          <a
            href={item.url || '#'}
            className={[
              'py-1 flex items-center flex-1 gap-3 relative hover:bg-gray-200/50 hover:text-orange-500 px-1 rounded-md',
              item.disabled && 'pointer-events-none opacity-50',
              item.className,
            ].join(' ')}
          >
            {item.selected && !item.subNavigationItems?.length && <ActiveDot />}
            {item.badge && (
              <span className="absolute top-1/2 right-2 w-fit h-fit -translate-y-1/2">
                {item.badge}
              </span>
            )}
            {item.icon && (
              <span>
                {
                  <item.icon
                    className={['w-[18px] h-7 md:h-5', item.selected && 'text-orange-500']
                      .filter(Boolean)
                      .join(' ')}
                  />
                }
              </span>
            )}
            <span>{item.label}</span>
          </a>
          {/* <Transition type="collapsible" duration={500} timing="ease-out"> */}
          {item.subNavigationItems && (
            <ul className="text-slate-500 relative flex flex-col gap-px">
              {item.subNavigationItems.map((subItem, index) => (
                <SectionSubItem
                  key={index}
                  subItem={subItem}
                  isSelectedPassed={
                    isSelectedPassed(item?.subNavigationItems || [], index) || false
                  }
                />
                // <li key={index} className=" flex flex-col group/si">
                //   <a
                //     href={item.url}
                //     className={[
                //       'py-1 flex flex-1 gap-2 relative hover:bg-gray-200/50 hover:text-orange-500 pl-8 pr-2 rounded-md',
                //       subItem.className,
                //       subItem.selected && !subItem.disabled && 'bg-gray-200/50 text-orange-500',
                //       subItem.disabled && 'pointer-events-none opacity-50',
                //     ].join(' ')}
                //   >
                //     {/* {subItem.selected && <ActiveDot />} */}
                //     {subItem.selected && (
                //       <>
                //         <span className="-top-2 bottom-[18px] absolute left-[13.5px] w-[1.5px] z-10 bg-orange-500"></span>
                //       </>
                //     )}

                //     <svg
                //       className={classNames(
                //         subItem.selected ? '' : 'invisible group-hover/si:visible text-gray-500',
                //         'w-[18px] absolute left-2.5 top-1.5 isolate',
                //       )}
                //       viewBox="0 0 24 24"
                //       fill="none"
                //       xmlns="http://www.w3.org/2000/svg"
                //     >
                //       <path
                //         d="M19 14.0625L11 14.0625C7.68629 14.0625 6 12.3762 6 9.0625L6 7M19 14.0625L15.0625 18M19 14.0625L15.0625 10.125"
                //         stroke="currentColor"
                //         strokeWidth="2"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //       />
                //     </svg>
                //     {subItem.badge && (
                //       <span className="absolute top-1/2 right-2 w-fit h-fit px-1.5 -translate-y-1/2 rounded-full bg-orange-500 text-xs text-white">
                //         {subItem.badge}
                //       </span>
                //     )}
                //     {subItem.icon && <span>{subItem.icon}</span>}
                //     <span>{subItem.label}</span>
                //   </a>
                // </li>
              ))}
            </ul>
          )}
          {/* </Transition> */}
        </li>
      ))}
    </ul>
  )
}

function SectionSubItem({
  subItem,
  isSelectedPassed,
}: {
  subItem: IItemsProps
  isSelectedPassed: boolean
}) {
  return (
    <li className=" flex flex-col group/si">
      <a
        href={subItem.url}
        className={[
          'py-1 flex flex-1 gap-2 relative hover:bg-gray-200/50 hover:text-orange-500 pl-8 pr-2 rounded-md',
          subItem.className,
          subItem.selected && !subItem.disabled && 'bg-white shadow-sm text-orange-500',
          subItem.disabled && 'pointer-events-none opacity-50',
        ].join(' ')}
      >
        {/* {subItem.selected && <ActiveDot />} */}
        {(subItem.selected || isSelectedPassed) && (
          <>
            <span
              className={classNames(
                '-top-2  absolute left-3 w-[1.8px] z-10 bg-orange-500 rounded-full',
                !isSelectedPassed ? 'bottom-[18px]' : 'bottom-px',
              )}
            ></span>
          </>
        )}

        {!subItem.disabled && (
          <svg
            className={classNames(
              subItem.selected ? '' : 'invisible group-hover/si:visible text-gray-400',
              'w-[18px] absolute left-[8.25px] top-1.5 isolate ',
            )}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 14.0625L11 14.0625C7.68629 14.0625 6 12.3762 6 9.0625L6 7M19 14.0625L15.0625 18M19 14.0625L15.0625 10.125"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {subItem.badge && (
          <span className="absolute top-1/2 right-2 w-fit h-fit px-1.5 -translate-y-1/2 rounded-full bg-orange-500 text-xs text-white">
            {subItem.badge}
          </span>
        )}
        {subItem.icon && <span>{subItem.icon}</span>}
        <span>{subItem.label}</span>
      </a>
    </li>
  )
}

export const Navigation = Object.assign(MainNavigation, {
  Section,
  SectionFooter,
})
