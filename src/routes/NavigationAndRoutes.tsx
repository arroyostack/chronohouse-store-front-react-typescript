import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Navbar } from '../components/navbar/Navbar';

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={ <Home /> } />
            <Route
              path="/basket"
              element={ <h1>Basket</h1> } />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
};