"use client"
import React, {Component} from 'react';
import Contact from "@/component/heroSection/contact/Contact";
import About from "@/component/heroSection/about/About";
import Features from "@/component/heroSection/feature/Feature";
import Criteria from "@/component/heroSection/criteria/Criteria";
import ParticipantRequirement from "@/component/heroSection/participant requirement/Participant_requirement";
import IndividualTeam from "@/component/heroSection/individualTeam/IndividualTeam";

class Index extends Component {
    render() {
        return (
            <main className="relative bg-white flex flex-col items-center gap-16">
                <div className="w-full flex justify-center -mt-24 sm:-mt-24 md:-mt-28 lg:-mt-24">
                    <Contact/>
                </div>
                <About/>
                <Features/>
                <Criteria/>
                <ParticipantRequirement/>
                <IndividualTeam/>
            </main>
        );
    }
}

export default Index;