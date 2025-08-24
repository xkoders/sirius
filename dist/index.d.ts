import { Component } from 'react';
import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { ElementType } from 'react';
import { ErrorInfo } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { SetStateAction } from 'react';

declare type ActionType = 'ADD_SELECTED_ITEM' | 'REMOVE_SELECTED_ITEM' | 'SELECT_ALL';

export declare function AnnotatedSection({ children, className, title, description, }: IAnnotatedSectionProps): JSX_2.Element;

export declare const AppContext: default_2.Context<CreateContextType>;

export declare const Badge: default_2.MemoExoticComponent<({ children, status, type, className, ...props }: IBadgeProps) => JSX_2.Element>;

export declare function Banner({ children, as: Component, appearance, className, onDismiss, title, status, }: IBannerProps): JSX_2.Element;

export declare function Box({ as, children, rounded, shadow, className, sectionned, ...rest }: IBoxProps): JSX_2.Element;

export declare const Button: default_2.MemoExoticComponent<({ children, onClick, className, submit, disabled, loading, outline, link, target, url, rel, rounded, alignment, fullwidth, variant, size, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-expanded": ariaExpanded, "aria-pressed": ariaPressed, "aria-haspopup": ariaHasPopup, role, title, ...props }: IButtonProps) => JSX_2.Element>;

declare function Cell({ children, className }: IBase): JSX_2.Element;

export declare const Checkbox: ({ indeterminate, label, disabled, name, value, onChange, checked, className, }: ICheckbox) => JSX_2.Element;

export declare function ChoiceList({ className, name, horizontal, items, defaultChecked, onChange, }: IChoiceListProps): JSX_2.Element;

export declare function classNames(...classes: (string | undefined)[]): string;

declare type CreateContextType = {
    tableResources: IDataReducer<unknown>;
    dispatch: Dispatch<{
        type: ActionType;
        payload: unknown;
    }>;
    toasts: IToastProps[];
    setToasts: Dispatch<SetStateAction<IToastProps[]>>;
    isFramePresent: boolean;
    setIsFramePresent: Dispatch<SetStateAction<boolean>>;
};

export declare function EmptyState({ children, className, heading, ...props }: IEmptyStateProps): JSX_2.Element;

export declare class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | Iterable<default_2.ReactNode> | JSX_2.Element | null | undefined;
}

export declare function ErrorTestComponent({ shouldThrow }: ErrorTestComponentProps): JSX_2.Element;

declare interface ErrorTestComponentProps {
    shouldThrow?: boolean;
}

export declare function ExceptionList({ items, className, gap }: IExceptionListProps): JSX_2.Element | null;

export declare function Frame({ children, sidebar, header, className }: IFrameProps): JSX_2.Element;

export declare const GAP: Record<number, string>;

export declare function Header(): JSX_2.Element;

export declare const Heading: default_2.MemoExoticComponent<({ as, children, className, variant, fontWeight, color, disabled, lineClamp, }: IHeadingProps) => JSX_2.Element>;

export declare interface IAction {
    label: string;
    target?: '_blank' | '_self' | '_parent' | undefined;
    url?: string;
    disabled?: boolean;
    loading?: boolean;
    icon?: IconType;
    variant?: VariantType;
    rel?: 'noreferrer';
    onAction?: () => void;
}

declare interface IActionVariant extends IAction {
    variant?: VariantType;
}

export declare interface IAnnotatedSectionProps {
    children: ReactNode;
    className?: string;
    title?: string;
    description?: string | ReactNode;
}

declare interface IBadgeProps {
    children?: default_2.ReactNode;
    icon?: IconType;
    className?: string;
    status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending';
    type?: 'incomplete' | 'halfComplete' | 'complete' | 'dashed';
}

declare interface IBannerProps {
    children?: default_2.ReactNode;
    as?: ElementType;
    icon?: IconType;
    className?: string;
    status?: 'default' | 'info' | 'warning' | 'critical' | 'success' | 'pending';
    appearance?: 'default' | 'card';
    title?: string;
    onDismiss?: () => void;
}

declare interface IBase {
    children: ReactNode;
    className?: string;
}

declare interface IBoxProps {
    as?: ElementType;
    children?: ReactNode;
    rounded?: RoundedType;
    shadow?: ShadowType | 'colored';
    sectionned?: boolean | string;
    disabled?: boolean;
    className?: string;
    [x: string]: ReactNode | string | boolean | undefined | object | unknown;
}

declare interface IBulkActions {
    label: string;
    onAction?: () => void;
}

declare interface IButtonProps {
    children?: default_2.ReactNode;
    className?: string;
    size?: 'medium' | 'large' | 'small' | 'slim' | 'none';
    variant?: VariantType | 'none';
    submit?: boolean;
    alignment?: 'center' | 'start' | 'end';
    rounded?: RoundedType;
    fullwidth?: boolean;
    outline?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: IconType;
    link?: boolean;
    url?: string;
    target?: '_blank' | '_self' | '_parent' | undefined;
    rel?: 'noreferrer' | undefined;
    onClick?: () => void;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-expanded'?: boolean;
    'aria-pressed'?: boolean;
    'aria-haspopup'?: boolean;
    role?: string;
    title?: string;
}

declare interface ICheckbox {
    className?: string;
    label?: string;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (value: boolean, e?: default_2.ChangeEvent<HTMLInputElement>) => void;
}

declare interface IChoiceListItem {
    id?: string;
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
}

declare interface IChoiceListProps {
    className?: string;
    name: string;
    items: IChoiceListItem[];
    defaultChecked?: IChoiceListItem;
    horizontal?: boolean;
    onChange?: (val: IChoiceListItem) => void;
}

export declare type IconType = any;

declare interface IDataReducer<T> {
    selectedItems: T[];
    select: boolean;
    isFramePresent: boolean;
    isSticky: {
        first: boolean;
        second: boolean;
        last: boolean;
    };
}

declare interface IEmptyStateProps {
    className?: string;
    heading?: string;
    actions?: IActionVariant[];
    thumb?: IconType;
    children?: ReactNode;
}

export declare interface IExceptionListItem {
    icon?: IconType;
    description: string;
}

declare interface IExceptionListProps {
    className?: string;
    items?: IExceptionListItem[];
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    message?: string;
}

declare interface IFilters {
    key: string;
    label: string;
    filter: default_2.ReactNode;
    shortcut?: boolean;
}

declare interface IFrameProps {
    children: ReactNode;
    sidebar?: ReactNode;
    header?: ReactNode;
    className?: string;
}

declare interface IHeadingProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
    className?: string;
    variant?: 'headingXl' | 'heading2xl' | 'heading3xl' | 'heading4xl' | 'heading5xl' | 'heading6xl' | 'heading7xl';
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
    color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';
    disabled?: boolean;
    lineClamp?: 1 | 2 | 3 | 4 | 5;
}

