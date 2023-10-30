import { useEffect, useState } from "react";
import { ProductActionButton } from "../components/product/ProductActionButton";
import { ProductCard } from "../components/product/ProductCard";
import { ProductFooter } from "../components/product/ProductFooter";
import { ProductImage } from "../components/product/ProductImage";
import { ProductPrice } from "../components/product/ProductPrice";
import { ProductRating } from "../components/product/ProductRating";
import { ProductTitle } from "../components/product/ProductTitle";


const getProducts = async () => {
  const requestOptions = {
    method: 'GET'
  };

  const response = await fetch( "https://fakestoreapi.com/products/category/electronics", requestOptions );
  const data = await response.json();

  return data;
};


export const ShopView = () => {
  const [ products, setProducts ] = useState( [] );

  useEffect( () => {
    getProducts()
      .then( data => setProducts( data ) );
  }, [] );
  return (
    <>
      <div className="project-container bg-amber-50 dark:bg-slate-700 min-h-screen py-6 px-3 md:px-10">
        {
          products.length > 0 &&


          <ul className="flex flex-wrap justify-around gap-4">
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
      </div>

    </>
  );
};
