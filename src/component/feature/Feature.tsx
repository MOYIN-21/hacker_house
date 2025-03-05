"use client"
import React from 'react';

const Section = ({
                     title,
                     items,
                     bgColor,
                     padding,
                 }: {
    title: string;
    items: string[];
    bgColor: string;
    padding: string;
}) => (
    <div className={`${bgColor} p-${padding} flex-1 font-sans`}>
        <h2 className="text-lg font-bold text-blue-700 mb-4">{title}</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const Features = () => {
    const features = [
        "Brainstorming and Ideation Sessions",
        "Workshops and Tutorials",
        "Coaching and Mentorship from Move Experts, including the Sui Foundation’s Head of Developer Relations",
        "Access to Resources",
        "Networking Opportunities",
        "Solution Demonstrations",
    ];

    const benefits = [
        "Access Mentorship & Coaching",
        "Engage with the Sui Foundation",
        "Hands-On Learning",
        "Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses",
        "Showcase your skills",
        "Connect with other developers & potential mentors and partners",
        "All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100",
    ];

    return (
        <div className="mx-auto flex flex-col min:h-screen md:flex-row justify-around gap-6 bg-blue-100 font-sans">
            <Section title="Features of the Hacker House" items={features} bgColor="bg-blue-100" padding="10"/>
            <Section title="Benefits for Participating Teams" items={benefits} bgColor="bg-gray-50" padding="10"/>
        </div>
    );
};

export default Features;