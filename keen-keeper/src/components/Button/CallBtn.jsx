"use client"
import React, { useContext } from 'react';
import { TbPhoneCalling } from 'react-icons/tb';
import { TimeLineContext } from '@/context/timeLineContext';

const CallBtn = ({ data }) => {

    const { btnData, setBtnData } = useContext(TimeLineContext);
    // console.log({btnData, setBtnData})

    const handleCall = (callData) => {
        console.log("Call action ", callData);

        const updatedCallData = { ...callData, logo: '📞' };
        setBtnData([...btnData.filter(item => item.id !== updatedCallData.id), updatedCallData])
    };
    console.log(btnData);
    return (
        <div>
            <div onClick={() => handleCall(data)} className="bg-gray-100 p-2 py-5 rounded-lg flex flex-col items-center text-center cursor-pointer ">
                <TbPhoneCalling className='font-bold text-3xl' />
                <p className='text-[#64748B]'>Call</p>
            </div>
        </div>
    );
};

export default CallBtn;