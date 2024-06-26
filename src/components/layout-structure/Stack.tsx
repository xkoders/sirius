import React, { ElementType, ReactNode } from 'react'
export interface IStackProps {
  children: ReactNode
  className?: string
  spacing?: 'extraTight' | 'tight' | 'baseTight' | 'loose' | 'extraLoose' | 'none'
  alignment?: 'start' | 'center' | 'end'
  vertical?: boolean
  wrap?: boolean
  as?: ElementType
}
const SPACING = {
  extraTight: 'gap-1',
  tight: 'gap-2',
  baseTight: 'gap-4',
  loose: 'gap-8',
  extraLoose: 'gap-12',
  none: 'gap-0',
}
const ALIGNMENT = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
}
export function Stack({
  children,
  className,
  vertical,
  spacing = 'baseTight',
  alignment,
  wrap,
  as: Component = 'div',
}: IStackProps) {
  // const
  return (
    <Component
      className={[
        'flex',
        vertical && 'flex-col',
        wrap && 'flex-wrap',
        spacing && SPACING[spacing],
        alignment && ALIGNMENT[alignment],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}
