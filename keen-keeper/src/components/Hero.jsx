import React from 'react';
import { GoPlus } from "react-icons/go";

const Hero = () => {
    return (
        <div className=' bg-base-200'>
            <div className="hero bg-base-200 mt-20">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className="btn btn-primary bg-[#244D3F] text-white hover:bg-[#1a3a2d]"><GoPlus className='text-lg' /> Add a Friend</button>
                    </div>
                </div>
            </div>


            <div className="container mx-auto  border-b border-[#E9E9E9] py-10  md:w-[60%] my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                    <h1 className='text-[#244D3F] text-2xl font-bold'>10</h1>
                    <p className='text-[#64748B]'>Total friends</p>
                </div>
                <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                    <h1 className='text-[#244D3F] text-2xl font-bold'>3</h1>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                    <h1 className='text-[#244D3F] text-2xl font-bold'>6</h1>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className="bg-white p-2 py-10 rounded-lg flex flex-col items-center text-center">
                    <h1 className='text-[#244D3F] text-2xl font-bold'>12</h1>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;