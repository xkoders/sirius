import { stringify } from '@/helpers'
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useReducer,
  useState,
} from 'react'
import { IToastProps, Toast, ErrorBoundary } from '../feedbacks'
const initialData: IDataReducer<object> = {
  selectedItems: [],
  select: true,
  isFramePresent: false,
  isSticky: {
    first: false,
    second: false,
    last: false,
  },
}

interface IDataReducer<T> {
  selectedItems: T[]
  select: boolean
  isFramePresent: boolean
  isSticky: {
    first: boolean
    second: boolean
    last: boolean
  }
}
type CreateContextType = {
  tableResources: IDataReducer<unknown>
  dispatch: Dispatch<{ type: ActionType; payload: unknown }>
  toasts: IToastProps[]
  setToasts: Dispatch<SetStateAction<IToastProps[]>>
  isFramePresent: boolean
  setIsFramePresent: Dispatch<SetStateAction<boolean>>
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

function tableReducer<T>(
  data: IDataReducer<T>,
  action: { type: ActionType; payload: T },
): IDataReducer<T> {
  switch (action.type) {
    case 'ADD_SELECTED_ITEM':
      return {
        ...data,
        selectedItems: [...data.selectedItems, action.payload],
      }
    case 'REMOVE_SELECTED_ITEM':
      return {
        ...data,
        selectedItems: data.selectedItems.filter(
          (item) => stringify(item) !== stringify(action.payload),
        ),
      }
    case 'SELECT_ALL':
      return {
        ...data,
        selectedItems: action.payload as T[],
      }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function ProviderSirius({ children }: { children: React.ReactNode }) {
  const [tableResources, dispatch] = useReducer(
    tableReducer,
    initialData
  )
  const [toasts, setToasts] = useState<IToastProps[]>([])
  const [isFramePresent, setIsFramePresent] = useState<boolean>(false)
  const removeToast = useCallback(
    (item: IToastProps) => setToasts((v) => v.filter((t) => t.key !== item.key)),
    [],
  )
  return (
    <AppContext.Provider
      value={{ tableResources, dispatch, toasts, setToasts, isFramePresent, setIsFramePresent }}
    >
      <ErrorBoundary
        fallback={
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-red-600 text-sm bg-red-100 px-3 py-2 rounded border border-red-300">
            Toast system error - please refresh the page
          </div>
        }
      >
        <div className="fixed flex flex-col gap-1 z-[9001] left-1/2 bottom-5 -translate-x-1/2 w-fit md:min-w-[20rem] max-h-[90dvh] overflow-y-auto">
          {toasts.map((item, idx) => (
            <Toast
              content={item.content}
              type={'default'}
              classOverride="shadow-xl rounded-xl px-2 min-h-12 flex gap-2 items-center w-full"
              onDismiss={() => removeToast(item)}
              duration={item.duration}
              action={{ label: 'Undo', onAction: () => {} }}
              key={idx}
            />
          ))}
        </div>
      </ErrorBoundary>

      {children}
    </AppContext.Provider>
  )
}
