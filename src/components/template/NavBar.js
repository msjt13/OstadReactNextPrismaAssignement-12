'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();

    console.log('pathname', pathname)

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
                                        href="/"
                                        className={'block py-2 pl-3 pr-4 border-b border-gray-100 bg-transparent p-0 hover:bg-gray-50 hover:bg-transparent hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700' + (pathname === '/' ? ' bg-primary-100 text-white' : '  text-gray-400')}
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={'block py-2 pl-3 pr-4 border-b border-gray-100 bg-transparent p-0 hover:bg-gray-50 hover:bg-transparent hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700' + (pathname === '/about' ? ' bg-primary-100 text-white' : ' text-gray-400')}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className={'block py-2 pl-3 pr-4 border-b border-gray-100 bg-transparent p-0 hover:bg-gray-50 hover:bg-transparent hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700' + (pathname === '/blog' ? ' bg-primary-100 text-white' : ' text-gray-400')}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className={'block py-2 pl-3 pr-4 border-b border-gray-100 bg-transparent p-0 hover:bg-gray-50 hover:bg-transparent hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent dark:border-gray-700' + (pathname === '/contact' ? ' bg-primary-100 text-white' : ' text-gray-400')}
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
