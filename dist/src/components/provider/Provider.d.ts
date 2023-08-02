import { Dispatch } from 'react';
import { IToastProps } from '../feedbacks';
interface IDataReducer {
    selectedItems: any[];
    select: boolean;
    isSticky: {
        first: boolean;
        second: boolean;
        last: boolean;
    };
}
interface IDataReducer {
    selectedItems: any[];
    select: boolean;
    isSticky: {
        first: boolean;
        second: boolean;
        last: boolean;
    };
}
type CreateContextType = {
    tableResources: IDataReducer;
    dispatch: Dispatch<{
        type: ActionType;
        payload: any;
    }>;
    toasts: IToastProps[];
    setToasts: any;
    isFramePresent: boolean;
    setIsFramePresent: any;
};
export declare const AppContext: import("react").Context<CreateContextType>;
type ActionType = 'ADD_SELECTED_ITEM' | 'REMOVE_SELECTED_ITEM' | 'SELECT_ALL';
export declare function ProviderSirius({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Provider.d.ts.map