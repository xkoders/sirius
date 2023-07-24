import { classNames } from '@/helpers'
import React from 'react'
interface ISpinnerProps {
  className?: string
  size?: 'medium' | 'large' | 'small' | 'none'
}
const SIZE = {
  large: 'h-8 w-8',
  medium: 'h-6 w-6',
  small: 'h-5 w-5',
  none: '',
}
export function Spinner({ className = '', size = 'medium' }: ISpinnerProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(className, SIZE[size], 'animate-spin')}
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="matrix(1,0,0,1,0,0)"
      />
    </svg>
  )
}
