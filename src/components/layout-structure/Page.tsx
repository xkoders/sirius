import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IAction } from '@/types'
import { classNames } from '@/helpers'
import { Popover } from '../forms'
import { Button } from '../actions'

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
  const activator = (
    <div>
      <Button variant="default" className="gap-2">
        <span>title</span>
        <span className="-mr-2">&darr;</span>
      </Button>
    </div>
  )
  return (
    <main
      className={classNames(className, fullWidth ? 'w-full' : 'max-w-5xl', 'mx-auto p-6 w-full')}
    >
      <section className="flex gap-3 md:gap-6 mb-5 text-[15px]">
        <article
          className={classNames(subtitle ? 'items-start' : 'items-center', 'flex-1 flex gap-3')}
        >
          {backAction && (
            <button
              className="shadow-sm border border-gray-400 hover:bg-gray-200 font-medium flex justify-center items-center w-10 h-10 rounded-md"
              onClick={backAction.onAction}
              title={backAction.label || 'Back'}
            >
              &larr;
            </button>
          )}
          <div className="flex-1">
            {title && <h1 className="text-[22px] font-medium leading-[1]">{title}</h1>}
            {subtitle && <h2 className="text-base opacity-75 mt-1">{subtitle}</h2>}
          </div>
        </article>
        <article className="flex gap-3">
          {secondaryActions &&
            secondaryActions.map(
              (
                { label, onAction, target, url, disabled, loading, variant = 'ghost', rel },
                index,
              ) => (
                <Button
                  key={index}
                  className="hover:text-indigo-700 font-medium py-2 h-fit rounded-md"
                  onClick={onAction}
                  disabled={disabled}
                  loading={loading}
                  variant={variant}
                  url={url}
                  rel={rel}
                  target={target}
                >
                  {label}
                </Button>
              ),
            )}
          {actionGroups &&
            actionGroups.map(({ title, actions }, index) => (
              <Popover activator={activator} key={index}>
                <ul className=" divide-y divide-gray-100  ring-1 ring-black ring-opacity-5 focus:outline-none p-3 whitespace-nowrap">
                  {actions.map(
                    (
                      { label, onAction, target, url, disabled, loading, variant = 'ghost', rel },
                      idx,
                    ) => (
                      <li key={idx}>
                        <Button
                          disabled={disabled}
                          onClick={onAction}
                          url={url}
                          rel={rel}
                          target={target}
                          variant={variant}
                          loading={loading}
                          fullwidth
                          alignment="start"
                        >
                          {label}
                        </Button>
                      </li>
                    ),
                  )}
                </ul>
              </Popover>
            ))}

          {primaryAction && (
            <Button onClick={primaryAction.onAction} variant="primary">
              {primaryAction.label}
            </Button>
          )}
        </article>
      </section>
      {children}
    </main>
  )
}
