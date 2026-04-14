import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { PiChartLineThin } from "react-icons/pi";

const Nav = () => {
    const link = <>
        <li><Link href={"/"}> <AiOutlineHome />Home</Link></li>
        <li><Link href={"/Timeline"}> <MdAccessTime />Timeline</Link></li>
        <li><Link href={"/stats"}> <PiChartLineThin />Stats</Link></li>
    </>
    return (
        
            <div className="bg-base-100 shadow-sm ">
                <div className="navbar  container mx-auto">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        
    );
};

export default Nav;