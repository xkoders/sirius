import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IAction } from '@/types'

export interface IPageProps {
  children: React.ReactNode
  backAction?: IAction
  className?: string
  title?: string
  subtitle?: string
  primaryAction?: IAction
  secondaryActions?: IAction[]
  actionGroups?: {
    title: string
    actions: IAction[]
  }[]
  fullWidth?: boolean
}
export function Page({
  children,
  className = '',
  title,
  backAction,
  subtitle,
  primaryAction,
  secondaryActions,
  actionGroups,
  fullWidth,
}: IPageProps) {
  return (
    <main className={`mx-auto p-6 w-full ${className} ${fullWidth ? 'w-full' : 'max-w-5xl'}`}>
      <section className="flex gap-3 md:gap-6 mb-5 text-[15px]">
        <article className="flex-1 flex gap-3 items-center">
          {backAction && (
            <button
              className="bg-white shadow-sm border border-gray-400 hover:text-indigo-700 font-medium flex justify-center items-center w-11 h-11 rounded-md"
              onClick={backAction.onAction}
              title={backAction.label || 'Back'}
            >
              &larr;
            </button>
          )}
          <div className="flex-1">
            {title && <h1 className="text-[22px] font-medium">{title}</h1>}
            {subtitle && <h2 className="text-base opacity-75">{subtitle}</h2>}
          </div>
        </article>
        <article className="flex gap-3">
          {secondaryActions &&
            secondaryActions.map(({ label, onAction, target, url, disabled, rel }, index) => (
              <button
                key={index}
                className="hover:text-indigo-700 font-medium py-2 h-fit  rounded-md"
                onClick={onAction}
                title={label}
                disabled={disabled}
              >
                {label}
              </button>
            ))}
          {actionGroups &&
            actionGroups.map(({ title, actions }) => (
              <Menu key={title} as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex w-full gap-3 justify-center rounded-md bg-black/75  px-4 py-2 px-1 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span>title</span>
                    <span>&darr;</span>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {actions.map(({ label, onAction, target, url, disabled, rel }, index) => (
                      <Menu.Item key={index} as={Fragment}>
                        <button
                          className={`group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900`}
                          key={index}
                          onClick={onAction}
                          title={label}
                          disabled={disabled}
                        >
                          {label}
                        </button>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}

          {primaryAction && (
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 h-fit px-4 rounded-md"
              onClick={primaryAction.onAction}
            >
              {primaryAction.label}
            </button>
          )}
        </article>
      </section>
      {children}
    </main>
  )
}
