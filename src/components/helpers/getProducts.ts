import { Product } from "../product/ProductCard";

export const getProducts: () => Promise<any> = async () => {
    try {
        const requestOptions = {
            method: 'GET'
        };

        const response = await fetch( "https://fakestoreapi.com/products/category/electronics", requestOptions );
        const data: Product[] = await response.json();

        localStorage.setItem( "data", JSON.stringify( data ) );

        return data;

    } catch ( error ) {
        throw new Error( 'Error while fetching' );
    }
};