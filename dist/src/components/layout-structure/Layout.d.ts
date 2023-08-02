import { ElementType, ReactNode } from 'react';
export interface ILayoutProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}
export interface ISectionProps {
    children: ReactNode;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
    oneTwo?: boolean;
    oneThird?: boolean;
    oneFourth?: boolean;
}
export interface IAnnotatedSectionProps {
    children: ReactNode;
    className?: string;
    title?: string;
    description?: string | ReactNode;
}
declare function MainLayout({ children, className, as: Component }: ILayoutProps): import("react/jsx-runtime").JSX.Element;
export declare function Section({ children, className, primary, secondary, oneTwo, oneThird, oneFourth, }: ISectionProps): import("react/jsx-runtime").JSX.Element;
export declare function AnnotatedSection({ children, className, title, description, }: IAnnotatedSectionProps): import("react/jsx-runtime").JSX.Element;
export declare const Layout: typeof MainLayout & {
    Section: typeof Section;
    AnnotatedSection: typeof AnnotatedSection;
};
export {};
//# sourceMappingURL=Layout.d.ts.map