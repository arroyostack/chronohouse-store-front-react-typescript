import { useDispatch } from "react-redux";

import { addToBasket } from "../../redux/features/basket";


import { useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductActionButton = ( { text }: { text?: string; } ) => {
    const { product } = useContext( ProductContext );

    const dispatch = useDispatch();


    return (
        <div className="flex items-center justify-between">
            <a
                onClick={ () => dispatch( addToBasket( product ) ) }
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{ text ? text : 'Add to cart' }</a>
        </div>
    );
};