import HeroSection from "@/component/hero/HeroSection";
import Contact from "@/component/contact/Contact";
import About from "@/component/about/About";
import Features from "@/component/feature/Feature";
import Criteria from "@/component/criteria/Criteria";
import Footer from "@/component/footer/Footer";
import ParticipantRequirement from "@/component/participant requirement/Participant_requirement";
import IndividualTeam from "@/component/individualTeam/IndividualTeam";

const Home = () => {
    return <main className="relative bg-white flex flex-col items-center min-h-screen pb-20 gap-16">
        <HeroSection/>
        <div className="w-full flex justify-center -mt-24 sm:-mt-24 md:-mt-28 lg:-mt-24">
            <Contact/>
        </div>
        <About/>
        <Features/>
        <Criteria/>
        <ParticipantRequirement/>
        <IndividualTeam/>
        <Footer/>

    </main>

}

export default Home;