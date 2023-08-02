import React from 'react';
import { IAction } from '../../../../../../../../src/types';
interface IMediaCardProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    url?: string;
    promotedAction?: IAction;
    primaryAction?: IAction[];
    secondaryActions?: IAction[];
    popoverActions?: IAction[];
}
export declare function MediaCard({ children, className, title, url, promotedAction, popoverActions, primaryAction, }: IMediaCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MediaCard.d.ts.map