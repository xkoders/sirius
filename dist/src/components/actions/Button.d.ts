/// <reference types="react" />
import { VariantType, IconType, RoundedType } from '../../types';
interface IButtonProps {
    children?: React.ReactNode;
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
}
export declare const Button: ({ children, onClick, className, submit, disabled, loading, outline, link, target, url, rel, rounded, alignment, fullwidth, variant, size, ...props }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map