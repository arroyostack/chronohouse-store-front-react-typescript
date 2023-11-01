import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
    className?: string;
    textSize?: string;
}

export const ProductTitle = ( { className, textSize }: Props ) => {
    const { product } = useContext( ProductContext );

    const titleMaxLength: number = 40;

    const productTitle: string | undefined = product?.title ? product.title : '';

    const shortenedTitle = productTitle?.slice( 0, titleMaxLength ) + ( productTitle.length > titleMaxLength ? "..." : "" );

    return (
        <a href="" className={ `${className}` } >
            <p className={ `${textSize ? textSize : 'text-xl'} font-semibold tracking-tight text-gray-900  ${className}` }>{ product?.title ? shortenedTitle : 'No title found' }</p>
        </a>
    );
};

