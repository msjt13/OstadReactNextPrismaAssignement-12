import Image from 'next/image';
import Section1 from "@/components/home/section_1";
import Section2 from "@/components/home/section_2";
import Blog from "@/components/home/blog";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-12">
            <section className="bg-white dark:bg-gray-900 my-2 w-full">
                <Section1/>
            </section>
            <section className="bg-white dark:bg-gray-900 my-2 w-full">
                <Blog/>
            </section>
            <section className="bg-white dark:bg-gray-900 my-2 w-full">
                <Section2/>
            </section>
        </main>
    );
}
