// import React from "react";
// import Image from "next/image";
// import { Video } from "lucide-react";
// import VideoPlayer from "../../components/VideoPlayer";
// import Footer from "@/components/Footer";

// export default function AirboatPage() {
//     return (
//         <>
//         <div className="min-h-screen flex flex-col items-center justify-start mt-14">
//             <h1 className="text-center text-6xl font-bold mb-6">Swampocalypse</h1>

//             <p className="text-xl mt-4 max-w-xl mx-auto text-center">
//             A location-based VR experience combining environmental storytelling, motion simulation, and zombie survival.
//             </p>
            

//             <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
//             <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//             <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                 <div className="md:w-1/2">
//                     <Image
//                         src="/images/swampocalypse.jpg"
//                         alt="Airboat in swamp"
//                         width={600}
//                         height={400}
//                         className="rounded-lg"
//                     />
//                 </div>
//                 <div className="md:w-1/2">
//                     <p className="text-justify justify-center items-center">Swampocalypse is a location-based VR experience set in a post-apocalyptic Miami Everglades. Players 
//                     pilot a rusty airboat through dangerous and polluted swamps, using the Qubic QS-S25 motion rig, which 
//                     mirrors in-game movement for a fully immersive experience. As they fight off mutated creatures and 
//                     zombies, players explore the Everglades while collecting new weapons and learning important facts and 
//                     information about the environment, teaching them ways humans can prevent further ruining the 
//                     Everglades.
//                     </p>
//                 </div>
                
//             </div>

//             <div className="mb-20">
//                 <h2 className="text-center text-3xl font-bold mb-2">Gameplay</h2>
//                 <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 <div className="px-4 space-y-10">
//                     <iframe width="900" height="506" src="https://www.youtube.com/embed/GFWiE44Igk4?si=PbhBEUxVGQ78LVVP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
//                     {/* <VideoPlayer src="/videos/RigFootage.mp4" poster="" controls autoPlay={false} muted={false} /> */}
//                 </div>
//             </div>

//             <div>
//                 <h2 className="text-center text-3xl font-bold mb-2">My Role</h2>
//                 <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                     <div className="md:w-1/2">
//                         <p className="text-justify justify-center items-center text-xl">I am the lead developer of this project, so I am responsible for nearly all the aspects of the Unity 
//                         application, implementing everyone else&apos;s work in the game, and connecting the program to the physical 
//                         rig. I lead a team of very talented individuals, including 3D modelers, UI/UX designers, and sound 
//                         engineers. During our weekly meetings, we discuss the work we have done, how we can implement it into 
//                         the game, and the future steps we have to take. Collaborating with a great team really inspires and 
//                         motivates me to do my best work, and it is very rewarding to see all of our work come together to make a 
//                         great experience. 
//                         </p>
//                     </div>
//                     <div className="md:w-1/2">
//                         <h3 className="text-xl mb-2">
//                             Mechanics that I developed:
//                         </h3>
//                         <ul className="list-disc ml-6 space-y-3 text-justify">
//                             <li>
//                                 <strong>Vehicle movement:</strong> After field testing at an airboat tour in the Everglades, I implemented realistic boat physics and controls to match the feel of driving an airboat through the Miami Everglades.
//                             </li>
//                             <li>
//                                 <strong>Weapon System:</strong> Multiple weapons (crossbow, shotgun, assault rifle) with unique mechanics. I designed firing mechanics, interactions, and the ammo system.
//                             </li>
//                             <li>
//                                 <strong>Enemies:</strong> Zombies with health, movement, and ragdoll physics. The main boss has multiple stages and attack patterns used during the final scene.
//                             </li>
//                             <li>
//                                 <strong>Level Design:</strong> Originally a racing simulator concept, levels were redesigned into environmental, zombie-focused stages that reflect Everglades elements with apocalyptic twists.
//                             </li>
//                             <li>
//                                 <strong>Optimization:</strong> Targeting Meta Quest 3 required performance constraints; I implemented object culling and less-dense environments to maintain max frame rate.
//                             </li>
//                             <li>
//                                 <strong>Hardware Integration:</strong> Integrated software with physical rigs — from an Arduino-based in-house rig to the Qubic system using MotionSDK — and translated boat physics into rig movement.
//                             </li>
//                         </ul>
//                     </div>
                
