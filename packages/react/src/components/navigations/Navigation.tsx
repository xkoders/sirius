import { classNames } from '@/helpers'
import { IconType } from '@/types'
import React, { ReactNode, useCallback, useContext, memo } from 'react'
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

const MainNavigation = memo(({ children, minimized, className }: INavigationProps) => {
  const { isFramePresent } = useContext(AppContext)
  return (
    <nav
      className={classNames(
        'transition-all duration-500 overflow-y-auto sticky z-10 hidden border-r divide-y flex-col',
        className,
        minimized ? 'w-[61px] md:w-60 sm:flex' : ' md:flex w-60',
        isFramePresent ? ' h-[calc(100vh-56px)] top-14' : 'h-screen top-0',
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {children}
    </nav>
  )
})

const SectionFooter = memo(({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-3 p-2" role="contentinfo" aria-label="Navigation footer">
      {children}
    </div>
  )
})

const Section = memo(({ items, title }: ISectionProps) => {
  const ActiveDot = () => (
    <span className="absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500" aria-hidden="true"></span>
  )
  
  const isSelectedPassed = useCallback((subItems: IItemProps[], index: number) => {
    const findIndex = subItems.findIndex((item: IItemProps) => item.selected)
    if (findIndex !== -1) {
      return index < findIndex // 0 3
    }
    return false
  }, [])
  
  return (
    <section className="py-3 w-full text-[15px] text-gray-950 last:flex-1 last-of-type:flex-1">
      {title && (
        <h2 className="text-xs font-medium px-5 py-1 text-gray-500" id={`nav-section-${title}`}>
          {title}
        </h2>
      )}
      <ul 
        className="w-full"
        role="list"
        aria-labelledby={title ? `nav-section-${title}` : undefined}
      >
        {items.map((item, index) => (
          <li key={index} className="px-3 flex flex-col gap-1">
            <a
              href={item.url || '#'}
              className={[
                'py-1 flex items-center flex-1 gap-3 relative hover:bg-gray-200/50 hover:text-orange-500 px-1 rounded-md',
                item.disabled && 'pointer-events-none opacity-50',
                item.className,
              ].join(' ')}
              aria-current={item.selected ? 'page' : undefined}
              aria-disabled={item.disabled}
              aria-describedby={item.badge ? `badge-${index}` : undefined}
              tabIndex={item.disabled ? -1 : 0}
            >
              {item.selected && !item.subNavigationItems?.length && <ActiveDot />}
              {item.badge && (
                <span 
                  className="absolute top-1/2 right-2 w-fit h-fit -translate-y-1/2"
                  id={`badge-${index}`}
                  aria-label={`Badge: ${typeof item.badge === 'string' ? item.badge : 'Notification'}`}
                >
                  {item.badge}
                </span>
              )}
              {item.icon && (
                <span aria-hidden="true">
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
            
            {item.subNavigationItems && item.subNavigationItems.length > 0 && (
              <ul 
                className="ml-6 mt-1"
                role="list"
                aria-label={`Sub-navigation for ${item.label}`}
              >
                {item.subNavigationItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.url || '#'}
                      className={[
                        'py-1 flex items-center gap-3 relative hover:bg-gray-200/50 hover:text-orange-500 px-1 rounded-md text-sm',
                        subItem.disabled && 'pointer-events-none opacity-50',
                        subItem.selected && 'text-orange-500 font-medium',
                      ].join(' ')}
                      aria-current={subItem.selected ? 'page' : undefined}
                      aria-disabled={subItem.disabled}
                      tabIndex={subItem.disabled ? -1 : 0}
                    >
                      {subItem.selected && <ActiveDot />}
                      <span>{subItem.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
})

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
