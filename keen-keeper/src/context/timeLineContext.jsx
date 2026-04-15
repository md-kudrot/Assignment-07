"use client"
import React, { createContext, useState } from 'react';

export const TimeLineContext = createContext();


const TimeLineProvider = ({ children }) => {

    const [btnData, setBtnData] = useState([])

    const data = {
        btnData,
        setBtnData
    }

    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider;