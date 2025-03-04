"use client"
import React, {Component} from 'react';
import Image from "next/image";



class Student extends Component {
    render() {
        return (
            <div className="grid grid-rows-[20px_1fr_20px] bg-blue-950  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Image
                    aria-hidden
                    src="/assets/image/semicolon-logo.svg"
                    alt="Globe icon"
                    width={100}
                    height={100}
                />
            </div>


        );
    }
}

export default Student;