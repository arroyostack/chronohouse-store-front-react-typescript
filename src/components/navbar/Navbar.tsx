import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeVariables";


export const Navbar = () => {
    const amount = useAppSelector( ( store ) => store.basket.amount );

    return (
        <nav >
            <ul className="font-sans flex justify-center gap-2 py-4 bg-neutral-200 text-slate-500 dark:bg-slate-900 dark:text-slate-300">
                <li>
                    <NavLink
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/basket">Basket
                        <span className="text-xs aligt-top bg-red-500 
                text-white rounded-full px-2 py-1 mx-1">{ amount }</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
