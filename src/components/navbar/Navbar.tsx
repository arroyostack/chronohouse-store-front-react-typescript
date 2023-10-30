import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <ul>
                <li>
                    <NavLink
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/basket">Basket</NavLink>
                </li>
            </ul>
        </nav>
    );
};
