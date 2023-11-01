import { useAppSelector } from '../../hooks/storeVariables';

export const TotalAmount = ( { text }: { text?: string; } ) => {
    const { total } = useAppSelector( store => store.basket );

    return (
        <>
            <p className="text-gray-400">{ text ? text : 'Total' }</p>
            <p className="text-green-600 text-xl">${ total }</p>

        </>
    );
};
