import React from 'react'
import { IAction } from '@/types'
import { classNames } from '@/helpers'
import { Popover } from '../forms-selections'
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
const Activator = ({ title }: { title: string }) => (
  <div>
    <Button>
      <span>{title}</span>
      <span className="-mr-2.5 ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        </svg>
      </span>
    </Button>
  </div>
)
const ActivatorMobile = () => (
  <Button outline>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 -mx-2"
    >
      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </svg>
  </Button>
)
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
          <div className="hidden lg:flex gap-3">
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
                <Popover activator={<Activator title={title} />} key={index}>
                  <ul className="  focus:outline-none p-2 whitespace-nowrap min-w-[12rem]">
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
                            size="none"
                            className="p-2"
                          >
                            {label}
                          </Button>
                        </li>
                      ),
                    )}
                  </ul>
                </Popover>
              ))}
          </div>
          <div className="block lg:hidden">
            <Popover activator={<ActivatorMobile />}>
              <ul className="py-2">
                {secondaryActions &&
                  secondaryActions.map(
                    (
                      { label, onAction, target, url, disabled, loading, variant = 'ghost', rel },
                      index,
                    ) => (
                      <li key={index} className="px-2">
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
                          size="small"
                        >
                          {label}
                        </Button>
                      </li>
                    ),
                  )}
                {actionGroups &&
                  actionGroups.map(({ title, actions }, index) => (
                    <li key={index}>
                      <span className="text-xs font-medium px-4 py-2.5 mt-2 border-t w-full flex">
                        {title}
                      </span>
                      <ul className="focus:outline-none px-2 whitespace-nowrap min-w-[12rem]">
                        {actions.map(
                          (
                            {
                              label,
                              onAction,
                              target,
                              url,
                              disabled,
                              loading,
                              variant = 'ghost',
                              rel,
                            },
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
                                size="small"
                                className=""
                              >
                                {label}
                              </Button>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ))}
              </ul>
            </Popover>
          </div>

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
