import { ReactNode } from 'react';
import { IAction } from '../../../../../../../../src/types';
export interface IToastProps {
    content: string | ReactNode;
    className?: string;
    id?: string | number;
    type?: 'success' | 'error' | 'info' | 'warning' | 'default';
    duration?: number;
    onDismiss?: () => void;
    action?: IAction;
}
export declare function Toast({ content, className, type, duration, onDismiss, action, }: IToastProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Toast.d.ts.map