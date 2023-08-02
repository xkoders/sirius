import React, { ReactNode } from 'react';
interface ITooltipProps {
    children: React.ReactNode;
    className?: string;
    content?: string | ReactNode;
    align?: 'left' | 'right' | 'center';
    down?: boolean;
    dark?: boolean;
}
export declare function Tooltip({ children, className, content, align, dark, down, }: ITooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map