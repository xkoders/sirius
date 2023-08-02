import { IconType } from '../../../../../../../../src/types';
import React, { ReactNode } from 'react';
interface INavigationProps {
    children: React.ReactNode;
    minimized?: boolean;
    className?: string;
}
interface IItemProps {
    url: string;
    label: string;
    icon?: IconType;
    badge?: string | ReactNode;
    className?: string;
    disabled?: boolean;
    selected?: boolean;
}
interface IItemsProps extends IItemProps {
    subNavigationItems?: IItemProps[];
}
interface ISectionProps {
    items: IItemsProps[];
    title?: string;
}
declare function MainNavigation({ children, minimized, className }: INavigationProps): import("react/jsx-runtime").JSX.Element;
declare function SectionFooter({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function Section({ items, title }: ISectionProps): import("react/jsx-runtime").JSX.Element;
export declare const Navigation: typeof MainNavigation & {
    Section: typeof Section;
    SectionFooter: typeof SectionFooter;
};
export {};
//# sourceMappingURL=Navigation.d.ts.map