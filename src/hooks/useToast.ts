import { AppContext, IToastProps } from '@/components'
import { useCallback, useContext } from 'react'

export function useToast(duration = 5000) {
  const { toasts, setToasts } = useContext(AppContext)

  const show = useCallback(
    (toast: IToastProps) => {
      const key = Math.random().toString(36).substring(3)
      const data = {
        key,
        ...toast,
      }
      setToasts((value: IToastProps[]) => [...value, data])
      setTimeout(() => {
        setToasts((value: IToastProps[]) => value.filter((item) => item.key !== key))
      }, duration)
    },
    [setToasts, duration],
  )

  return {
    toasts,
    show,
  }
}
