import React from 'react';

const HomeID = async ({ params }) => {
    const { homeID }= await params;
    console.log(homeID);
    return (
        <div>
            I will come soon with more features and updates. Stay tuned!
        </div>
    );
};

export default HomeID;