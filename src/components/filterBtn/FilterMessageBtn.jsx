"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';

const MessageBtn = () => {
    const { btnData,
        smsBtnData,
        setSmsBtnData,
        setSortType

    } = useContext(TimeLineContext);

    const handleMessageFilter = () => {
        setSortType("message");
        // const smsArr = btnData.filter(item => item.logo === '💬');
        // setSmsBtnData([...smsArr]);
        // console.log("this is message")
        // Implement the logic to filter message events here
    }
    // console.log(smsBtnData);
    return (
        <div>
            <li onClick={() => handleMessageFilter()}><a>Message</a></li>
        </div>
    );
};

export default MessageBtn;