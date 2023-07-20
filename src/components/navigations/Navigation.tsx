import React, { ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps } from 'react'

interface INavigationProps {
  children: React.ReactNode
}

interface IItemProps {
  url: string
  label: string
  icon?:
    | ReactNode
    | any
    | ForwardRefExoticComponent<
        Omit<SVGProps<SVGSVGElement>, 'ref'> & {
          title?: string | undefined
          titleId?: string | undefined
        } & RefAttributes<SVGSVGElement>
      >
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
}

function MainNavigation({ children }: INavigationProps) {
  return <aside>{children}</aside>
}

function Section({ items }: ISectionProps) {
  return (
    <ul className="py-3 w-60 text-[15px] text-gray-950 border-r h-full max-h-screen sticky top-14">
      {items.map((item, index) => (
        <li key={index} className="px-3 flex flex-col gap-1">
          <a
            href={item.url}
            className={[
              'py-1 flex flex-1 gap-2 relative hover:bg-gray-200 hover:text-orange-500 px-2 rounded-md',
              item.disabled && 'pointer-events-none opacity-50',
              item.className,
            ].join(' ')}
          >
            {item.selected && !item.subNavigationItems?.length && (
              <span className="absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500"></span>
            )}
            {item.badge && (
              <span className="absolute top-1/2 right-2 w-fit h-fit -translate-y-1/2">
                {item.badge}
              </span>
            )}
            {item.icon && (
              <span>
                {
                  <item.icon
                    className={['w-5', item.selected && 'text-orange-500']
                      .filter(Boolean)
                      .join(' ')}
                  />
                }
              </span>
            )}
            <span>{item.label}</span>
          </a>
          {item.subNavigationItems && (
            <ul className="text-slate-500">
              {item.subNavigationItems.map((subItem, index) => (
                <li key={index} className=" flex flex-col">
                  <a
                    href={item.url}
                    className={[
                      'py-1 flex flex-1 gap-2 relative hover:bg-gray-200 hover:text-orange-500 pl-9 pr-2 rounded-md',
                      subItem.className,
                      subItem.selected && !subItem.disabled && 'bg-gray-200 text-orange-500',
                      subItem.disabled && 'pointer-events-none opacity-50',
                    ].join(' ')}
                  >
                    {subItem.selected && (
                      <span className="absolute top-1/2 -left-2 w-1 h-6 -mt-3 rounded-full bg-orange-500"></span>
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
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export const Navigation = Object.assign(MainNavigation, {
  Section,
})
