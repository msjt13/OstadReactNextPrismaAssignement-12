import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <main>
            <header>
                <nav className="py-2.5 bg-white border-gray-200 lg:px-6 dark:bg-gray-800">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                STB
                            </span>
                        </Link>
                    </div>
                </nav>
            </header>
        </main>
    );
};

export default NavBar;
