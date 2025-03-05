import React from 'react';
import Image from "next/image";

function IndividualTeam() {
    return (
        <div>
            <div className='bg-[#ebf3ff] grid md:grid-cols-2 gap-10 lg:px-52 md:h-48 px-4 md:pt-0 pt-5'>
                <div className='bg-[#F7FAFF] flex flex-col space-y-3 gap-5 items-center max-w-sm pl-16 pr-16 mx-auto rounded-[50px] h-80 justify-center relative md:bottom-[7.40vh]'>
                    <div>
                        <Image height={52} width={52} alt="image" src="/assets/image/individual.png"/>
                    </div>
                    <p className='w-44 text-center text-gray-600'>To apply as an <span className='font-bold text-black'>Individual,</span> <span className={`text-gray-600 cursor-pointer`}>click here</span></p>
                    <a href='https://docs.google.com/forms/d/1dcsPfOPBPyt2qL7ZDPpt5vZJp96Md3kOmcvbePIdWkM/viewform?edit_requested=true' className='cursor-pointer'>
                        <button className='bg-[#05122C] cursor-pointer text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6'>Individual <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button>
                    </a>
                </div>

                <div className='bg-[#F7FAFF] flex flex-col space-y-3 items-center max-w-md pl-16 pr-16 mx-auto rounded-[50px] h-80 justify-center relative md:bottom-[7.40vh]'>
                    <div>
                        <Image height={100} width={100} alt='image' src={'/assets/image/group.png'} priority/>
                    </div>
                    <div className='w-44 text-center text-gray-600'>To apply as an <span className='font-bold text-black'>Team,</span> <span className={`text-gray-600 cursor-pointer`}> click here</span></div>
                    <a href='https://docs.google.com/forms/u/0/d/1IF7HY2Sa3FL9WSS5zZbLgA6jJ-sp-Hgkw7OCeb-8zrI/viewform?edit_requested=true'>
                        <button className='bg-[#05122C] text-white p-3 flex gap-3 items-center rounded-3xl pr-6 pl-6 cursor-pointer'>Team <div className='border-white border-2 rounded-full h-5 w-5 flex items-center justify-center text-[12px]'>{"->"}</div></button>
                    </a>
                </div>
            </div>

            <div className='md:mt-28 flex items-center justify-center md:px-0 px-4 md:py-0 py-12'>
                <p className='text-center text-black'>We will inform applicants if they were selected by <span className='font-bold ml-1 text-black'> Monday, March 17, 2025.</span></p>
            </div>
        </div>
    );
}

export default IndividualTeam;