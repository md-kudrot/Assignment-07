"use client"
import TimeLineProvider from '@/context/timeLineContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <TimeLineProvider>
            {children}
        </TimeLineProvider>
    );
};

export default Providers;