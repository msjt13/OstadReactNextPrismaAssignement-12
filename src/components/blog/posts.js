import React from 'react';
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import getAllCategories from "@/utils/getAllCategories";
import getAllPosts from "@/utils/getAllPosts";

const Posts = async (params) => {

    const category_id = parseInt(params.category_id) || 1;
    console.log('category_id', category_id)
    const categories = await getAllCategories();
    const posts = await getAllPosts(category_id);
    const category_name = categories.find(category => category.id === category_id).name;

    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-12">
            <section className="bg-white dark:bg-gray-900 my-2 py-8 px-4">
                <div className="py-4 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{category_name} Posts</h2>
                    <p className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Lorem The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="max-w-md sm:max-w-screen-lg md:max-w-screen-xl lg:w-full mx-auto bg-white shadow-lg my-4 min-w-0 dark:bg-slate-800 border-2 rounded-xl dark:highlight-white/5">
                    <div className="overflow-x-auto flex my-2">
                        {categories.map((category, index) => {
                            return (
                                <div className="flex-none my-2 mx-2 first:ml-6 last:mr-6" key={index}>
                                    <div className={'active:bg-blue-600 flex flex-col items-center justify-center gap-8 py-2 px-2 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out' + (category_id === category.id ? ' bg-blue-600' : ' bg-gray-100')}>
                                        <Link href={'/blog/category/' + category.id}>
                                            <strong className={'text-slate-900 text-xl font-medium py-2 px-8 ' + (category_id === category.id ? 'dark:text-slate-100' : 'dark:text-slate-600')}>{category.name}</strong>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {posts.map((post, index) => {
                        return (
                            <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    {category_name}
                                </span>
                                    <span className="text-sm">
                                    {moment(new Date(post.created_at)).fromNow()}
                                </span>
                                </div>
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    className={'mb-4 w-full rounded'}
                                    width='100'
                                    height='50'/>
                                <Link href={'/blog/single/' + post.id}>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-800">{post.title}</h2>
                                </Link>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400t">{post.short}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    );
};

export default Posts;