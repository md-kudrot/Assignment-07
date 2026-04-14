import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
    return (

        <div className="hero bg-[#244D3F] pt-15">
            <div className="hero-content w-full flex flex-col text-center py-20 text-white">
                <div className="">
                    <h1 className="text-8xl font-bold">KeenKeeper</h1>
                    <p className="py-6 text-[#d6cece]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <div className="">
                        <p>Social Links</p>
                        <div className="flex justify-center space-x-4 mt-4">

                            <a href="#" className="bg-white p-2 rounded-full ">
                                <CiInstagram className="text-xl text-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full ">
                                <ImFacebook2 className="text-xl text-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded-full ">
                                <RiTwitterXFill className="text-xl text-black" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[#1A8862] flex  items-center justify-between w-full">
                    <div className="text-sm text-[#d6cece]">
                        &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
                    </div>
                    <div className="flex justify-center space-x-4  text-[#d6cece]">
                        <p>Privacy Policy  </p>
                        <p>Terms of Service  </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;