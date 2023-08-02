interface IChoiceListItem {
    id?: string;
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
}
interface IChoiceListProps {
    className?: string;
    name: string;
    items: IChoiceListItem[];
    defaultChecked?: IChoiceListItem;
    horizontal?: boolean;
    onChange?: (val: any) => void;
}
export declare function ChoiceList({ className, name, horizontal, items, defaultChecked, onChange, }: IChoiceListProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ChoiceList.d.ts.map