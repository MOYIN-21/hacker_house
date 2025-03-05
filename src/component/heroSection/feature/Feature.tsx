"use client"
import React from 'react';


const Features = () => {
    return (
        <div className='md:flex justify-between'>
            <div className='bg-[#DBEAFE] w-full  pb-16  flex justify-center items-start px-12 md:px-24'>
                <div className='mt-14'>
                    <p className='font-bold text-lg text-blue-700 mb-5 '>Features of the Hacker House</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 ">
                        <li>Brainstorming and Ideation Session</li>
                        <li>Workshops and Tutorials</li>
                        <li>Coaching and Mentorship from Move  Experts, including the Sui Foundation’s Head of Developer Relations</li>
                        <li>Access to Resources</li>
                        <li>Networking Opportunities</li>
                        <li>Solution Demonstrations</li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#EFF6FF4D] w-full pb-16  flex justify-center items-start px-12 md:px-24'>
                <div className='mt-14'>
                    <p className='font-bold text-lg text-blue-700 mb-5'>Benefits for Participating Teams</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 ">
                        <li>Access Mentorship & Coaching</li>
                        <li>Engage with the Sui Foundation</li>
                        <li>Hands-On Learning</li>
                        <li>Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses</li>
                        <li>Showcase your skills</li>
                        <li>Connect with other developers & potential mentors and partners</li>
                        <li>All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;