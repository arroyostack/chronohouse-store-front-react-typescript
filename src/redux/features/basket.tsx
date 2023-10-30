import { createSlice } from "@reduxjs/toolkit";


interface Product {
    name: string,
    price: number,
    image: string,
    amount: number;
}

interface InitialStateProps {
    products: Product[],
    amount: number,
    total: number;
}

const initialState: InitialStateProps = {
    products: [],
    amount: 0,
    total: 0
};

const basketSlice = createSlice( {
    name: "basket",
    initialState,
    reducers: {
        addToBasket: ( state, { payload } ) => {
            const item = state.products.some( product => product.name === payload.title );
            if ( item ) return;

            state.products = [ ...state.products, payload ];
            state.amount = state.amount + 1;

            console.log( "🚀 ~ file: basket.js:21 ~ state.products:", state.products );
        },
        increaseAmount: ( state, payload ) => {
            const item = state.products.find( product => product.name === payload.payload.name );
            if ( item ) {
                item.amount = item.amount + 1;
                console.log( payload.payload.name );
            }

        },
        decreaseAmount: ( state, payload ) => {
            const item = state.products.find( product => product.name === payload.payload.name );

            if ( item ) {
                item.amount = Math.max( item.amount - 1, 0 );
                console.log( payload.payload.name );
            }

        },
        removeItem: ( state, payload ) => {
            state.products = state.products.filter( product => product.name !== payload.payload.name );
        },
        updateTotal: ( state ) => {
            let amount = 0;
            let total = 0;
            state.products.forEach( product => {
                amount += product.amount;
                total += product.amount * product.price;
            } );
            state.amount = amount;
            state.total = total;
        }
    }
} );

export const { increaseAmount, decreaseAmount, removeItem, updateTotal } = basketSlice.actions;

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;