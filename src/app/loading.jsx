import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4'>
            <div className='w-full max-w-sm rounded-2xl border border-base-300/60 bg-base-100/80 backdrop-blur shadow-xl p-8 text-center'>
                <div className='mx-auto mb-5 h-14 w-14 rounded-full border-4 border-base-300 border-t-primary animate-spin' />
                <h2 className='text-2xl font-bold tracking-tight'>Loading</h2>
                <p className='mt-2 text-sm text-base-content/70'>
                    Please wait while we prepare your page...
                </p>
                <div className='mt-4 flex items-center justify-center gap-1'>
                    <span className='h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]' />
                    <span className='h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]' />
                    <span className='h-2 w-2 rounded-full bg-primary animate-bounce' />
                </div>
            </div>
        </div>
    );
};

export default Loading;