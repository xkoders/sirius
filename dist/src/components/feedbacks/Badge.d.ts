import { IconType } from '../../../../../../../../src/types';
import React from 'react';
interface IBadgeProps {
    children?: React.ReactNode;
    icon?: IconType;
    className?: string;
    status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending';
    type?: 'incomplete' | 'halfComplete' | 'complete' | 'dashed';
}
export declare function Badge({ children, status, type, className, ...props }: IBadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map