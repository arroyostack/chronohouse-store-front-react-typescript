import { useState } from 'react';

import { useAppSelector } from "../hooks/storeVariables";

import { ProductButtons, ProductCard, ProductFooter, ProductPrice, ProductTitle, ProductImage } from '../components/product';

import { ViewContainer } from "../components/ViewContainer";
import { CheckOutDashboard } from '../components/checkout/CheckOutDashboard';
import { TotalAmount } from '../components/checkout/TotalAmount';
import { ModalComponent } from '../components/ModalComponent';
import { PageHeading } from '../components/PageHeading';

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string;
}

export const ProductBasket = () => {
    const { products, total } = useAppSelector( store => store.basket );
    const [ modalShouldShow, setmodalShouldShow ] = useState( false );

    const handlePurchaseAction = () => {
        setmodalShouldShow( true );
    };


    console.log( "🚀 ~ file: BasketView.tsx:15 ~ ProductBasket ~ products:", products );
    return (
        <>

            { modalShouldShow && <ModalComponent /> }

            <ViewContainer>
                <>
                    { total <= 0 ? (
                        <>
                            <PageHeading text="You have no items in your basket." />
                        </>
                    ) : ( <></> ) }

                    <PageHeading text="Your Basket" />
                    <div className="flex justify-around flex-wrap ">

                        <ul>
                            {

                                products.map( ( product ) => (
                                    <li key={ String( new Date().getTime ) } >

                                        <ProductCard product={ product } className="">
                                            <ProductImage />
                                            <ProductTitle />
                                            <div>

                                                <ProductFooter>
                                                    <ProductPrice />
                                                    <ProductButtons product={ product } />
                                                </ProductFooter>
                                            </div>
                                        </ProductCard>

                                    </li>
                                ) )
                            }
                        </ul>

                        <CheckOutDashboard>
                            <>
                                {
                                    products.map( ( product ) => (
                                        <li key={ String( new Date().getTime ) }>

                                            <ProductCard product={ product } className="">

                                                <ProductTitle />
                                                <div>

                                                    <ProductFooter>
                                                        <ProductPrice />
                                                        <ProductButtons product={ product } />
                                                    </ProductFooter>
                                                </div>
                                            </ProductCard>

                                        </li>
                                    ) )
                                }
                                <TotalAmount />
                                <button
                                    onClick={ handlePurchaseAction }
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Purchase</button>
                            </>
                        </CheckOutDashboard>

                    </div>
                </>

            </ViewContainer>

        </>
    );
};

