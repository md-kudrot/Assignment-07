import CallBtn from '@/components/Button/CallBtn';
import TextBtn from '@/components/Button/TextBtn';
import VideoBtn from '@/components/Button/VideoBtn';
import Image from 'next/image';
import React from 'react';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiArchiveLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbPhoneCalling } from 'react-icons/tb';

const friendsPromise = async () => {
    const res = await fetch("https://keen-keeper-peach.vercel.app/friends.json",{
        cache: "no-store"
    });
    const data = await res.json();
    return data;
}

const HomeID = async ({ params }) => {
    const friends = await friendsPromise();

    const { homeID } = await params;
    // console.log(homeID);

    const friend = friends.find(friend => friend.id === parseInt(homeID));
    // console.log(friend);






    return (
        <div className='bg-base-200'>
            <div className="container w-full md:w-[90%] lg:w-[60%] mx-auto py-10 flex flex-col md:flex-row gap-4 p-4">

                <div className="w-full md:w-[30%] flex gap-3 flex-col">
                    <div key={friend.id} className="bg-white w-full rounded-lg shadow-md py-4
                     flex items-center flex-col gap-2">
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={100}
                            height={100}
                            className="rounded-full object-cover object-center w-[100px] h-[100px]"
                        />
                        <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
                        <p className="text-gray-600">{friend.days_since_contact}d ago</p>

                        <button
                            className={`${friend.status === 'overdue'
                                ? 'bg-[#EF4444]'
                                : friend.status === "almost due"
                                    ? 'bg-[#EFAD44]'
                                    : friend.status === 'on-track'
                                        ? 'bg-[#244D3F]'
                                        : ""
                                } text-white py-2 px-2 rounded-full text-sm`}
                        >
                            {friend.status}
                        </button>

                        <p className='text-[#64748B] text-center'>{friend.bio}</p>
                        <p className='text-[#64748B] text-center'>Preferred : {friend.email}</p>

                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            {
                                friend.tags.map((tag, index) => <button key={index} className="bg-[#CBFADB] text-[#244D3F] py-2 px-2 rounded-full text-sm">{tag}</button>)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <button className="bg-white text-black py-2 px-4 rounded-lg w-full flex gap-2 items-center justify-center"> <RiNotificationSnoozeLine /> Snooze 2 weeks</button>
                        <button className="bg-white text-black py-2 px-4 rounded-lg w-full flex gap-2 items-center justify-center"> <RiArchiveLine />ArchiveArchive</button>
                        <button className="bg-white  text-red-800 py-2 px-4 rounded-lg w-full flex gap-2 items-center justify-center"> <RiDeleteBinLine />Delete</button>
                    </div>
                </div>

                <div className="w-full md:w-[70%] flex flex-col gap-4 p-4">
                    <div className="">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-4">

                            <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                                <h1 className='text-[#244D3F] text-2xl font-bold'>{friend.days_since_contact}</h1>
                                <p className='text-[#64748B]'>Days Since Contact</p>
                            </div>
                            <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                                <h1 className='text-[#244D3F] text-2xl font-bold'>{friend.goal}</h1>
                                <p className='text-[#64748B]'>Goal (Days)</p>
                            </div>
                            <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                                <h1 className='text-[#244D3F] text-2xl font-bold'>{friend.next_due_date}</h1>
                                <p className='text-[#64748B]'>Next Due</p>
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                                <h1 className='text-[#244D3F] text-xl font-bold'>Relationship Goal</h1>
                                <button className='btn'>Edit</button>
                            </div>
                            <p className='text-gray-600 mt-2'>contact every <b>{friend.days_since_contact} days</b> </p>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h1 className='py-2 text-xl font-semibold'>Quick Check-In</h1>
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                            <CallBtn data={friend} />

                            <TextBtn data={friend} />

                            <VideoBtn data={friend} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeID;