declare interface IHeadings {
    title: string;
    alignment?: 'start' | 'center' | 'end';
}

declare interface IIndexFiltersProps {
    className?: string;
    sortOptions?: default_2.ReactNode;
    filters?: IFilters[];
    onChange?: (value: boolean, e?: default_2.ChangeEvent<HTMLInputElement>) => void;
}

declare interface IItemProps {
    url: string;
    label: string;
    icon?: IconType;
    badge?: string | ReactNode;
    className?: string;
    disabled?: boolean;
    selected?: boolean;
}

declare interface IItemsProps extends IItemProps {
    subNavigationItems?: IItemProps[];
}

export declare interface ILayoutProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

declare interface IMediaCardProps {
    children?: default_2.ReactNode;
    className?: string;
    title?: string;
    url?: string;
    promotedAction?: IAction;
    primaryAction?: IAction[];
    secondaryActions?: IAction[];
    popoverActions?: IAction[];
}

declare interface IModalProps {
    children: default_2.ReactNode;
    show?: boolean;
    className?: string;
    title?: string;
    onClose?: () => void;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
    closeOnEscape?: boolean;
    closeOnOverlayClick?: boolean;
}

declare interface INavigationProps {
    children: default_2.ReactNode;
    minimized?: boolean;
    className?: string;
}

export declare const IndexFilters: ({ className, sortOptions, filters }: IIndexFiltersProps) => JSX_2.Element;

export declare function InlineError({ message, className }: {
    message?: string;
    className?: string;
}): JSX_2.Element | null;

declare type InputAttributeType = {
    size?: 'sm' | 'md' | 'lg';
    value?: string;
    onChange?: (value: string) => void;
    onClick?: (value?: unknown) => void;
    onBlur?: (value?: unknown) => void;
    className?: string;
    inputClassName?: string;
    name?: string;
    label?: string | ReactNode;
    fieldID?: string;
    labelAction?: {
        icon?: IconType;
        onClick?: (value?: unknown) => void;
        content?: string;
    };
    prefix?: string | IconType;
    suffix?: string | IconType;
    multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    helpText?: IExceptionListItem | string;
    error?: string;
    type?: HTMLInputTypeAttribute;
    'aria-describedby'?: string;
    'aria-invalid'?: boolean;
    'aria-required'?: boolean;
    'aria-readonly'?: boolean;
    'aria-placeholder'?: string;
    required?: boolean;
    readOnly?: boolean;
    autoComplete?: string;
};

