import { IconType } from '../../../../../../../../src/types';
interface IThumbnailProps {
    className?: string;
    src?: string | IconType;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    fit?: 'cover' | 'contain';
}
export declare function Thumbnail({ className, alt, size, fit, ...props }: IThumbnailProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Thumbnail.d.ts.map