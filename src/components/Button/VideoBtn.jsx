"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';
import { FiVideo } from 'react-icons/fi';
import { toast } from 'react-toastify';

const VideoBtn = ({ data }) => {
    const { btnData, setBtnData } = useContext(TimeLineContext);
    const handleVideo = (videoData) => {
        console.log("Video action ", videoData);

        const updatedVideoData = { ...videoData, logo: '📹' };

        setBtnData([...btnData, updatedVideoData])
        toast.success("added successfully!");

        // const alreadyExists = btnData.some(item => item.id === updatedVideoData.id);

        // if (alreadyExists) {
        //     toast.error("already in timeline!");
        // } else {
        //     setBtnData([...btnData, updatedVideoData]);
        //     toast.success("added successfully!");
        // }
    };
    // console.log(btnData);

    return (
        <div>

            <div onClick={() => handleVideo(data)} className="bg-gray-100 p-2 py-5 rounded-lg flex flex-col items-center text-center cursor-pointer ">
                <FiVideo className='font-bold text-3xl' />
                <p className='text-[#64748B]' >Video</p>
            </div>
        </div>
    );
};

export default VideoBtn;