import getNewPosts from "@/utils/getNewPosts";
import moment from "moment";
import Image from "next/image";
import getAllCategories from "@/utils/getAllCategories";
import Link from "next/link";

const Blog = async () => {
    const categories = await getAllCategories();
    const posts = await getNewPosts();
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-12 lg:px-8">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">New Blog Posts</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-4">
                {posts.map((post, index) => {
                    return (
                        <article key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <Link href={ '/blog/category/' + post.category_id }>
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    {categories.find(category => category.id === post.category_id).name}
                                </span>
                                </Link>
                                <span className="text-sm">
                                    {moment(new Date(post.created_at)).fromNow()}
                                </span>
                            </div>
                            <Image src={post.img} alt={post.title} className={'mb-4 w-full rounded'} width='100' height='50'/>
                            <Link href={'/blog/single/' + post.id}>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-800">{post.title}</h2>
                            </Link>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400t">{post.short}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};

export default Blog;