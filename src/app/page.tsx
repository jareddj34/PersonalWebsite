import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";

import dynamic from "next/dynamic";

const ProjectsDynamic = dynamic(() => import('@/components/Projects'), {
    loading: () => <div>Loading...</div>,
});

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Blog />
            <Experience />
            <ProjectsDynamic />
            <Footer />
        </>
    );
}
