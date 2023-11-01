
export const PageHeading = ( { text }: { text?: string; } ) => {
    return (
        <>
            <div></div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{ text ? text : 'Lorem Ipsum' }</h1>

        </>
    );
};
