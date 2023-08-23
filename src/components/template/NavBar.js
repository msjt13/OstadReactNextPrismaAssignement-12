import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <main>
            <header>
                <nav className="py-2.5 bg-white border-gray-200 px-6 dark:bg-gray-800">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                STB
                            </span>
                        </Link>
                        <div className="flex items-center order-2">
                            <Link
                                href="#"
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                                Log in
                            </Link>
                            <Link
                                href="#"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="items-center justify-between flex w-auto order-1">
                            <ul className="flex font-medium flex-row space-x-8 mt-0">
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 bg-transparent text-primary-700 p-0 dark:text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-primary-700 p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-primary-700 p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:bg-transparent border-0 hover:text-primary-700 p-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </main>
    );
};

export default NavBar;
