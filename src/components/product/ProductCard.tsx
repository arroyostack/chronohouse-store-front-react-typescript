import { ReactElement, createContext } from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string;
}

interface ProductContextProps {
    product?: Product;
}

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export const ProductCard = ( { product, children }: ProductCardProps ) => {
    return (
        <>
            <Provider value={ {
                product
            } }>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-5 pb-5">
                        { children }
                    </div>
                </div>
            </Provider>

        </>
    );
};
