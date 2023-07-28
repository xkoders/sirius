import React, { useCallback } from 'react'
import { Portal } from './Portal'
import { Transition } from '../feedbacks'
import { classNames } from '@/helpers'

interface IModalProps {
  children: React.ReactNode
  show?: boolean
  className?: string
  title?: string
  onClose?: () => void
}

export function Modal({ show, children, className, title, onClose = () => null }: IModalProps) {
  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onClose()
    },
    [show],
  )
  return (
    <Portal>
      <Transition type="slide-up">
        {show && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-[999] flex items-center justify-center"
            onClick={handleClose}
          >
            <div className={classNames(className, 'w-full max-w-xl bg-white rounded-md p-4')}>
              {title && <h1 className="font-medium pb-4">{title}</h1>}
              {children}
            </div>
          </div>
        )}
      </Transition>
    </Portal>
  )
}
