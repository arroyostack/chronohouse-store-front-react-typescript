import { WaitingSpinner } from './WaitingSpinner';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/storeVariables';
import { resetBasket } from '../redux/features/basket';
import { Link } from 'react-router-dom';

export const ModalComponent = () => {
    const [ paymentFinished, setPaymentFinished ] = useState( false );

    const dispatch = useAppDispatch();

    useEffect( () => {
        const paymentInterval = setTimeout( () => {
            dispatch( resetBasket() );
            setPaymentFinished( true );
        }, 3000 );
        return () => {
            clearInterval( paymentInterval );
        };
    }, [] );

    return (
        <div className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Payment
                    </h3>

                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-center">
                        { paymentFinished &&
                            <h3 className="text-green-400 leading-relaxed  dark:text-green-400">Hurray!. Your successfully purchased your products.</h3> }

                        { !paymentFinished &&
                            <WaitingSpinner />

                        }

                    </div>

                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Link
                        to="/shop"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to shop</Link>

                </div>
            </div>
        </div>

    );
};
