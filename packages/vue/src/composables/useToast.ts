// import { ref, readonly } from 'vue'

// export interface ToastNotification {
//   id: string
//   message: string
//   type: 'success' | 'error' | 'warning' | 'info'
//   duration?: number
//   dismissible?: boolean
// }

// export function useToast() {
//   const toasts = ref<ToastNotification[]>([])
  
//   const addToast = (toast: Omit<ToastNotification, 'id'>) => {
//     const id = Math.random().toString(36).substr(2, 9)
//     const newToast: ToastNotification = {
//       id,
//       duration: 5000,
//       dismissible: true,
//       ...toast
//     }
    
//     toasts.value.push(newToast)
    
//     if (newToast.duration && newToast.duration > 0) {
//       setTimeout(() => {
//         removeToast(id)
//       }, newToast.duration)
//     }
    
//     return id
//   }
  
//   const removeToast = (id: string) => {
//     const index = toasts.value.findIndex(toast => toast.id === id)
//     if (index > -1) {
//       toasts.value.splice(index, 1)
//     }
//   }
  
//   const clearToasts = () => {
//     toasts.value = []
//   }
  
//   const success = (message: string, options?: Partial<Omit<ToastNotification, 'id' | 'message' | 'type'>>) => {
//     return addToast({ message, type: 'success', ...options })
//   }
  
//   const error = (message: string, options?: Partial<Omit<ToastNotification, 'id' | 'message' | 'type'>>) => {
//     return addToast({ message, type: 'error', ...options })
//   }
  
//   const warning = (message: string, options?: Partial<Omit<ToastNotification, 'id' | 'message' | 'type'>>) => {
//     return addToast({ message, type: 'warning', ...options })
//   }
  
//   const info = (message: string, options?: Partial<Omit<ToastNotification, 'id' | 'message' | 'type'>>) => {
//     return addToast({ message, type: 'info', ...options })
//   }
  
//   return {
//     toasts: readonly(toasts),
//     addToast,
//     removeToast,
//     clearToasts,
//     success,
//     error,
//     warning,
//     info
//   }
// }

// composables/useToast.ts
import { inject } from 'vue'
import type { IToastProps } from '../types'  // adjust path

export function useToast(duration = 5000) {
  const AppContext = inject('AppContext') as {
    toasts: any
    setToasts: (val: IToastProps[] | ((v: IToastProps[]) => IToastProps[])) => void
  }

  if (!AppContext) {
    throw new Error('useToast must be used within ProviderSirius')
  }

  const { toasts, setToasts } = AppContext

  function show(toast: IToastProps) {
    const key = Math.random().toString(36).substring(3)
    const data = { key, ...toast }

    // Support function-updater style like React
    if (typeof setToasts === 'function') {
      setToasts((prev: IToastProps[]) => [...prev, data])
    }

    setTimeout(() => {
      if (typeof setToasts === 'function') {
        setToasts((prev: IToastProps[]) => prev.filter((item) => item.key !== key))
      }
    }, duration)
  }

  return {
    toasts,
    show,
  }
}

