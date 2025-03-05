"use client";
import React from "react";

const Criteria = () => {
    return (
        <div className="relative flex md:flex-row flex-col items-center bg-blue-950 text-white rounded-2xl px-10 py-5 md:py-0 max-w-5xl mx-auto overflow-visible">
            <div className="flex-1 px-5 z-10">
                <h2 className="text-teal-400 text-lg md:text-xl font-bold mb-3">
                    Eligibility Criteria
                </h2>
                <ul className="space-y-2 text-sm md:text-base">
                    <li>
                        <span className="font-bold text-teal-300">Team Size:</span> Between 2-4 members
                    </li>
                    <li>
                        <span className="font-bold text-teal-300">Age:</span> 18+ years old
                    </li>
                    <li>
                        <span className="font-bold text-teal-300">Participants:</span> Open to developers, designers, entrepreneurs, and blockchain enthusiasts
                    </li>
                </ul>
            </div>

            <div className="relative w-full md:w-1/2 flex justify-end">
                <img
                    src="/assets/image/eligibility-image.svg"
                    alt="Participants"
                    className="absolute md:static -right-10 md:right-0 top-16 bottom-0 h-[140%] md:h-[120%] object-cover z-20 translate-x-5"
                />
            </div>
        </div>
    );
};

export default Criteria;
