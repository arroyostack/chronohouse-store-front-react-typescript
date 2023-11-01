import { useDispatch } from "react-redux";



import { increaseAmount, removeItem, decreaseAmount } from "../../redux/features/basket";
import { useAppDispatch } from "../../hooks/storeVariables";
import { Product } from "../../intefaces/interfaces";

export interface BasketProduct {
    id: number;
    title?: string,
    price?: number,
    image?: string,
    amount?: number | undefined;
    rating?: {
        rate?: number;
        count: number;
    };
}

interface Props {
    className?: string;
    product: Product;
}

export const ProductButtons = ( { className, product }: Props, ) => {
    const { amount, title } = product;

    const dispatch = useAppDispatch();

    return (
        <div className={ `${className}` }>
            <div className="flex">
                <button
                    onClick={ () => {
                        if ( amount === 1 ) {
                            dispatch( removeItem( { title } ) );
                        }
                        dispatch( decreaseAmount( { title } ) );
                    } }
                    className="text-white bg-blue-700 dark:bg-slate-200 dark:text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    -
                </button>
                <p className="px-2 ">{ amount }</p>
                <button
                    onClick={ () => dispatch( increaseAmount( { title } ) ) }
                    className="text-white bg-blue-700 dark:bg-slate-200 dark:text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    +
                </button>

            </div>
        </div>
    );
};