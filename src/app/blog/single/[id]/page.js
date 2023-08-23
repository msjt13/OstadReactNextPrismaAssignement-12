import Posts from "@/components/blog/posts";
import getSinglePost from "@/utils/getSinglePost";
import Link from "next/link";
import moment from "moment/moment";
import Image from "next/image";
import React from "react";

const Page = async ({params}) => {

    const id = params.id;
    console.log('id', id)

    const postDetails = await getSinglePost(id);
    const post = postDetails.postDetails;
    console.log('post', post);

    return (
        <main className="flex flex-col justify-between min-h-screen p-12">
            <section className="bg-white dark:bg-gray-900 my-2 py-8 px-4">
                <article key={post.id} className="p-6">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">{post.title}</h2>
                    <div className="text-gray-500">
                        <span className="text-sm float-right">
                            {moment(new Date(post.created_at)).fromNow()}
                        </span>
                    </div>
                    <Image
                        src={post.img}
                        alt={post.title}
                        className={'mx-auto mb-4 w-1/2 rounded'}
                        width='100'
                        height='50'/>
                    <p className="mb-5 text-lg leading-9 text-justify font-light text-gray-500 dark:text-gray-400">{post.content}</p>
                </article>
            </section>
        </main>
    );
};

export default Page;