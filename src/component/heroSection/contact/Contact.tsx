"use client";
import React from "react";
import Image from "next/image";


 const Contact = () => {
    return (
            <div className='md:flex items-center border shadow-sm justify-center md:w-2xl w-full h-48 md:h-32 pb-40  bg-white rounded-2xl relative md:py-0'>
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
    );
};
 export default Contact

