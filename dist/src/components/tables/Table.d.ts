import React, { ReactNode } from 'react';
interface IBase {
    children: ReactNode;
    className?: string;
}
interface IHeadings {
    title: string;
    alignment?: 'start' | 'center' | 'end';
}
interface IBulkActions {
    label: string;
    onAction?: () => void;
}
interface ITableProps extends IBase {
    children: React.ReactNode;
    className?: string;
    headings: IHeadings[];
    items?: any[];
    bulkActions?: IBulkActions[];
    promotedBulkActions?: IBulkActions[];
}
declare function MainTable({ children, items, className, headings, bulkActions, promotedBulkActions, }: ITableProps): import("react/jsx-runtime").JSX.Element;
declare function Row({ children, className, item }: {
    item: any;
} & IBase): import("react/jsx-runtime").JSX.Element;
declare function Cell({ children, className }: IBase): import("react/jsx-runtime").JSX.Element;
export declare const Table: typeof MainTable & {
    Row: typeof Row;
    Cell: typeof Cell;
};
export {};
//# sourceMappingURL=Table.d.ts.map