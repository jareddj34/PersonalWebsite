import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Blog />
            <Experience />
            <Projects />
            <Footer />
        </>
    );
}
