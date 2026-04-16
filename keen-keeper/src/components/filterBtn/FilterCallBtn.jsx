"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';

const FilterCallBtn = () => {


    const { btnData,
        callBtnData,
        setCallBtnData,
            setSortType
    } = useContext(TimeLineContext);

    const handleCallFilter = () => {
        setSortType("call");
        // const callArr = btnData.filter(item => item.logo === '📞');
        // setCallBtnData([...callArr]);
        // Implement the logic to filter call events here
    }
    // console.log(callBtnData);
    return (
        <div>
            <li onClick={() => handleCallFilter()}><a>Call</a></li>
        </div>
    );
};

export default FilterCallBtn;