//                 </div>
//             </div>

//             <div>
//                 <h2 className="text-center text-3xl font-bold mb-2">The Rig</h2>
//                 <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                     <div className="md:w-1/2">
//                         <Image
//                             src="/images/qubic.webp"
//                             alt="Airboat in swamp"
//                             width={600}
//                             height={400}
//                             className="rounded-lg"
//                         />
//                     </div>
//                     <div className="md:w-1/2">
//                         <p className="text-justify justify-center items-center">We use the QUBIC SYSTEM QS-S25 Advanced Motion Cockpit, a 6-DOF motion platform designed for 
//                             high-fidelity simulation experiences.
//                         </p>
//                     </div>
                
//                 </div>
//             </div>
//         </div>
//         <Footer/>
//         </>
//     );
// }
import React from "react";
import Image from "next/image";
import { Video, Zap, Target, Users, Cpu, Gamepad2, Trophy, AlertCircle, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

export default function AirboatPage() {
    return (
        <>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 bg-[url('/images/swampocalypse.jpg')] opacity-30 bg-cover bg-center"></div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 mx-1">
                        VR Experience
                    </div>
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 mx-1">
                        Unity
                    </div>
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 mx-1">
                        Motion Simulation
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-3 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                        Swampocalypse
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A location-based VR experience combining environmental storytelling, 
                        motion simulation, and zombie survival in the post-apocalyptic Miami Everglades.
                    </p>
                </div>
            </div>

            {/* ========== SECTION 1: INTRO ========== */}
            
            {/* Project Overview Cards */}
            <div className="bg-gradient-to-b from-white to-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-emerald-600 font-bold text-sm mb-2">PROJECT TYPE</div>
                            <div className="text-slate-900 font-semibold text-lg">Location-Based VR Experience</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-emerald-600 font-bold text-sm mb-2">DURATION</div>
                            <div className="text-slate-900 font-semibold text-lg">Fall 2024 - Present</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-emerald-600 font-bold text-sm mb-2">MY ROLE</div>
                            <div className="text-slate-900 font-semibold text-lg">Lead Developer & Team Lead</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-emerald-600 font-bold text-sm mb-2">PLATFORM</div>
                            <div className="text-slate-900 font-semibold text-lg">Meta Quest 3 + Motion Rig</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Problem & Audience */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* The Problem */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
                        </div>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>
                                The Everglades, one of the most distinctive ecosystems in the US, faces mounting threats from 
                                contamination, invasive species, and pollution. These critical environmental issues often fail 
                                to connect with audiences through traditional outreach methods.
                            </p>
                            <p className="font-semibold text-slate-900">
                                How can we make environmental education engaging and memorable while delivering an immersive 
                                entertainment experience?
                            </p>
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Target Audience</h2>
                        </div>
                        <ul className="space-y-3 text-slate-700 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>VR Enthusiasts:</strong> Looking for cutting-edge location-based experiences</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Environmental Advocates:</strong> Interested in conservation and sustainability</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Action Game Players:</strong> Seeking exciting zombie-survival gameplay</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Educational Institutions:</strong> Museums and schools seeking engaging learning tools</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* About the Project */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">Project Overview</h2>
                        <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Swampocalypse is a location-based VR experience set in a post-apocalyptic Miami Everglades. 
                            Players pilot a rusty airboat through dangerous and polluted swamps, using the Qubic QS-S25 
                            motion rig, which mirrors in-game movement for a fully immersive experience.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            The journey begins with the player being placed in the boat, given a weapon, and tasked with 
                            stopping the pollution that a nearby factory is emitting. During the journey towards the factory, 
                            zombies swarm the player and damage the boat, preventing the user from reaching the objective.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Players must traverse through the water, avoiding enemies and obstacles, and shut off the factory 
                            pipes before the pollution gets worse—all while learning important environmental facts.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/airboat/SwampocalypseThumbnail.png"
                                alt="Swampocalypse gameplay"
                                width={700}
                                height={467}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Composition */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Team & Collaboration</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">A multidisciplinary team bringing diverse expertise</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <div className="font-semibold text-slate-900 mb-1">Lead Developer</div>
                            <div className="text-sm text-slate-600">Unity & C# Development</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
                            <div className="font-semibold text-slate-900 mb-1">3D Modelers</div>
                            <div className="text-sm text-slate-600">Environment & Assets</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                            <div className="font-semibold text-slate-900 mb-1">UI/UX Designers</div>
                            <div className="text-sm text-slate-600">Interface Design in Figma</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                            <div className="font-semibold text-slate-900 mb-1">Sound Engineers</div>
                            <div className="text-sm text-slate-600">Audio & Sound Design</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== SECTION 2: CONTENT (Process & Methods) ========== */}

            {/* Gameplay Video Section */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Gameplay Experience</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">See the experience in action</p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/GFWiE44Igk4?si=PbhBEUxVGQ78LVVP" 
                            title="Swampocalypse gameplay video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Game Rules & Objectives */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Rules & Objectives</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600">Balancing action with education</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                        The main purpose is to deliver a fun and educational experience, where players eliminate zombies 
                        while learning about environmental conservation. Each level presents unique obstacles and events 
                        that players must navigate to stop the factory&apos;s pollution.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Maintain boat health</strong> to avoid destruction</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Stop the factory</strong> from further polluting the environment</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Complete objectives</strong> within time limits</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Eliminate zombies</strong> and mutated creatures</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Avoid harming</strong> native species</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Learn environmental facts</strong> throughout the journey</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Showcase */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Visual Design Elements</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">3D models and environments</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Airboat Model</h3>
                                <Image
                                    src="/images/airboat/airboat.png"
                                    alt="Airboat model"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Model of the airboat in the experience, modeled in Maya and textured in Substance Painter.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Zombies</h3>
                                <Image
                                    src="/images/airboat/zombies.png"
                                    alt="Zombies in the game"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Models of the zombies, sourced from the Unity Asset Store, integrated with custom animations and ragdoll physics to create dynamic enemy behavior.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Alligator</h3>
                                <Image
                                    src="/images/airboat/gator.png"
                                    alt="Alligator model"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Alligator model sourced from the Unity Asset Store. Implemented in experience to add environmental authenticity and additional threats for the player to navigate around, enhancing immersion and gameplay variety.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Mutated Iguana</h3>
                                <Image
                                    src="/images/airboat/finalBoss.png"
                                    alt="Mutated Iguana model"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Mutated Iguana model sourced from the Unity Asset Store. Implemented as the final boss character in the experience, featuring custom animations and challenging gameplay mechanics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process & Methods */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Process</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">From concept to implementation</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-emerald-600 font-bold text-xl">1</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Field Research</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        Before starting development, our team conducted field testing in the actual Everglades. 
                                        We took an airboat tour to experience firsthand what it&apos;s like to pilot through the Miami 
                                        Everglades, studying the movement, sounds, and environment to ensure authentic recreation 
                                        in VR.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-blue-600 font-bold text-xl">2</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Iterative Design</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Originally conceived as a racing simulator, the project evolved through team collaboration. 
                                        We pivoted to an environmental zombie-survival experience that better served our dual goals 
                                        of entertainment and education.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed">
                                        Weekly team meetings allowed us to discuss progress, integrate new assets, and plan next 
                                        steps, ensuring all disciplines worked in harmony.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-purple-600 font-bold text-xl">3</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Technical Development</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        Built in Unity using C#, incorporating assets from the Unity Asset Store, Sketchfab, 
                                        MeshyAI, and custom models from our 3D team. Sound design was crafted in-house, and UI 
                                        prototyped in Figma before implementation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-orange-600 font-bold text-xl">4</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Hardware Integration</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        Started with an Arduino-based in-house motion rig, working closely with engineers to 
                                        synchronize movement. Later upgraded to the professional Qubic QS-S25 system, developing 
                                        custom scripts to translate boat physics into realistic motion platform movements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Role & Responsibilities */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">My Role & Responsibilities</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Lead Developer & Team Lead
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-emerald-100 rounded-lg">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Leadership</h3>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                            As lead developer, I&apos;m responsible for nearly all aspects of the Unity application—implementing 
                            everyone&apos;s work in the game and connecting the program to the physical rig. I lead a talented team 
                            of 3D modelers, UI/UX designers, and sound engineers through weekly meetings where we discuss progress, 
                            implementation strategies, and future steps.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 shadow-lg text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-white/20 rounded-lg">
                                <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Impact</h3>
                        </div>
                        <p className="leading-relaxed">
                            Collaborating with a great team really inspires and motivates me to do my best work. It&apos;s incredibly 
                            rewarding to see all our efforts come together to create an experience that&apos;s both entertaining and 
                            educational, potentially changing how people think about environmental conservation.
                        </p>
                    </div>
                </div>

                {/* Technical Achievements */}
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">Technical Deliverables</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Gamepad2 className="w-6 h-6" />,
                                title: "Vehicle Movement",
                                description: "After field testing at an airboat tour in the Everglades, I implemented realistic boat physics and controls to match the feel of driving an airboat through the Miami Everglades, accounting for how airboats are controlled and their unique water physics."
                            },
                            {
                                icon: <Target className="w-6 h-6" />,
                                title: "Weapon System",
                                description: "Developed multiple weapons (crossbow, shotgun, assault rifle) with unique mechanics. Designed all weapon interactions, firing mechanics, and the ammo system to create varied gameplay experiences."
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Enemy AI",
                                description: "Created zombie enemies with health systems, movement patterns, and ragdoll physics. Designed a multi-stage boss with various attack patterns for the climactic final scene."
                            },
                            {
                                icon: <Video className="w-6 h-6" />,
                                title: "Level Design",
                                description: "Transformed the original racing concept into environmental zombie-focused stages. Each level incorporates authentic Everglades elements with apocalyptic twists, balancing realism with entertainment."
                            },
                            {
                                icon: <Cpu className="w-6 h-6" />,
                                title: "Optimization",
                                description: "Implemented object culling and environment density optimization to maintain maximum frame rate on Meta Quest 3. Used Unity's terrain editor, Mesh Baker, and strategic fog placement to balance visual quality with performance."
                            },
                            {
                                icon: <Cpu className="w-6 h-6" />,
                                title: "Hardware Integration",
                                description: "Integrated software with physical motion rigs—from Arduino-based in-house systems to the Qubic platform using MotionSDK. Translated boat physics into synchronized rig movement for full immersion."
                            }
                        ].map((achievement, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                                        {achievement.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900">{achievement.title}</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Challenges */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Challenges & Solutions</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Pushing boundaries and learning through adversity</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-yellow-100 rounded-lg">
                                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Motion Sickness</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> VR-induced motion sickness is amplified when driving vehicles.</p>
                                <p><strong>Solution:</strong> Implemented dynamic vignette effects that darken screen edges based on movement. The physical motion rig synchronization further reduced sickness by aligning virtual and physical motion.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <Cpu className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Performance Constraints</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> Meta Quest 3 hardware limitations restricted environmental complexity.</p>
                                <p><strong>Solution:</strong> Balanced realism with performance using Unity&apos;s terrain editor, Mesh Baker for optimization, strategic fog placement, and intelligent object culling to maintain maximum frame rate.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Zap className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Hardware Integration</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> Limited documentation on custom motion rig development and integration.</p>
                                <p><strong>Solution:</strong> Through trial and error and team collaboration, learned Arduino systems, servo motors, and professional motion rig APIs. Developed custom scripts to translate physics accurately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* The Rig Section */}
            <div className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">The Motion Platform</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-slate-300 text-lg">Hardware integration for ultimate immersion</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/qubic.webp"
                                alt="QUBIC SYSTEM QS-S25 Motion Cockpit"
                                width={700}
                                height={467}
                                className="w-full h-auto"
                                quality={75}
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                                6-DOF Motion Platform
                            </div>
                            <h3 className="text-3xl font-bold mb-6">QUBIC SYSTEM QS-S25</h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                We use the QUBIC SYSTEM QS-S25 Advanced Motion Cockpit, a 6-DOF (six degrees of freedom) 
                                motion platform designed for high-fidelity simulation experiences.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                This advanced motion platform delivers precise, synchronized movement that perfectly 
                                matches the in-game airboat physics, creating an unparalleled sense of immersion as 
                                players navigate through the treacherous swamps. The rig moves in real-time with the 
                                virtual boat, amplifying every turn, bump, and wave.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== SECTION 3: CLOSURE ========== */}

            {/* Key Learnings */}
            <div className="bg-gradient-to-b from-white to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Learnings</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">What this project taught me</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Lightbulb className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Technical Growth</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                These challenges forced me outside my comfort zone, teaching me hardware integration, 
                                performance optimization for VR, and advanced Unity physics—skills I wouldn&apos;t have gained 
                                from traditional projects. Challenges aren&apos;t obstacles; they&apos;re opportunities for growth.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Users className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Collaboration Power</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Working with talented people from different backgrounds taught me the irreplaceable value 
                                of diverse perspectives. Everyone&apos;s unique skillsets merged to create something none of us 
                                could have built alone. This reinforced that collaboration is essential in any meaningful endeavor.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Target className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Purpose-Driven Development</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Creating something that addresses real-world environmental issues gave the work deeper meaning. 
                                I learned that games can be powerful vehicles for social impact, making critical topics engaging 
                                and memorable in ways traditional media cannot.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Iterative Design</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                The pivot from racing simulator to environmental adventure demonstrated that great ideas 
                                evolve. Being flexible and responsive to feedback—from teammates and playtesting—ultimately 
                                creates better experiences than rigidly following an initial plan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Reflection */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Reflection & Impact</h2>
                    <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p className="text-emerald-50">
                            I chose to showcase Swampocalypse because it represents everything I&apos;ve learned and achieved as 
                            a game developer. This project allowed me to merge storytelling, game design, and technical skills 
                            into a cohesive experience that entertains while educating about critical environmental issues.
                        </p>
                        <p className="text-emerald-50">
                            Beyond the technical achievements, this project gave me a profound sense of purpose. The Everglades 
                            faces real threats from pollution and invasive species—issues that often fail to resonate through 
                            traditional outreach. By transforming environmental education into an engaging adventure, we created 
                            something that might actually change how people think about conservation.
                        </p>
                        <p className="text-white font-semibold text-xl">
                            This isn&apos;t just a game—it&apos;s a demonstration of how interactive media can inspire real-world change.
                        </p>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Next Steps</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 shadow-lg border border-emerald-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Expand Content</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Add more levels exploring different Everglades ecosystems, each highlighting specific 
                            environmental challenges and conservation methods.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Partnerships</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Collaborate with environmental organizations and museums to deploy the experience as an 
                            educational tool, reaching wider audiences.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border border-purple-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Refine Experience</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Continue gathering user feedback to improve motion comfort, gameplay balance, and 
                            educational effectiveness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}