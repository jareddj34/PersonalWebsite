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
                    <p className="text-justify justify-center items-center">Swampocalypse is a location-based VR experience set in a post-apocalyptic Miami Everglades. Players 
                    pilot a rusty airboat through dangerous and polluted swamps, using the Qubic QS-S25 motion rig, which 
                    mirrors in-game movement for a fully immersive experience. As they fight off mutated creatures and 
                    zombies, players explore the Everglades while collecting new weapons and learning important facts and 
                    information about the environment, teaching them ways humans can prevent further ruining the 
                    Everglades.
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
                    <iframe width="900" height="506" src="https://www.youtube.com/embed/GFWiE44Igk4?si=PbhBEUxVGQ78LVVP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    {/* <VideoPlayer src="/videos/RigFootage.mp4" poster="" controls autoPlay={false} muted={false} /> */}
                </div>
            </div>

            <div>
                <h2 className="text-center text-3xl font-bold mb-2">My Role</h2>
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                    <div className="md:w-1/2">
                        <p className="text-justify justify-center items-center">I am the lead developer of this project, so I am responsible for nearly all the aspects of the Unity 
                        application, implementing everyone else&apos;s work in the game, and connecting the program to the physical 
                        rig. I lead a team of very talented individuals, including 3D modelers, UI/UX designers, and sound 
                        engineers. During our weekly meetings, we discuss the work we have done, how we can implement it into 
                        the game, and the future steps we have to take. Collaborating with a great team really inspires and 
                        motivates me to do my best work, and it is very rewarding to see all of our work come together to make a 
                        great experience. 
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl mb-2">
                            Mechanics that I developed:
                        </h3>
                        <ul className="list-disc ml-6 space-y-3 text-justify">
                            <li>
                                <strong>Vehicle movement:</strong> After field testing at an airboat tour in the Everglades, I implemented realistic boat physics and controls to match the feel of driving an airboat through the Miami Everglades.
                            </li>
                            <li>
                                <strong>Weapon System:</strong> Multiple weapons (crossbow, shotgun, assault rifle) with unique mechanics. I designed firing mechanics, interactions, and the ammo system.
                            </li>
                            <li>
                                <strong>Enemies:</strong> Zombies with health, movement, and ragdoll physics. The main boss has multiple stages and attack patterns used during the final scene.
                            </li>
                            <li>
                                <strong>Level Design:</strong> Originally a racing simulator concept, levels were redesigned into environmental, zombie-focused stages that reflect Everglades elements with apocalyptic twists.
                            </li>
                            <li>
                                <strong>Optimization:</strong> Targeting Meta Quest 3 required performance constraints; I implemented object culling and less-dense environments to maintain max frame rate.
                            </li>
                            <li>
                                <strong>Hardware Integration:</strong> Integrated software with physical rigs — from an Arduino-based in-house rig to the Qubic system using MotionSDK — and translated boat physics into rig movement.
                            </li>
                        </ul>
                    </div>
                
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