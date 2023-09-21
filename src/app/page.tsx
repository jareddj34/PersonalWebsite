import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Projects />
            <Footer />
        </>
    );
}
