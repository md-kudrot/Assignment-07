import React from 'react';

const Timeline = () => {
    return (
        <div className='bg-base-200'>
            <div className="container mx-auto w-[60%] py-10  h-screen flex flex-col">
                <h1 className='py-2 text-xl font-semibold'>Timeline</h1>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn ">Filter timeline ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 mt-4 overflow-y-auto flex-1  pr-2">
                    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
                        <p className='text-2xl'>🤝</p>
                        <div className="">
                            <h2 className='text-lg '><b>Meetup</b> <span className='text-[#64748B]'>with Activity</span></h2>
                            <p className='text-gray-600'>March 29, 2026</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Timeline;