"use client"
import React, { createContext, useState } from 'react';

export const TimeLineContext = createContext();


const TimeLineProvider = ({ children }) => {

    const [btnData, setBtnData] = useState([])

    const [sortType, setSortType] = useState("")

    // const [callBtnData, setCallBtnData] = useState([])
    // const [smsBtnData, setSmsBtnData ] = useState([])
    // const [videoBtnData, setVideoBtnData ] = useState([])

    const data = {
        btnData,
        setBtnData,
        sortType,
        setSortType
        // callBtnData,
        // setCallBtnData,
        // smsBtnData,
        // setSmsBtnData,
        // videoBtnData,
        // setVideoBtnData
    }

    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider;