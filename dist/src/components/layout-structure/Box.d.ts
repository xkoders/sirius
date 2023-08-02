import { RoundedType, ShadowType } from '../../../../../../../../src/types';
import { ElementType, ReactNode } from 'react';
interface IBoxProps {
    as?: ElementType;
    children?: ReactNode;
    rounded?: RoundedType;
    shadow?: ShadowType | 'colored';
    sectionned?: boolean | string;
    disabled?: boolean;
    className?: string;
    [x: string]: any;
}
export declare function Box({ as, children, rounded, shadow, className, sectionned, ...rest }: IBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Box.d.ts.map