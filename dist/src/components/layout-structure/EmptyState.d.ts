import { VariantType, IAction, IconType } from '../../../../../../../../src/types';
import { ReactNode } from 'react';
interface IActionVariant extends IAction {
    variant?: VariantType;
}
interface IEmptyStateProps {
    className?: string;
    heading?: string;
    actions?: IActionVariant[];
    thumb?: IconType;
    children?: ReactNode;
}
export declare function EmptyState({ children, className, heading, ...props }: IEmptyStateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EmptyState.d.ts.map