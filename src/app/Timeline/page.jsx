"use client"
import FilterCallBtn from '@/components/filterBtn/FilterCallBtn';
import FilterVideoBtn from '@/components/filterBtn/FilterVideoBtn';
import FilterMessageBtn from '@/components/filterBtn/FilterMessageBtn';
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';
import AllFilterButton from '@/components/filterBtn/AllFilterButton';

const Timeline = () => {
    const { btnData, sortType } = useContext(TimeLineContext);
    // console.log("this is sort type", sortType);

    let filteredData = btnData;

    if (sortType === "call") {
        filteredData = btnData.filter(item => item.logo === '📞');
    } else if (sortType === "video") {
        filteredData = btnData.filter(item => item.logo === '📹');
    } else if (sortType === "message") {
        filteredData = btnData.filter(item => item.logo === '💬');
    } else if (sortType === "all") {
        filteredData = btnData;
    }

    // console.log("Timeline", filteredData);
    // console.log("btnData length", btnData.length);
    return (
        <div className='bg-base-200'>
            <div className="container mx-auto w-[60%] py-10  h-screen flex flex-col">
                <h1 className='py-2 text-xl font-semibold'>Timeline</h1>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn ">Filter timeline ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                        <AllFilterButton></AllFilterButton>
                        <FilterCallBtn></FilterCallBtn>
                        <FilterVideoBtn></FilterVideoBtn>
                        <FilterMessageBtn></FilterMessageBtn>

                    </ul>
                </div>
                <div className="flex flex-col gap-4 mt-4 overflow-y-auto flex-1  pr-2">
                    {
                        filteredData.map((data, index) => (<div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
                            <p className='text-2xl'>{data.logo}</p>
                            <div className="">
                                <h2 className='text-lg '><b>Meetup</b> <span className='text-[#64748B]'>with {data.name}</span></h2>
                                <p className='text-gray-600'>{data.next_due_date}</p>
                            </div>
                        </div>))
                    }

                    {
                        btnData.length === 0 && <div className='mx-auto mt-6 flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-12 text-center shadow-sm'>
                            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#CBFADB] text-xl'>
                                ⏳
                            </div>
                            <p className='text-lg font-semibold text-[#0F172A]'>No timeline data available.</p>
                            <p className='mt-2 text-sm text-[#64748B]'>Add a friend interaction to see calls, video chats, and messages here.</p>
                        </div>
                    }


                </div>
            </div>



        </div>
    );
};

export default Timeline;