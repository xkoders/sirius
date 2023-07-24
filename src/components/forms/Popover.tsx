import { classNames } from '@/helpers'
import React, { ReactNode, useEffect, useRef, useState, useTransition } from 'react'
import { Transition } from '../feedbacks'
interface IPopoverProps {
  children?: ReactNode
  className?: string
  items?: string
  activator?: string | ReactNode
}

export function Popover({ children, className, activator }: IPopoverProps) {
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
    <div
      ref={dropdownRef}
      className={classNames(className, 'relative inline-block text-left z-[1]')}
    >
      <div onClick={() => setIsOpen((v) => !v)}>{activator}</div>
      <Transition type="slide-up" timing="ease-out" duration={300}>
        {isOpen && (
          <div className="absolute z-10 right-0 mt-2 min-w-[10rem] origin-top-right rounded-md bg-white shadow-lg ">
            {children}
          </div>
        )}
      </Transition>
    </div>
  )
}
