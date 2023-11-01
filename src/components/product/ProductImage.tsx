import { useContext } from 'react';
import noImage from '../../assets/no-image.jpg';
import { ProductContext } from './ProductCard';

interface Props {
    image?: string;
    className?: string;

}

export const ProductImage = ( { image, className }: Props ): JSX.Element => {
    const { product } = useContext( ProductContext );

    let imageToShow;

    if ( image ) {
        imageToShow = image;
    } else if ( product?.image ) {
        imageToShow = product?.image;
    } else {
        imageToShow = noImage;
    }

    return (
        <div className={ `p-3 rounded ${className}` } >
            <img className=" h-48 max-h-full min-h-full" src={ imageToShow } alt="product image" />
        </div>
    );
};