declare type InputType = default_2.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export declare interface IPageProps {
    children: default_2.ReactNode;
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

declare interface IPopoverProps {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    items?: string;
    as?: ElementType;
    activator?: string | ReactNode;
}

declare interface IPortalProps {
    children: default_2.ReactNode;
}

export declare interface ISectionProps {
    children: ReactNode;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
    oneTwo?: boolean;
    oneThird?: boolean;
    oneFourth?: boolean;
}

declare interface ISectionProps_2 {
    items: IItemsProps[];
    title?: string;
}

declare interface ISkeletonBodyTextProps {
    className?: string;
    lines?: number;
    gap?: number;
}

declare interface ISkeletonBodyTextProps_2 {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    rounded?: RoundedType;
    width?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

declare interface ISpinnerProps {
    className?: string;
    size?: 'medium' | 'large' | 'small' | 'none';
}

export declare interface IStackProps {
    children: ReactNode;
    className?: string;
    spacing?: 'extraTight' | 'tight' | 'baseTight' | 'loose' | 'extraLoose' | 'none';
    alignment?: 'start' | 'center' | 'end';
    vertical?: boolean;
    wrap?: boolean;
    as?: ElementType;
}

declare interface ISubtitleProps {
    children?: ReactNode;
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
    color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';
    disabled?: boolean;
    lineClamp?: 1 | 2 | 3 | 4 | 5;
}

declare interface ITableProps extends IBase {
    children: default_2.ReactNode;
    className?: string;
    headings: IHeadings[];
    items?: unknown[];
    bulkActions?: IBulkActions[];
    promotedBulkActions?: IBulkActions[];
}

export declare type ITabsProps = {
    children?: default_2.ReactNode;
    className?: string;
    onChange?: (index: number, val: TabsProps) => void;
    tabs: TabsProps[];
    selected?: string | number | readonly string[] | undefined;
    filled?: boolean;
    canCreateTab?: boolean;
};

declare type ITextFieldProps = InputAttributeType & Omit<InputType, keyof InputAttributeType>;

declare interface ITextProps {
    as?: ElementType;
    children?: ReactNode;
    shadow?: 'base' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    className?: string;
    lineClamp?: 1 | 2 | 3 | 4 | 5;
    color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
    variant?: 'default' | 'headingXl' | 'heading2xl' | 'heading3xl' | 'heading4xl' | 'heading5xl' | 'heading6xl' | 'heading7xl' | 'bodyXS' | 'bodySm' | 'bodyMd' | 'bodyLg';
    [x: string]: unknown;
}

declare interface IThumbnailProps {
    className?: string;
    src?: string | IconType;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    fit?: 'cover' | 'contain';
}

declare interface ITitleProps {
    children?: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
    color?: 'info' | 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';
    disabled?: boolean;
    lineClamp?: 1 | 2 | 3 | 4 | 5;
}

export declare interface IToastProps {
    content: string | ReactNode;
    className?: string;
    classOverride?: string;
    id?: string | number;
    key?: string | number;
    type?: 'success' | 'error' | 'info' | 'warning' | 'default';
    duration?: number;
    onDismiss?: () => void;
    action?: IAction;
}

declare interface ITooltipProps {
    children: default_2.ReactNode;
    className?: string;
    content?: string | ReactNode;
    align?: 'left' | 'right' | 'center';
    down?: boolean;
    dark?: boolean;
}

declare interface ITransitionProps {
    children: ReactNode;
    duration?: 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | 1500 | 2000;
    type?: 'fade-in' | 'slide-up' | 'slide-down' | 'collapsible';
    timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
    className?: string;
    as?: ElementType;
    onClick?: () => void;
}

export declare const Layout: typeof MainLayout & {
    Section: typeof Section;
    AnnotatedSection: typeof AnnotatedSection;
};

declare function MainLayout({ children, className, as: Component }: ILayoutProps): JSX_2.Element;

declare function MainTable({ children, items, className, headings, bulkActions, promotedBulkActions, }: ITableProps): JSX_2.Element;

export declare function MediaCard({ children, className, title, url, promotedAction, popoverActions, primaryAction, }: IMediaCardProps): JSX_2.Element;

export declare const Modal: default_2.MemoExoticComponent<({ show, children, className, title, onClose, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, closeOnEscape, closeOnOverlayClick }: IModalProps) => JSX_2.Element | null>;

export declare const Navigation: default_2.NamedExoticComponent<INavigationProps> & {
    readonly type: ({ children, minimized, className }: INavigationProps) => JSX_2.Element;
} & {
    Section: default_2.MemoExoticComponent<({ items, title }: ISectionProps_2) => JSX_2.Element>;
    SectionFooter: default_2.MemoExoticComponent<({ children }: {
        children: ReactNode;
    }) => JSX_2.Element>;
};

export declare function Page({ children, className, title, backAction, subtitle, primaryAction, secondaryActions, actionGroups, fullWidth, }: IPageProps): JSX_2.Element;

export declare function Popover({ children, className, as: Component, activator, disabled, }: IPopoverProps): JSX_2.Element;

export declare function Portal({ children }: IPortalProps): default_2.ReactPortal;

declare interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    className?: string;
}

export declare function ProviderSirius({ children }: {
    children: default_2.ReactNode;
}): JSX_2.Element;

export declare const ROUNDED: Record<string, string>;

export declare type RoundedType = 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

declare function Row({ children, className, item }: {
    item: unknown;
} & IBase): JSX_2.Element;

export declare function Section({ children, className, primary, secondary, oneTwo, oneThird, oneFourth, }: ISectionProps): JSX_2.Element;

export declare const SHADOW: {
    [x: string]: string;
};

export declare type ShadowType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export declare const SIZE: Record<string, string>;

export declare function SkeletonBodyText({ lines, className, gap }: ISkeletonBodyTextProps): JSX_2.Element;

export declare function SkeletonDisplayText({ size, rounded, width, className, }: ISkeletonBodyTextProps_2): JSX_2.Element;

export declare function Spinner({ className, size }: ISpinnerProps): JSX_2.Element;

export declare function Stack({ children, className, vertical, spacing, alignment, wrap, as: Component, }: IStackProps): JSX_2.Element;

declare interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}

