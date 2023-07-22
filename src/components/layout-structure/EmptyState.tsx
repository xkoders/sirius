import { classNames } from '@/helpers'
import { ButtonType, IAction, IconType } from '@/types'
import React, { ReactNode, useMemo } from 'react'

interface IActionVariant extends IAction {
  variant?: ButtonType
}
interface IEmptyStateProps {
  className?: string
  heading?: string
  actions?: IActionVariant[]
  thumb?: IconType
  children?: ReactNode
}
export function EmptyState({ children, className, heading, ...props }: IEmptyStateProps) {
  const thumb = useMemo(
    () =>
      typeof props.thumb === 'string' ? (
        <img src={props.thumb} alt={heading || ''} className="w-20 object-contain" />
      ) : (
        <div className="w-8 h-8 block">{props.thumb}</div>
      ),
    [props.thumb],
  )
  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center text-center my-5',
        className,
      )}
    >
      <div className="flex">{thumb}</div>
      <h3 className="text-lg text-center mt-4 mb-2 font-medium text-gray-800">{heading}</h3>
      <div className="text-sm text-gray-500 max-w-xl ">{children}</div>
    </div>
  )
}
