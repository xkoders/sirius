import { IconType } from '../../../../../../../../src/types';
export interface IExceptionListItem {
    icon?: IconType;
    description: string;
}
interface IExceptionListProps {
    className?: string;
    items?: IExceptionListItem[];
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    message?: string;
}
export declare function ExceptionList({ items, className, gap }: IExceptionListProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ExceptionList.d.ts.map