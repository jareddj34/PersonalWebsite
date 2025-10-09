import React from "react";
import Image from "next/image";
import { Video } from "lucide-react";
import VideoPlayer from "../../components/VideoPlayer";
import Footer from "@/components/Footer";

export default function AirboatPage() {
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-start mt-14">
            <h1 className="text-center text-6xl font-bold mb-6">Swampocalypse</h1>
            

            <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                <div className="md:w-1/2">
                    <p className="text-justify justify-center items-center">Swampocalypse is a location based VR experience where the user drives an airboat through an apocalyptic Miami Everglades, 
                    shooting and running over zombies on the way. For full immersion, the user is placed in a motion platform rig,
                    which is synced up to the game, allowing the user to feel the bumps and turns of the airboat as they drive through the swamp.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="/images/swampocalypse.jpg"
                        alt="Airboat in swamp"
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
                    <iframe width="900" height="506" src="https://www.youtube.com/embed/UNOsHUqSWtw?si=ZNtxf3Ug5rJtbSIZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <VideoPlayer src="/videos/RigFootage.mp4" poster="" controls autoPlay={false} muted={false} />
                </div>
            </div>

            <div>
                <h2 className="text-center text-3xl font-bold mb-2">The Rig</h2>
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/qubic.webp"
                            alt="Airboat in swamp"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-justify justify-center items-center">We use the QUBIC SYSTEM QS-S25 Advanced Motion Cockpit, a 6-DOF motion platform designed for 
                            high-fidelity simulation experiences.
                        </p>
                    </div>
                
            </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}