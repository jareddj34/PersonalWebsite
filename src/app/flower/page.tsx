import React from "react";
import Image from "next/image";
import { Video } from "lucide-react";
import VideoPlayer from "../../components/VideoPlayer";
import {Button} from "../../components/ui/button";
import Footer from "@/components/Footer";


export default function FlowerPage() {
    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-start mt-14">
                    <h1 className="text-center text-6xl font-bold mb-6">Flower Adventures</h1>
        
                    <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                    <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                        <div className="md:w-1/2">
                            <p className="text-justify justify-center items-center">Flower Adventures was my first ever project created in Unity. I created it for my Game Programming class,
                                where I learned all the basics and fundamentals of game development, and Unity2D. It is a 2D platformer, where the player controls a flower, traversing through
                                obstacles, and killing bugs on the way.
                            </p>
                            <div className="mt-4">
                                <a href="https://play.unity.com/en/games/258d4340-f91a-4763-8139-aa914a298d9f/webgl-builds" target="_blank"><Button size="lg"><p className="text-xl">Play it!</p></Button></a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/images/FlowerAdventures.png"
                                alt="Flower Adventures"
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
                            <div className="w-full aspect-video">
                                <iframe width="1120" height="630" src="https://www.youtube.com/embed/MElVeqwKQHM?si=m-4O8XP-gfRm9QGW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20 justify-center text-center">
                        <h2 className="text-center text-3xl font-bold mb-2">Creating it</h2>
                        <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                        <p>
                            All the images you see were created from scratch in Illustrator. I created all the sprites, backgrounds, and props myself.
                        </p>
                        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
                            <div className="md:w-1/2">
                                <Image
                                    src="/images/flowersprites.png"
                                    alt="Flower Sprites"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                            
                            <div className="md:w-1/2">
                                <Image
                                    src="/images/flowerprops.png"
                                    alt="Flower Sprites"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="md:w-1/2">
                                <Image
                                    src="/images/flowerbg.png"
                                    alt="Flower Sprites"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                            
                        </div>
                    </div>
        
        
                </div>
                <Footer />
                </>
    )
}