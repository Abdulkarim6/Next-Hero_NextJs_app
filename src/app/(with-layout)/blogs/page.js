import loadBlogs from '@/utilts/loadBlogs';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const blogs = await loadBlogs();

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
            {
                blogs.map(({ id, title }) =>
                    <div className='border-2 border-blue-500 m-4 p-2 rounded ' key={id}>
                        <h2 className='text-lg font-semibold'>{id}: {title}</h2>
                        <Link href={`/blogs/${id}`}
                        >
                            <button className='text-white bg-blue-500 px-2 py-1 rounded mt-2'>Details</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default page;