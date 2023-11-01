import { createContext } from 'react';
import noImage from '../../assets/no-image.jpg';

interface JumbotroneContextProps {
    children?: JSX.Element | JSX.Element[];
    image?: string;
}
export const JumbotroneContext = createContext( {} as JumbotroneContextProps );


export const Jumbotrone = ( { children, image }: JumbotroneContextProps ) => {
    return (
        <main>
            <section className="bg-white dark:bg-white rounded">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        { children }
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={ image ? image : noImage } alt="mockup" />
                    </div>
                </div>
            </section>
        </main>
    );
};
