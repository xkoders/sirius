import { classNames } from '@/helpers'
import { CSSProperties, ReactNode } from 'react'

interface ITransitionProps {
  children: ReactNode
  duration?: 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | 1500 | 2000
  type?: 'fade-in' | 'slide-up' | 'slide-down'
  timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
}
export const Transition = ({
  children,
  duration = 200,
  type = 'fade-in',
  timing = 'ease-out',
}: ITransitionProps) => {
  const styles: any = {
    '--x-duration': `${duration}ms`,
    '--x-timing': timing,
  }
  return (
    <div style={styles} className={classNames('animate', type)}>
      {children}
    </div>
  )
}
