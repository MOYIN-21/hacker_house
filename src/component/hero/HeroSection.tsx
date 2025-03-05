"use client"
import React, {Component} from 'react';
import Image from "next/image";

class HeroSection extends Component {
    render() {
        return (
            <div className="w-full grid grid-cols  bg-[#05122C] rounded-bl-[100px] h-screen items-center justify-items-center">
            <div>
                    <div className='grid grid-cols-1 space-y-12'>
                        <div className='flex items-center justify-center gap-4'>
                            <Image
                                aria-hidden
                                src="/assets/image/semicolon-logo.svg"
                                alt="semicolon icon"
                                width={200}
                                height={600}
                            />
                            <p className='text-white text-3xl'>|</p>
                            <Image
                                aria-hidden
                                src="/assets/image/sui-logo.svg"
                                alt="Globe icon"
                                width={60}
                                height={50}
                            />
                        </div>
                        <div className='flex items-center justify-center gap-4 '>
                            <div>
                                <Image
                                    aria-hidden
                                    src="/assets/image/HackerHouseNew.svg"
                                    alt="HackerHouseNew icon"
                                    width={500}
                                    height={500}
                                />
                                <p className='text-cyan-400 text-3xl font-sans italic mt-5 flex items-center justify-center'>Road to Sui Overflow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;