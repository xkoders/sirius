import { ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps } from 'react'

export type RoundedType = 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
export type ShadowType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export type IconType =
  | ReactNode
  | any
  | ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined
        titleId?: string | undefined
      } & RefAttributes<SVGSVGElement>
    >

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'ghost'
  | 'subdued'
  | 'default'
export interface IAction {
  label: string
  target?: '_blank' | '_self' | '_parent' | undefined
  url?: string
  disabled?: boolean
  rel?: 'noreferrer'
  onAction?: () => void
}
