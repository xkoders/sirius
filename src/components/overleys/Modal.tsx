import React, { useCallback, useEffect, useRef, memo } from 'react'
import { Portal } from './Portal'
import { Transition } from '../feedbacks'
import { classNames } from '@/helpers'

interface IModalProps {
  children: React.ReactNode
  show?: boolean
  className?: string
  title?: string
  onClose?: () => void
  // Accessibility props
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-labelledby'?: string
  closeOnEscape?: boolean
  closeOnOverlayClick?: boolean
}

export const Modal = memo(({ 
  show, 
  children, 
  className, 
  title, 
  onClose = () => null,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  closeOnEscape = true,
  closeOnOverlayClick = true
}: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const titleId = title ? 'modal-title' : undefined
  const descriptionId = 'modal-description'

  const handleClose = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onClose()
    },
    [onClose],
  )

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose, closeOnOverlayClick],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose()
      }
    },
    [onClose, closeOnEscape],
  )

  // Focus management
  useEffect(() => {
    if (show && modalRef.current) {
      // Focus the modal when it opens
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstFocusable = focusableElements[0] as HTMLElement
      if (firstFocusable) {
        firstFocusable.focus()
      }
    }
  }, [show])

  // Trap focus within modal
  useEffect(() => {
    if (!show) return

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [show])

  if (!show) return null

  return (
    <Portal>
      <Transition type="slide-up">
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-[999] flex items-center justify-center"
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledby || titleId}
          aria-describedby={ariaDescribedby || descriptionId}
          aria-label={ariaLabel}
        >
          <div 
            ref={modalRef}
            className={classNames(className, 'w-full max-w-xl bg-white rounded-md p-4')}
            role="document"
            tabIndex={-1}
          >
            {title && (
              <h2 id={titleId} className="font-medium pb-4 text-lg">
                {title}
              </h2>
            )}
            <div id={descriptionId} className="sr-only">
              Modal content
            </div>
            {children}
          </div>
        </div>
      </Transition>
    </Portal>
  )
})
