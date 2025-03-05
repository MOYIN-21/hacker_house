"use client";
import React from "react";
import Image from "next/image";

const Criteria = () => {
    return (
        <section className="md:mt-24 mx-auto max-w-6xl px-4 py-8 ">
            <div className="rounded-xl bg-[#0A1739] ">
                <div className="grid md:grid-cols-2 items-center relative">
                    <div className="p-16 ">
                        <p className="mb-6 text-xl font-bold text-[#22D3EE]">Eligibility Criteria</p>
                        <ul className="grid gap-2 text-white">
                            <li >
                                <span className="font-semibold text-[#22D3EE]">Team Size:</span> Between 2-4 members
                            </li>
                            <li>
                                <span className="font-semibold text-[#22D3EE]">Age:</span> 18+ years old
                            </li>
                            <li >
                                <span className="font-semibold text-[#22D3EE]">Participants:</span> Open to developers, designers, entrepreneurs, and blockchain enthusiasts
                            </li>
                        </ul>
                    </div>
                    <div className="md:static ">
                        <Image className="w-full h-auto md:hidden" alt="images"  width={550} height={550}    src='/assets/image/eligibility-image.svg' />
                        <div className="hidden md:block absolute md:-top-7 lg:-top-13  md:right-0 md:translate-x-10 md:-translate-y-12">
                            <Image
                                alt="images"
                                width={600}
                                height={600}
                                src="/assets/image/eligibility-image.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Criteria;
