import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/HomeView';
import { Navbar } from '../components/navbar/Navbar';
import { ShopView } from '../pages/ShopView';
import { ProductBasket } from '../pages/BasketView';
import { useAppDispatch, useAppSelector } from '../hooks/storeVariables';
import { useEffect, useState } from 'react';
import { updateTotal } from '../redux/features/basket';

export const Navigation = () => {
  const [ darkModeOn, setDarkModeOn ] = useState<boolean>( false );
  const dispatch = useAppDispatch();
  const { products } = useAppSelector( store => store.basket );

  useEffect( () => {
    dispatch( updateTotal() );
  }, [ products, dispatch ] );


  return (
    <>
      <BrowserRouter>
        <div className={ darkModeOn ? "dark" : "" }>
          <Navbar />
          <div className="absolute top-1 right-2">
            <button
              onClick={ () => setDarkModeOn( previousValue => !previousValue ) }>
              { !darkModeOn && <i className=" bg-white py-4 px-4 rounded-full fa-regular fa-moon"></i> }
              { darkModeOn && <i className=" bg-white py-4 px-4 rounded-full fa-solid fa-sun"></i> }
            </button>
          </div>


          <Routes>
            <Route
              path="/"
              element={ <Home /> } />
            <Route
              path="/shop"
              element={ <ShopView /> } />
            <Route
              path="/basket"
              element={ <ProductBasket /> } />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
};