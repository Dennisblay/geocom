import React, {useState} from 'react';
import { NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };


    return (
        <nav className="bg-background border-border">
            <div className="max-w-screen-xl flex  justify-center flex-wrap items-center  mx-auto p-4">
                <div className="flex items-center justify-center space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex text-sm  rounded-full focus:ring focus:ring"
                        aria-expanded={isDropdownOpen}
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">Open user menu</span>
                    </button>
                    {isDropdownOpen && (
                        <div
                            className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900">Bonnie Green</span>
                                <span
                                    className="block text-sm text-gray-500 truncate ">name@flowbite.com</span>
                            </div>
                            <ul className="py-2">
                                <li>
                                    <NavLink to="#"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-background">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-background">
                                        Settings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-background ">
                                        Earnings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#"
                                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-background ">
                                        Sign out
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  ml-auto"
                        aria-controls="navbar-user"
                        aria-expanded={isNavbarCollapsed}
                        onClick={toggleNavbar}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavbarCollapsed ? 'block' : 'hidden'}`}
                    id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-border rounded-lg bg-backgound md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-backgound ">
                        <li>
                            <NavLink to="#"
                                     className="block py-2 px-3 text-foreground bg-ring rounded md:bg-transparent md:text-ring md:p-0 "
                                     aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#"
                                     className="block py-2 px-3 text-foreground rounded hover:bg-border md:hover:bg-transparent md:hover:text-ring md:p-0 ">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#"
                                     className="block py-2 px-3 text-foreground rounded hover:bg-border md:hover:bg-transparent md:hover:text-ring md:p-0 ">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#"
                                     className="block py-2 px-3 text-foreground rounded hover:bg-border md:hover:bg-transparent md:hover:text-ring md:p-0 ">
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#"
                                     className="block py-2 px-3 text-foreground rounded hover:bg-border md:hover:bg-transparent md:hover:text-ring md:p-0 ">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
