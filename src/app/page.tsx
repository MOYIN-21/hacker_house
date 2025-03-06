"use client"
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import HeroSection from "@/component/heroSection/Index";


const Home = () => {
    return (
    <main className="relative bg-white flex flex-col items-center gap-16">
        <Header/>
        <HeroSection/>
        <Footer/>
    </main>
    )
}

export default Home;