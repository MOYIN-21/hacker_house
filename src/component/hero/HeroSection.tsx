"use client"
import React, {Component} from 'react';
import Image from "next/image";
import { TbCircleArrowRight } from "react-icons/tb";


class HeroSection extends Component {
    render() {
        return (
            <div
                className="w-full grid grid-cols  bg-[#05122C] rounded-bl-[100px] h-screen items-center justify-items-center">
                <div className={`flex flex-row space-x-4 pt-4`}>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/image/semicolon-logo.svg"
                            alt="semicolon icon"
                            width={200}
                            height={600}
                        />
                    </div>
                    <div className="h-7 border-l-2 border-white-500"></div>
                    <div>
                        <Image
                            aria-hidden
                            src="/assets/image/sui-logo.svg"
                            alt="Globe icon"
                            width={60}
                            height={50}
                        />
                    </div>
                </div>
                <div>
                    <Image
                        aria-hidden
                        src="/assets/image/HackerHouseNew.svg"
                        alt="HackerHouseNew icon"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={`flex md:flex-row flex-col md:space-x-5 space-y-4 items-center justify-items-center`}>
                    <div>
                        <p className={`text-3xl text-cyan-400 italic font-sans`}>Road to Sui Overflow</p>
                    </div>
                    <div className={`flex flex-row`}>
                        <button
                            type="button"
                            className="flex gap-1 text-blue-950 bg-cyan-400 hover:bg-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        >
                            Apply
                            <TbCircleArrowRight className="w-4 h-4 pt-1 text-blue-950"/>
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default HeroSection;