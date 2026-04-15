"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';

const TextBtn = ({ data }) => {

    const { btnData, setBtnData } = useContext(TimeLineContext);
    // console.log({btnData, setBtnData})

    const handleText = (textData) => {
        console.log("Text action ", textData);

        const updatedTextData = { ...textData, logo: '💬' };
        setBtnData([...btnData.filter(item => item.id !== updatedTextData.id), updatedTextData])
    };
    // console.log(btnData);

    return (
        <div>
            <div onClick={() => handleText(data)} className="bg-gray-100 p-2 py-5 rounded-lg flex flex-col items-center text-center cursor-pointer ">
                <MdOutlineTextsms className='font-bold text-3xl' />
                <p className='text-[#64748B]' >Text</p>
            </div>
        </div>
    );
};

export default TextBtn;