import { IAction } from './common'

export * from './common'

export interface IToastProps {
    content: string | any,
    classOverride?: string
    id?: string | number
    key?: string | number
    type?: 'success' | 'error' | 'info' | 'warning' | 'default'
    duration?: number
    action?: IAction
  }