import { TimeLineContext } from '@/context/timeLineContext';
import React, { useContext } from 'react';

const AllFilterButton = () => {
    const {        setSortType } = useContext(TimeLineContext);

    const handleAllFilter = () => {
        setSortType("all");
        }
    // console.log(callBtnData);
    return (
        <div>
            <li onClick={() => handleAllFilter()}><a>All</a></li>
        </div>
    );
};

export default AllFilterButton;