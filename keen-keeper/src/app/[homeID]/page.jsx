import React from 'react';

const friendsPromise = async () => {
    const res = await fetch("http://localhost:3000//friends.json");
    const data = await res.json();
    return data;
}


const HomeID = async ({ params }) => {
    const friends = await friendsPromise();


    const { homeID }= await params;
    console.log(homeID);

    const friend = friends.find(friend => friend.id === parseInt(homeID));
    console.log(friend);


    return (
        <div>
            {friend.name}
        </div>
    );
};

export default HomeID;

/*
   bio
: 
"Met during freshman year at BUET. She's a civil engineer now working on infrastructure projects in Sylhet. We used to pull all-nighters before exams and now catch up over biriyani whenever she's in town."
days_since_contact
: 
19
email
: 
"ayesha.rahman@gmail.com"
goal
: 
14
id
: 
1
name
: 
"Ayesha Rahman"
next_due_date
: 
"2026-04-10"
picture
: 
"https://randomuser.me/api/portraits/women/44.jpg"
status
: 
"overdue"
tags
: 
(3) ['college', 'close friend', 'Dhaka']
   */
