import Posts from "@/components/blog/posts";

const Page = ({params}) => {

    const id = params.id;
    console.log('id', id)

    return (
        <Posts category_id={id}/>
    );
};

export default Page;