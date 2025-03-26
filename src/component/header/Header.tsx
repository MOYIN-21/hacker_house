"use client"
import React, {Component} from 'react';
import Image from "next/image";

class Header extends Component {
    render() {
        return (
            <div className="w-full grid grid-cols  bg-[#05122C] rounded-bl-[100px] h-screen items-center justify-items-center">
                <div>
                    <div className='grid grid-cols-1 space-y-12'>
                        <div className='flex items-center justify-center gap-4'>
                            <Image src={"/assets/image/semicolon-logo.svg"} alt='image' width={150}
                                   height={150}/>
                            <p className='text-white text-3xl'>|</p>
                            <Image src={"/assets/image/sui-logo.svg"} alt='image' width={60}
                                   height={60}/>
                        </div>
                        <div className='flex items-center justify-center gap-4 '>
                            <div>
                                <Image src={"/assets/image/HackerHouseNew.svg"} alt='image' width={500}
                                       height={500}/>
                                <p className='text-[#22D3EE] text-2xl font-bold italic mt-5 flex items-center justify-center'>Road to Sui Overflow</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex  items-center justify-center md:w-[800px] h-48   md:h-32  bg-white rounded-2xl relative top-24 md:py-0'>
                        <div className='md:flex md:mt-3 px-2 md:gap-16 ml-10 md:ml-0 grid grid-cols-1 gap-2 relative md:top-0 top-4 '>
                            <div className='flex '>
                                <div><Image src={"/assets/image/calender.png"} width={40} height={40} alt='image' /></div>
                                <p className='text-gray-500 text-sm'>March 24-29,<br/> <span className={`text-sm font-bold text-black font-sans`}> 2025</span></p>
                            </div>
                            <div className='flex'>
                                <div> <Image src={"/assets/image/icon.png"} width={40} height={40} alt='image' /></div>
                                <p className='text-gray-500 text-sm'>312 Herbert Macaulay, <br/> <span className={`text-sm font-bold text-black font-sans`}>Sabo, Yaba, Lagos,</span> <br/> <span className={`text-sm font-bold text-black font-sans`}> Nigeria</span></p>
                            </div>
                            <div className='flex '>
                                <div><Image src={"/assets/image/timer.png"} width={40} height={40} alt='image' /></div>
                                <p className='text-gray-500 text-sm'>Application Deadline:<br/> <span className={`text-sm font-bold text-black font-sans`}>March 12, 2025</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;