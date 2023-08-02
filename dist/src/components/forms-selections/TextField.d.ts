import { IconType } from '../../../../../../../../src/types';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { IExceptionListItem } from '../feedbacks';
type InputType = React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
type InputAttributeType = {
    size?: 'sm' | 'md' | 'lg';
    value?: string;
    onChange?: (value: string) => void;
    onClick?: (value: any) => void;
    onBlur?: (value: any) => void;
    className?: string;
    inputClassName?: string;
    name?: string;
    label?: string | ReactNode;
    fieldID?: string;
    labelAction?: {
        icon?: IconType;
        onClick?: (value?: any) => void;
        content?: string;
    };
    prefix?: string | IconType;
    suffix?: string | IconType;
    multiline?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    helpText?: IExceptionListItem | string;
    error?: string;
    type?: HTMLInputTypeAttribute;
};
type ITextFieldProps = InputAttributeType & Omit<InputType, keyof InputAttributeType>;
export declare function TextField({ value, placeholder, onChange, onClick, onBlur, error, helpText, type, multiline, className, prefix, suffix, inputClassName, label, fieldID, labelAction, size, ...props }: ITextFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextField.d.ts.map