interface Props {
    title?: string;
    subTitle?: string;
}

export const JumbotroneHeroText = ( { title, subTitle }: Props ) => {
    const placeholderTitle = 'Lorem ipsum, dolor sit amet consectetur';
    const placeholderSubTitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus dicta obcaecati vero vitae quas nulla magnam ut aperiam sunt.';

    return (
        <>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">{ title ? title : placeholderTitle }</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">{ subTitle ? subTitle : placeholderSubTitle }</p>
        </>
    );
};