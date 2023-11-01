

export const CheckOutDashboard = ( { children }: { children: JSX.Element | JSX.Element[]; } ) => {
    return (
        <div className="order-1">
            <div className="flex-auto mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 ">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Complete your order by providing your payment details.</p>
                <div className="flex flex-col gap-2 py-3">
                    { children }
                </div>
            </div>
        </div>
    );
};
