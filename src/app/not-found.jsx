import Link from 'next/link';
import React from 'react';

const NotFount = () => {
    return (
        <div className='h-screen bg-linear-to-br from-purple-300 via-pink-200 to-orange-200 flex items-center justify-center px-4'>
            <div className='rounded-2xl bg-white/70 px-8 py-10 text-center shadow-xl backdrop-blur-sm'>
                <h1 className='mb-3 text-5xl font-extrabold text-gray-800'>404</h1>
                <p className='text-2xl font-semibold text-gray-600'>Sorry, JaneMan page not found</p>
                <Link href="/" className='mt-6 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFount;