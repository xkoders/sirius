import { ElementType, ReactNode } from 'react';
export interface IStackProps {
    children: ReactNode;
    className?: string;
    spacing?: 'extraTight' | 'tight' | 'baseTight' | 'loose' | 'extraLoose' | 'none';
    alignment?: 'start' | 'center' | 'end';
    vertical?: Boolean;
    wrap?: Boolean;
    as?: ElementType;
}
export declare function Stack({ children, className, vertical, spacing, alignment, wrap, as: Component, }: IStackProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Stack.d.ts.map