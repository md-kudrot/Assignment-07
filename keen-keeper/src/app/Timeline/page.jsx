"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';

const Timeline = () => {
    const { btnData } = useContext(TimeLineContext);
    console.log("hey i am form Timeline", btnData);
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
                    {
                        btnData.map((data, index) => (<div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
                            <p className='text-2xl'>{data.logo}</p>
                            <div className="">
                                <h2 className='text-lg '><b>Meetup</b> <span className='text-[#64748B]'>with {data.name}</span></h2>
                                <p className='text-gray-600'>{data.next_due_date}</p>
                            </div>
                        </div>))
                    }


                </div>
            </div>
        </div>
    );
};

export default Timeline;