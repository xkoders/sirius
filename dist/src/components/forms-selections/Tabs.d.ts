import React from 'react';
export type TabsProps = {
    label?: string | React.ReactNode;
    index?: number;
    onAction?: () => void;
    actions?: React.ReactNode;
};
export type ITabsProps = {
    children?: React.ReactNode;
    className?: string;
    onChange?: (index: number, val: any) => void;
    tabs: TabsProps[];
    selected?: TabsProps | any;
    filled?: boolean;
    canCreateTab?: boolean;
};
export declare function Tabs({ tabs, className, children, canCreateTab, filled, selected, onChange, }: ITabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map