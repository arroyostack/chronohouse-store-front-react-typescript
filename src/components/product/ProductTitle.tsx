import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
    className?: string;


}

export const ProductTitle = ( { className }: Props ) => {
    const { product } = useContext( ProductContext );

    const titleMaxLength: number = 40;

    const productTitle: string | undefined = product?.title ? product.title : '';

    const shortenedTitle = productTitle?.slice( 0, titleMaxLength ) + ( productTitle.length > titleMaxLength ? "..." : "" );

    return (
        <a href="#" className={ `${className}` } >
            <h5 className={ `text-xl font-semibold tracking-tight text-gray-900 dark:text-white ${className}` }>{ product?.title ? shortenedTitle : 'No title found' }</h5>
        </a>
    );
};