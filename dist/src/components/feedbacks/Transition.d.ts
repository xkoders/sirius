import { ElementType, ReactNode } from 'react';
interface ITransitionProps {
    children: ReactNode;
    duration?: 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | 1500 | 2000;
    type?: 'fade-in' | 'slide-up' | 'slide-down' | 'collapsible';
    timing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
    className?: string;
    as?: ElementType;
}
export declare const Transition: ({ children, className, duration, as: Component, type, timing, }: ITransitionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Transition.d.ts.map