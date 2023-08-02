/// <reference types="react" />
interface IFilters {
    key: string;
    label: string;
    filter: React.ReactNode;
    shortcut?: Boolean;
}
interface IIndexFiltersProps {
    className?: string;
    sortOptions?: React.ReactNode;
    filters?: IFilters[];
    onChange?: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const IndexFilters: ({ onChange, className, sortOptions, filters }: IIndexFiltersProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=IndexFilters.d.ts.map