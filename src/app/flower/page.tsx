// import React from "react";
// import Image from "next/image";
// import { Video } from "lucide-react";
// import VideoPlayer from "../../components/VideoPlayer";
// import {Button} from "../../components/ui/button";
// import Footer from "@/components/Footer";


// export default function FlowerPage() {
//     return (
//         <>
//         <div className="min-h-screen flex flex-col items-center justify-start mt-14">
//                     <h1 className="text-center text-6xl font-bold mb-6">Flower Adventures</h1>
        
//                     <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
//                     <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                     <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                         <div className="md:w-1/2">
//                             <p className="text-justify justify-center items-center">Flower Adventures was my first ever project created in Unity. I created it for my Game Programming class,
//                                 where I learned all the basics and fundamentals of game development, and Unity2D. It is a 2D platformer, where the player controls a flower, traversing through
//                                 obstacles, and killing bugs on the way.
//                             </p>
//                             <div className="mt-4">
//                                 <a href="https://play.unity.com/en/games/258d4340-f91a-4763-8139-aa914a298d9f/webgl-builds" target="_blank"><Button size="lg"><p className="text-xl">Play it!</p></Button></a>
//                             </div>
//                         </div>
//                         <div className="md:w-1/2">
//                             <Image
//                                 src="/images/FlowerAdventures.png"
//                                 alt="Flower Adventures"
//                                 width={600}
//                                 height={400}
//                                 className="rounded-lg"
//                             />
//                         </div>
//                     </div>
        
//                     <div className="mb-20">
//                         <h2 className="text-center text-3xl font-bold mb-2">Gameplay</h2>
//                         <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                         <div className="px-4 space-y-10">
//                             <div className="w-full aspect-video">
//                                 <iframe width="1120" height="630" src="https://www.youtube.com/embed/MElVeqwKQHM?si=m-4O8XP-gfRm9QGW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mb-20 justify-center text-center">
//                         <h2 className="text-center text-3xl font-bold mb-2">Creating it</h2>
//                         <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                         <p>
//                             All the images you see were created from scratch in Illustrator. I created all the sprites, backgrounds, and props myself.
//                         </p>
//                         <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                             <div className="md:w-1/2">
//                                 <Image
//                                     src="/images/flowersprites.png"
//                                     alt="Flower Sprites"
//                                     width={600}
//                                     height={400}
//                                     className="rounded-lg"
//                                 />
//                             </div>
                            
//                             <div className="md:w-1/2">
//                                 <Image
//                                     src="/images/flowerprops.png"
//                                     alt="Flower Sprites"
//                                     width={600}
//                                     height={400}
//                                     className="rounded-lg"
//                                 />
//                             </div>

//                             <div className="md:w-1/2">
//                                 <Image
//                                     src="/images/flowerbg.png"
//                                     alt="Flower Sprites"
//                                     width={600}
//                                     height={400}
//                                     className="rounded-lg"
//                                 />
//                             </div>
                            
//                         </div>
//                     </div>
        
        
//                 </div>
//                 <Footer />
//                 </>
//     )
// }

import React from "react";
import Image from "next/image";
import { Gamepad2, Palette, Play, ExternalLink } from "lucide-react";
import { Button } from "../../components/ui/button";
import Footer from "@/components/Footer";

export default function FlowerPage() {
    return (
        <>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-pink-950 via-purple-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 bg-[url('/images/FlowerAdventures.png')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                        2D Platformer · Unity · Game Programming
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-3 bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
                        Flower Adventures
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        My first ever Unity project - A 2D platformer where players control a flower, 
                        traversing through obstacles and battling bugs along the way.
                    </p>
                    <div className="mt-8">
                        <a href="https://play.unity.com/en/games/258d4340-f91a-4763-8139-aa914a298d9f/webgl-builds" target="_blank" rel="noopener noreferrer">
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 group"
                            >
                                <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                                Play Now!
                                <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">About the Project</h2>
                        <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Flower Adventures was my first ever project created in Unity. I created it for my Game Programming 
                            class, where I learned all the basics and fundamentals of game development and Unity 2D.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            It is a 2D platformer where the player controls a flower, traversing through obstacles and killing 
                            bugs on the way. This project marked the beginning of my game development journey and taught me 
                            essential Unity skills.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/FlowerAdventures.png"
                                alt="Flower Adventures gameplay"
                                width={700}
                                height={467}
                                className="w-full h-auto"
                                quality={75}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gameplay Video Section */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Gameplay</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Watch the gameplay in action</p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/MElVeqwKQHM?si=m-4O8XP-gfRm9QGW" 
                            title="Flower Adventures gameplay video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Creating It Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Creating the Art</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        All the images you see were created from scratch in Adobe Illustrator. 
                        I designed every sprite, background, and prop myself to bring this world to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-pink-100 rounded-lg">
                                    <Gamepad2 className="w-5 h-5 text-pink-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">Character Sprites</h3>
                            </div>
                            <Image
                                src="/images/flowersprites.png"
                                alt="Flower character sprites"
                                width={600}
                                height={400}
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <Palette className="w-5 h-5 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">Props & Objects</h3>
                            </div>
                            <Image
                                src="/images/flowerprops.png"
                                alt="Game props and objects"
                                width={600}
                                height={400}
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Palette className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="font-bold text-slate-900">Backgrounds</h3>
                            </div>
                            <Image
                                src="/images/flowerbg.png"
                                alt="Game backgrounds"
                                width={600}
                                height={400}
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}