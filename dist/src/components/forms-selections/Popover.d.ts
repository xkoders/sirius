import { ElementType, ReactNode } from 'react';
interface IPopoverProps {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    items?: string;
    as?: ElementType;
    activator?: string | ReactNode;
}
export declare function Popover({ children, className, as: Component, activator, disabled, }: IPopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Popover.d.ts.map