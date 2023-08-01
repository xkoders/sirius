import { stringify } from '@/helpers'
import { Dispatch, createContext, useCallback, useReducer, useState } from 'react'
import { IToastProps, Toast, Transition } from '../feedbacks'
const initialData = {
  selectedItems: [],
  select: true,
  isFramePresent: false,
  isSticky: {
    first: false,
    second: false,
    last: false,
  },
}

interface IDataReducer {
  selectedItems: any[]
  select: boolean
  isSticky: {
    first: boolean
    second: boolean
    last: boolean
  }
}
interface IDataReducer {
  selectedItems: any[]
  select: boolean
  isSticky: {
    first: boolean
    second: boolean
    last: boolean
  }
}
type CreateContextType = {
  tableResources: IDataReducer
  dispatch: Dispatch<{ type: ActionType; payload: any }>
  toasts: IToastProps[]
  setToasts: any
  isFramePresent: boolean
  setIsFramePresent: any
}
export const AppContext = createContext<CreateContextType>({
  tableResources: initialData,
  dispatch: () => null,
  toasts: [],
  setToasts: () => null,
  setIsFramePresent: () => null,
  isFramePresent: false,
})
type ActionType = 'ADD_SELECTED_ITEM' | 'REMOVE_SELECTED_ITEM' | 'SELECT_ALL'

function tableReducer(data: IDataReducer, action: { type: ActionType; payload: any }) {
  switch (action.type) {
    case 'ADD_SELECTED_ITEM':
      return {
        ...data,
        selectedItems: [...data.selectedItems, action.payload],
      }
    case 'REMOVE_SELECTED_ITEM':
      const d = data.selectedItems
      return {
        ...data,
        selectedItems: d.filter((item) => stringify(item) !== stringify(action.payload)),
      }
    case 'SELECT_ALL':
      return {
        ...data,
        selectedItems: action.payload,
      }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function ProviderSirius({ children }: { children: React.ReactNode }) {
  const [tableResources, dispatch] = useReducer(tableReducer, initialData)
  const [toasts, setToasts] = useState<IToastProps[]>([])
  const [isFramePresent, setIsFramePresent] = useState<boolean>(false)
  const removeToast = useCallback(
    (item: IToastProps) =>
      setToasts(toasts.filter((t) => t.id !== item.id || stringify(t) !== stringify(item))),
    [toasts],
  )
  return (
    <AppContext.Provider
      value={{ tableResources, dispatch, toasts, setToasts, isFramePresent, setIsFramePresent }}
    >
      {/* <Transition type="slide-up"> */}
      {toasts.map((item, idx) => (
        <Toast
          content={item.content}
          type={'default'}
          onDismiss={() => removeToast(item)}
          duration={item.duration}
          action={{ label: 'Undo', onAction: () => {} }}
          key={idx}
        />
      ))}{' '}
      {/* </Transition> */}
      {children}
    </AppContext.Provider>
  )
}
