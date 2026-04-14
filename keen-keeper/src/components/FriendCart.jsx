import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const friendsPromise = async () => {
    const res = await fetch("http://localhost:3000//friends.json");
    const data = await res.json();
    return data;
}


const FriendCart = async () => {
    const friends = await friendsPromise();
    console.log(friends);

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

    return (
        <div className="bg-base-200">
            <div className="container mx-auto w-full px-4 md:px-0 mt-6 md:mt-10 md:w-[60%] py-6 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">

                    {
                        friends.map(friend => <Link href={`/${friend.id}`} key={friend.id} className="bg-white rounded-lg shadow-md p-4 flex items-center flex-col gap-2">
                            <Image
                                src="https://randomuser.me/api/portraits/men/14.jpg"
                                alt="John Doe"
                                width={100}
                                height={100}
                                className="rounded-full object-cover object-center w-[100px] h-[100px]"
                            />
                            <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
                            <p className="text-gray-600">{friend.days_since_contact}d ago</p>
                            <div className="flex items-center gap-2 flex-wrap justify-center ">
                                {
                                    friend.tags.map((tag, index) => <button key={index} className="bg-[#CBFADB]  text-[#244D3F]  py-2 px-2 rounded-full text-sm">{tag}</button>)
                                }
                            </div>

                            <button
                                className={`${friend.status === 'overdue'
                                    ? 'bg-[#EF4444]'
                                    : friend.status === "almost due"
                                        ? 'bg-[#EFAD44]'
                                        : friend.status === 'on-track'
                                            ? 'bg-[#244D3F]'
                                            : ""
                                    } text-white py-2 px-2 rounded-full text-sm`}
                            >
                                {friend.status}
                            </button>
                        </Link>)
                    }

                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center flex-col gap-2">
                        <Image
                            src="https://randomuser.me/api/portraits/men/14.jpg"
                            alt="John Doe"
                            width={100}
                            height={100}
                            className="rounded-full object-cover object-center w-[100px] h-[100px]"
                        />
                        <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                        <p className="text-gray-600">62d ago</p>
                        <button className="bg-[#CBFADB]  text-[#244D3F]  py-2 px-2 rounded-full text-sm">WORK</button>
                        <button className="bg-[#EFAD44]  text-white  py-2 px-2 rounded-full text-sm">Almost Due</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendCart;