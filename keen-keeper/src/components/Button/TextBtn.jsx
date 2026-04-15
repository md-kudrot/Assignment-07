"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const TextBtn = ({ data }) => {

    const { btnData, setBtnData } = useContext(TimeLineContext);
    // console.log({btnData, setBtnData})

    const handleText = (textData) => {
        console.log("Text action ", textData);

        const updatedTextData = { ...textData, logo: '💬' };
        
        setBtnData([...btnData, updatedTextData])
        toast.success("added successfully!");

        // const alreadyExists = btnData.some(item => item.id === updatedTextData.id);

        // if (alreadyExists) {
        //     toast.error("already in timeline!");
        // } else {
        //     setBtnData([...btnData, updatedTextData]);
        //     toast.success("added successfully!");
        // }
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