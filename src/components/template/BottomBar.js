import React from 'react';
import Link from "next/link";

const BottomBar = () => {
    return (
        <main>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto text-center">
                    <Link
                        href="#"
                        className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        STB
                    </Link>
                    <p className="my-6 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolorum.
                    </p>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">
                                Premium
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                                Campaigns
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2021-2023{' '}
                        <Link href="#" className="hover:underline">
                        STB
                    </Link>
                    . All Rights Reserved.
                </span>
                </div>
            </footer>
        </main>
    );
};

export default BottomBar;
