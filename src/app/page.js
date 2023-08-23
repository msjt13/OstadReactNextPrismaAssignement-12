import Image from 'next/image';
import Section1 from "@/components/home/section_1";
import Section2 from "@/components/home/section_2";
import Blog from "@/components/home/blog";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <h1 className="text-6xl font-bold text-center">Home</h1>
            <section>
                <Section1/>
            </section>
            <section>
                <Section2/>
            </section>
            <section>
                <Blog/>
            </section>
        </main>
    );
}
