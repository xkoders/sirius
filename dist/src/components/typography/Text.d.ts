import { ElementType, ReactNode } from 'react';
interface IBoxProps {
    as?: ElementType;
    children?: ReactNode;
    shadow?: 'base' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    className?: string;
    lineClamp?: 1 | 2 | 3 | 4 | 5;
    color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
    variant?: 'default' | 'headingXl' | 'heading2xl' | 'heading3xl' | 'heading4xl' | 'heading5xl' | 'heading6xl' | 'heading7xl' | 'bodyXS' | 'bodySm' | 'bodyMd' | 'bodyLg';
    [x: string]: any;
}
export declare function Text({ as: Component, children, className, shadow, variant, fontWeight, color, disabled, lineClamp, }: IBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map