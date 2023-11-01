import { useEffect, useState } from "react";

import { ProductActionButton, ProductImage, ProductCard, ProductFooter, ProductPrice, ProductRating, ProductTitle } from '../components/product';

import { getProducts } from "../components/helpers/getProducts";
import { ViewContainer } from "../components/ViewContainer";
import { PageHeading } from "../components/pageHeading";


export const ShopView = () => {
  const [ products, setProducts ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState<boolean>( false );
  const [ hasError, setHasError ] = useState<boolean>( false );

  const getProductData: () => Promise<void> = async () => {
    const dataFromLocalStorage = localStorage.getItem( "data" );

    if ( dataFromLocalStorage ) {
      const data = JSON.parse( dataFromLocalStorage );
      setProducts( data );
      return;
    }
    try {
      setIsLoading( true );
      const data = await getProducts();
      setProducts( data );
    } catch ( error ) {
      setHasError( true );
      setProducts( [] );
    } finally {
      setIsLoading( false );
    }
  };

  useEffect( () => {
    getProductData();
  }, [] );

  return (
    <>

      { isLoading && <h1>Loading...</h1> }
      { hasError && <h1>There was an error while trying to fetch products.</h1> }

      <ViewContainer>
        <>
          <PageHeading text="ChronoHouse Shop" />
          {
            products.length > 0 &&

            <ul className="flex flex-wrap justify-between gap-4">
              {
                products.map( product => (
                  <li key={ Math.random() * 100000000 }>
                    <ProductCard product={ product }>
                      <ProductImage />
                      <ProductTitle />
                      <ProductRating />
                      <ProductFooter>
                        <ProductPrice />
                        <ProductActionButton />
                      </ProductFooter>
                    </ProductCard>
                  </li>
                ) )
              }
            </ul>
          }
        </>

      </ViewContainer>




    </>
  );
};
