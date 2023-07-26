import { classNames } from '@/helpers'
import React, { ReactNode, useEffect, useRef, useState, useTransition } from 'react'
import { Transition } from '../feedbacks'
interface IPopoverProps {
  children?: ReactNode
  className?: string
  disabled?: boolean
  items?: string
  activator?: string | ReactNode
}

export function Popover({ children, className, activator, disabled }: IPopoverProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Function to check if the click is outside the dropdown
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    // Attach the event listener to the document when the component mounts
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div ref={dropdownRef} className={classNames(className, 'relative inline-block text-left')}>
      <div
        className={classNames(
          disabled ? 'pointer-events-none opacity-75' : '',
          'focus:outline-none',
        )}
        onClick={() => setIsOpen((v) => !v)}
      >
        {activator}
      </div>
      <Transition type="slide-down" timing="ease" className="z-10">
        {isOpen && (
          <div className="absolute z-50 right-0 mt-1 min-w-[10rem] origin-top-right rounded-md bg-white shadow-lg border ">
            {children}
          </div>
        )}
      </Transition>
    </div>
  )
}
