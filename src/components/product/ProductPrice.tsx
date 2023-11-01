import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductPrice = ( { className }: { className?: string; } ) => {
    const { product } = useContext( ProductContext );

    // Here make color dynamic so 'on sale' class can be applied.
    return (

        <span className={ `text-3xl font-bold text-gray-900  ${className}` }>{ product?.price ? '$' + product.price : '$N/A' }</span>

    );
};