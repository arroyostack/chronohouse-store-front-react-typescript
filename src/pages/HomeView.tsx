import heroWatch from '../assets/hero-watch.png';
import { defineConfig } from 'vite';
import { ShopView } from './ShopView';

export const Home = () => {
    return (
        <div className="">
            <div className="project-container flex flex-col gap-16 bg-amber-50 dark:bg-slate-700 min-h-screen py-6 px-3 md:px-10 ">
                <main className="">
                    <section className=" project-transparent">
                        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Discover New Collections
                                </a>
                            </div>
                            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <img src={ heroWatch } alt="mockup" />
                            </div>
                        </div>
                    </section>


                </main>
                <footer>

                </footer>
            </div>

        </div>
    );
};
