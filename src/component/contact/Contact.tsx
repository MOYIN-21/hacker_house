"use client";
import React from "react";
import InfoCard from "@/reusables/InfoCard";
import {FaLocationDot} from "react-icons/fa6";
import {FaClock} from "react-icons/fa";
import {SlCalender} from "react-icons/sl";


export const Contact = () => {
    return (
        <div className={`flex items-center justify-items-center`}>
            <div className="flex items-center justify-items-center max-w-3xl p-6 bg-white border rounded-lg shadow-sm ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <InfoCard icon={<SlCalender className="h-10 w-10"/>} title="March 24-29," description="2025"/>
                    <InfoCard
                        icon={<FaLocationDot className="h-10 w-10"/>}
                        title="312 Herbert Macaulay,"
                        description="Sabo, Yaba, Lagos, Nigeria"
                    />
                    <InfoCard
                        icon={<FaClock className="h-10 w-10"/>}
                        title="Application Deadline:"
                        description="March 12, 2025"
                    />
                </div>
            </div>
        </div>
    );
};

