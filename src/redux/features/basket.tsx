import { createSlice } from "@reduxjs/toolkit";


interface Product {
    id: number;
    title?: string,
    price: number,
    image: string,
    amount: number;
    rating?: {
        rate?: number;
        count: number;
    };
}

interface InitialStateProps {
    products: Product[],
    amount: number,
    total: number;
}

let initialState: InitialStateProps = {
    products: [],
    amount: 0,
    total: 0
};


const localStorageBasket = localStorage.getItem( "basketState" );
if ( localStorageBasket ) {
    initialState = JSON.parse( localStorageBasket );
}

const basketSlice = createSlice( {
    name: "basket",
    initialState,
    reducers: {
        addToBasket: ( state, { payload } ) => {
            const item = state.products.some( product => product.title === payload.title );
            if ( item ) return;

            payload.amount = 1;

            state.products = [ ...state.products, payload ];
            state.amount = state.amount + 1;

            localStorage.setItem( "basketState", JSON.stringify( state ) );
        },
        increaseAmount: ( state, payload ) => {
            const item = state.products.find( product => product.title === payload.payload.title );

            if ( item ) {
                item.amount = item.amount + 1;
                console.log( payload.payload.title );
            }

            localStorage.setItem( "basketState", JSON.stringify( state ) );

        },
        decreaseAmount: ( state, payload ) => {
            const item = state.products.find( product => product.title === payload.payload.title );

            if ( item ) {
                item.amount = Math.max( item.amount - 1, 0 );
                console.log( payload.payload.ntitle );
            }

            localStorage.setItem( "basketState", JSON.stringify( state ) );

        },
        removeItem: ( state, payload ) => {
            state.products = state.products.filter( product => product.title !== payload.payload.title );

            localStorage.setItem( "basketState", JSON.stringify( state ) );
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

            localStorage.setItem( "basketState", JSON.stringify( state ) );
        },
        resetBasket: ( state ) => {
            state.products = [];
            state.total = 0;
            state.amount = 0;

            localStorage.removeItem( "basketState" );

        }


    }
} );

export const { increaseAmount, decreaseAmount, removeItem, updateTotal, resetBasket } = basketSlice.actions;

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;