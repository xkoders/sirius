import { Dispatch, createContext, useReducer } from 'react'
const initialData = {
  selectedItems: [],
  select: true,
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
export const AppContext = createContext<{
  tableResources: IDataReducer
  dispatch: Dispatch<{ type: ActionType; payload: any }>
}>({
  tableResources: initialData,
  dispatch: () => null,
})
type ActionType = 'addSelectedItem' | 'removeSelectedItem'

function tasksReducer(data: IDataReducer, action: { type: ActionType; payload: any }) {
  switch (action.type) {
    case 'addSelectedItem':
      return {
        ...data,
        selectedItems: [...data.selectedItems, action.payload],
      }
    case 'removeSelectedItem':
      const d = data.selectedItems
      return {
        ...data,
        selectedItems: d.filter((item) => JSON.stringify(item) !== JSON.stringify(action.payload)),
      }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function ProviderSirius({ children }: { children: React.ReactNode }) {
  const [tableResources, dispatch] = useReducer(tasksReducer, initialData)

  return <AppContext.Provider value={{ tableResources, dispatch }}>{children}</AppContext.Provider>
}
