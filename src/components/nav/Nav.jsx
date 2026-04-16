import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { PiChartLineThin } from "react-icons/pi";
import MyLink from './MyLink';

const Nav = () => {
    // const link = <>
    //     <li><Link href={"/"}> <AiOutlineHome />Home</Link></li>
    //     <li><Link href={"/Timeline"}> <MdAccessTime />Timeline</Link></li>
    //     <li><Link href={"/stats"}> <PiChartLineThin />Stats</Link></li>
    // </>

    const link = [
        { name: "Home", icon: <AiOutlineHome />, href: "/" },
        { name: "Timeline", icon: <MdAccessTime />, href: "/Timeline" },
        { name: "Stats", icon: <PiChartLineThin />, href: "/stats" }
    ];

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto flex-col md:flex-row gap-2 md:gap-0">
                <div className="flex-1 w-full md:w-auto justify-center md:justify-start">
                    <a className="btn btn-ghost text-xl font-bold">
                        <span className='text-black '>Keen</span><span className='bg-[#07da93] -ml-3'></span>Keeper
                    </a>
                </div>
                <div className="flex-none w-full md:w-auto justify-center md:justify-end">
                    <ul className="menu menu-vertical md:menu-horizontal px-1 w-full md:w-auto">
                        {link.map((item, index) => (
                            <li key={index}>
                                <MyLink item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;