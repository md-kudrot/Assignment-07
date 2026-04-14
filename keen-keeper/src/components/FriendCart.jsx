import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




const FriendCart = () => {
    return (
        <Link href="/friends" className="bg-base-200">
            <div className="container mx-auto mt-10 md:w-[60%] py-10 ">
                <h2 className="text-3xl font-bold mb-4">Your Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  
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
        </Link>
    );
};

export default FriendCart;