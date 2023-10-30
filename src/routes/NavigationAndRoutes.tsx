import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/HomeView';
import { Navbar } from '../components/navbar/Navbar';
import { ShopView } from '../pages/ShopView';

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={ <Home /> } />
            <Route
              path="/shop"
              element={ <ShopView /> } />
            <Route
              path="/basket"
              element={ <h1>Basket</h1> } />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
};