import React from 'react'
import { Box } from './Box'
import { classNames } from '@/helpers'
import { IAction } from '@/types'
import { Button } from '../actions'
import { Popover } from '../forms'
interface IMediaCardProps {
  children?: React.ReactNode
  className?: string
  title?: string
  url?: string
  promotedAction?: IAction
  primaryAction?: IAction[]
  secondaryActions?: IAction[]
  popoverActions?: IAction[]
}
export function MediaCard({
  children,
  className,
  title,
  url,
  promotedAction,
  popoverActions,
  primaryAction,
}: IMediaCardProps) {
  const activator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 hover:text-gray-950 text-gray-600 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  )
  return (
    <Box
      className={classNames(className, 'bg-white flex flex-col lg:flex-row overflow-hidden')}
      rounded="md"
      shadow="md"
      as="section"
    >
      <div className="relative aspect-[16/9]">
        <img src={url} alt="" className="aspect-video object-cover flex h-full w-full" />
      </div>
      <div className="flex-1 px-5 py-2.5">
        <div className="flex mb-2">
          <h3 className="text-lg font-medium flex-1">{title}</h3>
          <div className="flex gap-1 items-center -mt-1.5">
            {promotedAction && (
              <Button
                link
                disabled={promotedAction.disabled}
                loading={promotedAction.loading}
                icon={promotedAction.icon}
                onClick={promotedAction.onAction}
                variant="info"
                size="small"
                className="-mt-0.5"
              >
                {promotedAction.label}
              </Button>
            )}
            {!!popoverActions?.length && (
              <Popover activator={activator}>
                <div className="p-3 flex flex-col gap-1">
                  {popoverActions.map(
                    ({ label, onAction, target, url, disabled, variant = 'ghost', rel }, idx) => (
                      <Button
                        key={idx}
                        disabled={disabled}
                        onClick={onAction}
                        url={url}
                        target={target}
                        rel={rel}
                        variant={variant}
                        fullwidth
                        alignment="start"
                      >
                        {label}
                      </Button>
                    ),
                  )}
                </div>
              </Popover>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-600">{children}</div>
        {!!primaryAction?.length && (
          <div className="flex gap-2 mt-4">
            {primaryAction.map(
              ({ label, onAction, target, url, disabled, variant = 'default', rel }, idx) => (
                <Button
                  key={idx}
                  disabled={disabled}
                  onClick={onAction}
                  url={url}
                  target={target}
                  rel={rel}
                  variant={variant}
                >
                  {label}
                </Button>
              ),
            )}
          </div>
        )}
      </div>
    </Box>
  )
}
