"use client"
import React, {Component} from 'react';

class Criteria extends Component {
    render() {
        return (
            <div className="relative flex md:flex-row flex-col items-center bg-blue-950 text-white rounded-2xl p-6 md:p-10 max-w-6xl mx-auto">
                <div className="flex-1 px-3">
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

                <div className="w-40 md:w-56 lg:w-64">
                    <img
                        src="/assets/image/eligibility-image.svg"
                        alt="Participants"
                        className="absolute w-auto h-[120%] object-cover -top-16"
                        // className="rounded-xl"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        );
    }
}

export default Criteria;