export declare function stringify(obj: object | [] | string | number | boolean | null | undefined | unknown): string;

export declare const Subtitle: default_2.MemoExoticComponent<({ children, className, size, fontWeight, color, disabled, lineClamp, }: ISubtitleProps) => JSX_2.Element>;

export declare const Table: typeof MainTable & {
    Row: typeof Row;
    Cell: typeof Cell;
};

export declare function Tabs({ tabs, className, canCreateTab, filled, selected, onChange }: ITabsProps): JSX_2.Element;

export declare type TabsProps = {
    label?: string | default_2.ReactNode;
    index?: number;
    onAction?: () => void;
    actions?: default_2.ReactNode;
};

declare const Text_2: default_2.MemoExoticComponent<({ as: Component, children, className, shadow, variant, fontWeight, color, disabled, lineClamp, }: ITextProps) => JSX_2.Element>;
export { Text_2 as Text }

export declare const TextField: default_2.MemoExoticComponent<({ value, placeholder, onChange, onClick, onBlur, error, helpText, type, multiline, className, prefix, suffix, inputClassName, label, fieldID, labelAction, size, "aria-describedby": ariaDescribedby, "aria-invalid": ariaInvalid, "aria-required": ariaRequired, "aria-readonly": ariaReadonly, "aria-placeholder": ariaPlaceholder, required, readOnly, autoComplete, ...props }: ITextFieldProps) => JSX_2.Element>;

export declare function Thumbnail({ className, alt, size, fit, ...props }: IThumbnailProps): JSX_2.Element;

export declare const Title: default_2.MemoExoticComponent<({ children, className, size, fontWeight, color, disabled, lineClamp, }: ITitleProps) => JSX_2.Element>;

export declare const Toast: default_2.MemoExoticComponent<({ content, className, classOverride, type, duration, onDismiss, action, }: IToastProps) => JSX_2.Element | null>;

export declare function Tooltip({ children, className, content, align, dark, down, }: ITooltipProps): JSX_2.Element;

export declare const Transition: ({ children, className, duration, as: Component, type, timing, onClick, }: ITransitionProps) => JSX_2.Element;

export declare function useErrorHandler(): (error: Error, errorInfo?: ErrorInfo) => void;

export declare function useToast(duration?: number): {
    toasts: IToastProps[];
    show: (toast: IToastProps) => void;
};

export declare type VariantType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'subdued' | 'dark' | 'default';

export declare function withErrorBoundary<P extends object>(Component: default_2.ComponentType<P>, errorBoundaryProps?: Omit<Props, 'children'>): (props: P) => JSX_2.Element;

export { }
