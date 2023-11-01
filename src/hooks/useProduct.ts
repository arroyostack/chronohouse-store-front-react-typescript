import { useState } from "react";


export const useProduct = () => {
    const [ counter, setCounter ] = useState( 0 );

    const increaseBy = ( value: number ) => {
        setCounter( previousValue => Math.max( previousValue + value, 0 ) );
    };
    return {
        increaseBy,
        counter
    };
};
