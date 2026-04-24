import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCart = ({ friend }) => {
    return (
        <>
            <Link href={`/friendCart/${friend?.id}`} key={friend?.id} className="bg-white rounded-lg shadow-md p-4 flex items-center flex-col gap-2">
                <Image
                    src={friend?.picture}
                    alt={friend?.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover object-center w-[100px] h-[100px]"
                />
                <h3 className="text-xl font-semibold mb-2">{friend?.name}</h3>
                <p className="text-gray-600">{friend?.days_since_contact}d ago</p>
                <div className="flex items-center gap-2 flex-wrap justify-center ">
                    {
                        friend?.tags.map((tag, index) => <button key={index} className="bg-[#CBFADB]  text-[#244D3F]  py-2 px-2 rounded-full text-sm">{tag}</button>)
                    }
                </div>

                <button
                    className={`${friend?.status === 'overdue'
                        ? 'bg-[#EF4444]'
                        : friend?.status === "almost due"
                            ? 'bg-[#EFAD44]'
                            : friend?.status === 'on-track'
                                ? 'bg-[#244D3F]'
                                : ""
                        } text-white py-2 px-2 rounded-full text-sm`}
                >
                    {friend?.status}
                </button>
            </Link>
        </>
    );
};

export default FriendCart;