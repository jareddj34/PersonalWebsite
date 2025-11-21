import React from "react";
import Image from "next/image";
import { Video } from "lucide-react";
import VideoPlayer from "../../components/VideoPlayer";
import Footer from "@/components/Footer";

export default function TemikkiPage() {
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-start mt-14">
            <h1 className="text-center text-6xl font-bold mb-6">Temikki Garden</h1>
            

            <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                <div className="md:w-1/2">
                    <p className="text-justify justify-center items-center">Temikki Garden is a mobile AR application tailored towards children enduring long-term hospital stays. The
                        app allows children to build, modify, and play in a living virtual garden, promoting creativity and their accomplishments.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/temikki.jpg"
                        alt="Temikki Garden"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-center text-3xl font-bold mb-2">Gameplay</h2>
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                <div className="px-4 space-y-10">
                    <iframe width="900" height="506" src="https://www.youtube.com/embed/MHRfTXn37YM?si=6u1xRlhDsZQ-3a-d" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    {/* <VideoPlayer src="/videos/RigFootage.mp4" poster="" controls autoPlay={false} muted={false} /> */}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}