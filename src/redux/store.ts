import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basket.js";


export const store = configureStore( {
    reducer: {
        basket: basketReducer
    }
} );