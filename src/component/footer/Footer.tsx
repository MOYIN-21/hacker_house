import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='bg-[#05122C] px-3 text-white py-16 grid md:grid-cols-2 md:mt-10'>
            <div className='grid grid-cols-1 space-y-12 px-16'>
                <div>
                    <p className=' text-[15px] font-bold text-[#22D3EE] mb-4'>Logistics</p>
                    <div>
                        <ul className="list-disc pl-5 space-y-2 text-[14px] ">
                            <li>Accommodation will be provided for teams
                                near the hacker house venue in Lagos</li>
                            <li>Meals will be provided</li>
                        </ul>
                    </div>
                </div>
                <div className={`flex flex-row space-x-4 pt-4`}>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/image/semicolon-logo.svg"
                            alt="semicolon icon"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="h-6 border-l-2 border-white-500"></div>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/image/sui-logo.svg"
                            alt="Globe icon"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            <div className='px-16 md:mt-0 mt-6'>
                <p className=' text-[15px] font-bold text-[#22D3EE] mb-4'>Resources and Support</p>
                <div className='grid grid-col space-y-5'>
                    <p>Semicolon is providing free training on Sui Move, sponsored by the Sui
                        Foundation. It isn’t too late to register for the current round of classes. Click on
                        this link to register:<a className=' underline ml-1' href='https://docs.google.com/forms/d/1F1-HyLAK9od3xpUD9XPGNmAS_Uv9hCBpD3W0UDlfRBc/viewform?edit_requested=true'>https://bit.ly/SC-SUI-Training</a></p>
                    <p>Semicolon is a workforce development company that is solving the problem
                        of youth unemployment by training software engineers and techpreneurs.
                        Through our one-year techpreneurship program, we help individuals develop
                        required skills to compete as software engineers in the global market. To
                        learn more about Semicolon, please visit <a href="https://www.semicolon.africa" className=" underline">www.semicolon.africa</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer