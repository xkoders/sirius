import { AppContext, IToastProps } from '@/components'
import React, { useCallback, useContext } from 'react'

export function useToast() {
  const { toasts, setToasts } = useContext(AppContext)

  const show = useCallback(
    (toast: IToastProps) => {
      setToasts((value: IToastProps[]) => [...value, toast])
    },
    [toasts],
  )
  return {
    toasts,
    show,
  }
}
