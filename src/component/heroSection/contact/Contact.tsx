"use client";
import React from "react";
import Image from "next/image";


 const Contact = () => {
    return (
        // <div className={`flex items-center justify-items-center`}>
            <div className='md:flex  items-center border shadow-sm justify-center md:w-[800px] h-48   md:h-32  bg-white rounded-2xl relative top-24 md:py-0'>
                <div className='md:flex md:mt-3  md:gap-16 ml-10 md:ml-0 grid grid-cols-1 gap-2 relative md:top-0 top-4 '>
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
            {/*</div>*/}
            {/*<div className="flex items-center justify-items-center max-w-3xl p-6 bg-white border rounded-lg shadow-sm ">*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">*/}
            {/*        <InfoCard icon={<SlCalender className="h-10 w-10"/>} title="March 24-29," description="2025"/>*/}
            {/*        <InfoCard*/}
            {/*            icon={<FaLocationDot className="h-10 w-10"/>}*/}
            {/*            title="312 Herbert Macaulay,"*/}
            {/*            description="Sabo, Yaba, Lagos, Nigeria"*/}
            {/*        />*/}
            {/*        <InfoCard*/}
            {/*            icon={<FaClock className="h-10 w-10"/>}*/}
            {/*            title="Application Deadline:"*/}
            {/*            description="March 12, 2025"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};
 export default Contact

