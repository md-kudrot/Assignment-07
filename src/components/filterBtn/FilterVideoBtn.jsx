"use client"
import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';

const VideoBtn = () => {
    const { btnData,
        videoBtnData,
        setVideoBtnData,
        setSortType
    } = useContext(TimeLineContext);

    const handleVideoFilter = () => {
        setSortType("video");
        // console.log("this is video")
        // const videoArr = btnData.filter(item => item.logo === '📹');
        // setVideoBtnData([...videoArr]);
        // Implement the logic to filter video events here
    }
    // console.log(videoBtnData);
    return (

        <li onClick={() => handleVideoFilter()}><a>Video</a></li>

    );
};

export default VideoBtn;