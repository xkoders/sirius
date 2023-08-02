/// <reference types="react" />
interface ICheckbox {
    className?: string;
    label?: string;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (value: boolean, e?: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: ({ indeterminate, label, disabled, name, value, onChange, checked, className, }: ICheckbox) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Checkbox.d.ts.map