import React from 'react';
import { IAction } from '../../../../../../../../src/types';
export interface IPageProps {
    children: React.ReactNode;
    backAction?: IAction;
    className?: string;
    title?: string;
    subtitle?: string;
    primaryAction?: IAction;
    secondaryActions?: IAction[];
    actionGroups?: {
        title: string;
        actions: IAction[];
    }[];
    fullWidth?: boolean;
}
export declare function Page({ children, className, title, backAction, subtitle, primaryAction, secondaryActions, actionGroups, fullWidth, }: IPageProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Page.d.ts.map