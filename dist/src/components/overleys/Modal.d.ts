import React from 'react';
interface IModalProps {
    children: React.ReactNode;
    show?: boolean;
    className?: string;
    title?: string;
    onClose?: () => void;
}
export declare function Modal({ show, children, className, title, onClose }: IModalProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map