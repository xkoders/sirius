import { classNames } from '@/helpers'
import React, { ElementType, ReactNode } from 'react'

interface ITransitionProps {
  children: ReactNode
  duration?: 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | 1500 | 2000
  type?: 'fade-in' | 'slide-up' | 'slide-down' | 'collapsible'
  timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  className?: string
  as?: ElementType
}
export const Transition = ({
  children,
  className,
  duration = 200,
  as: Component = 'div',
  type = 'fade-in',
  timing = 'ease-out',
}: ITransitionProps) => {
  const styles: Record<string, string> = {
    '--x-duration': `${duration}ms`,
    '--x-timing': timing,
  }
  return (
    <Component style={styles} className={classNames('animate', className, type)}>
      {children}
    </Component>
  )
}
