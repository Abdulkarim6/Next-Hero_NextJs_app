import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='text-2xl font-semibold text-center'>
           <div className='text-2xl font-semibold text-red-500'>
           <h2>Not Found page</h2>
            <p>Could not find requested resource</p>
           </div>
            <Link href="/">Return-Home-page</Link>
        </div>
    )
}

export default NotFound;