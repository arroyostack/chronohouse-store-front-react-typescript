import { ReactElement } from "react";

interface ProductFooterProps {
    children: ReactElement | ReactElement[];
    className?: string;
}

export const ProductFooter = ( { children, className }: ProductFooterProps ) => {
    return (
        <div className={ `flex items-center justify-between ${className}` }>
            { children }
        </div>
    );
};