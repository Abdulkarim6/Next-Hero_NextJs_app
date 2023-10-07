import loadBlogs from '@/utilts/loadBlogs';
import loadSingleBlog from '@/utilts/loadSingleBlog';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlog(params.blogID);

    return {
        title: title,
    }
}

// export const generateStaticParams = async () => {  //use for dynamic single data load staticly
//     const blogs = await loadBlogs();

//     return blogs.map(({ id }) => { //specifying what will be a dynamic page using id quantity
//         id
//     })
// }

const page = async ({ params }) => {

    const { id, title, body } = await loadSingleBlog(params.blogID);

    return (
        <div className='border-2 border-blue-500 m-4 p-2 rounded'>
            <h2 className='text-lg font-semibold'>{id} : {title}</h2>
            <p className='text-base font-medium'>Description: {body}</p>
            <Link href={`/blogs`}
            >
                <button className='text-white bg-blue-500 px-2 py-1 rounded mt-2'>Back to blogs</button>
            </Link>
        </div>
    );
};

export default page;