"use client";
import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/2 flex justify-center">
                <div className="relative">
                    <Image
                        src="/assets/image/about-sui-image.svg"
                        alt="about sui icon"
                        width={400}
                        height={400}
                        className={`rounded-full w-96 h-96 bg-black object-cover object-center`}
                        // className={`rounded-full w-96 h-96 bg-black object-cover object-center`}
                        // className="absolute w-auto h-[120%] object-cover -top-16"
                    />

                    <div
                        className="absolute top-32 left-[-12px] bg-gray-200 text-black px-4 py-1 rounded shadow-md flex items-center text-sm">
                        <span className=" text-sm text-black">🌐</span> Web 3.0
                    </div>

                    <div
                        className="absolute bottom-8 right-0.5 bg-gray-200  text-black px-4 py-1 rounded shadow-md flex items-center text-sm">
                        <span className="text-black">🔗</span> Blockchain Tech
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                    About SUI Lagos Hacker House
                </h2>
                <p className={`text-black`}>
                    <strong>Sui Lagos Hacker House</strong> is a 6-day event designed to bring together developers,
                    engineers, builders, innovators, and blockchain enthusiasts interested in building on the <strong>Sui
                    blockchain</strong>.
                </p>
                <p className={`text-black`}>
                    The event features workshops, mentorship, coaching sessions, hacking, and networking opportunities
                    to encourage innovation and collaboration. Nigerian participants will build robust solutions using
                    Sui and prepare for the <a href="#" className="text-blue-500 font-semibold">Sui Overflow 2025
                    Hackathon</a>, a global competition with over $500,000 in prizes.
                </p>
                <p className={`text-black`}>
                    The Sui Lagos Hacker House is implemented by <strong>Semicolon</strong> and sponsored by
                    the <strong>Sui Foundation</strong>.
                </p>
            </div>
        </section>
    );
};

export default About;

