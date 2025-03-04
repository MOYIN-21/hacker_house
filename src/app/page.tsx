import HeroSection from "@/component/hero/HeroSection";
import About from "@/component/about/About";
import {Contact} from "@/component/contact/Contact";
import HackerHouseFeatures from "@/component/feature/Feature";

export default function Home() {
    return (
        <main className="relative bg-white flex flex-col items-center min-h-screen pb-20 gap-16">
            <HeroSection/>
            <div className="w-full flex justify-center -mt-24 sm:-mt-24 md:-mt-28 lg:-mt-24">
                <Contact/>
            </div>
            <About/>
            <HackerHouseFeatures/>
        </main>
    );
}
