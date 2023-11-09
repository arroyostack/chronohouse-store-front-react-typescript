import {  ReactElement, createContext } from 'react';

export interface Product {
    id: number;
    title?: string,
    price?: number,
    image?: string,
    amount?: number;
    rating?: {
        rate?: number;
        count: number;
    };
}

interface ProductContextProps {
    product?: Product | undefined;
}

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export const ProductCard = ( { product, children, className }: ProductCardProps ) => {
    return (
        <>
            <Provider value={ {
                product
            } }>
                <div 
                style={{maxWidth: "20rem"}}
                className={ `mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start dark:bg-white ${className}` }>
                    <div className="px-5 pb-5">
                        { children }
                    </div>
                </div>
            </Provider>

        </>
    );
};
