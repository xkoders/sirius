import React, { ElementType } from 'react';
import { IconType } from '../../../../../../../../src/types';
interface IBannerProps {
    children?: React.ReactNode;
    as?: ElementType;
    icon?: IconType;
    className?: string;
    status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending';
    title?: string;
    onDismiss?: () => void;
}
export declare function Banner({ children, as: Component, className, onDismiss, title, status, }: IBannerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Banner.d.ts.map