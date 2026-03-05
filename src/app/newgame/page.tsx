"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Music, Zap, Calendar, Image as ImageIcon, Video, Code, Sparkles, Play, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

// Developer Log Entries - ADD NEW ENTRIES AT THE TOP!
const devLogs = [
    {
        date: "March 3, 2026",
        title: "Jump Animations",
        type: "Modeling & Animations",
        description: "Created the jump animations. Separated into 3 parts - takeoff, in-air, landing.",
        images: [
            { src: "/images/guitar-game/jumpAnimsSS.png", alt: "Jump animations in Blender" },
        ],
        videos: [

        ],
        tags: ["Blender", "Animations"]
    },
    {
        date: "February 28, 2026",
        title: "Equip Animations",
        type: "Modeling & Animations",
        description: "Created the equip animations for the player to equip the guitar from characters back. Integrated into Unity.",
        images: [

        ],
        videos: [
            { src: "https://drive.google.com/file/d/1IrM5JSvF830b2oF3plpdcIiK3q6IeFzh/preview", title: "Equip Animations" }
        ],
        tags: ["Unity", "Animations", "State Machines"]
    },
    {
        date: "February 26, 2026",
        title: "Imported Models into Unity",
        type: "Development",
        description: "Imported models into Unity. Integrated animations to work with character movement scripts. Created UpperBody layer masks to combine multiple animations. Added music note effect.",
        images: [
            { src: "/images/guitar-game/characterBlenderSS.png", alt: "Character model in Blender" },
            { src: "/images/guitar-game/guitarBlenderSS.png", alt: "Electric guitar model in Blender" },
            { src: "/images/guitar-game/stateMachineSS.png", alt: "Animation state machine in Unity" }
        ],
        videos: [
            { src: "https://drive.google.com/file/d/1W2eJlfrj5SmWE2jGeAfRhgRLS47R2i_l/preview", title: "Character movement testing" }
        ],
        tags: ["Unity", "Animations", "State Machines"]
    },
    {
        date: "February 25, 2026",
        title: "Character & Guitar Modeled in Blender",
        type: "Modeling & Animations",
        description: "Created the main character and electric guitar models in Blender. The character has a punk rock style with spiky hair, while the guitar is a classic red electric design. Animated character with walk, idle, strum animations.",
        images: [
            { src: "/images/guitar-game/characterBlenderSS.png", alt: "Character model in Blender" },
            { src: "/images/guitar-game/guitarBlenderSS.png", alt: "Electric guitar model in Blender" }
        ],
        videos: [],
        tags: ["Blender", "Character Design", "3D Modeling", "Animation"]
    },
    {
        date: "February 20, 2026",
        title: "Project Kickoff",
        type: "Planning",
        description: "Started development on a music-based action game where guitar strums shoot musical notes to defeat enemies. Outlined core mechanics and visual style. Imported Unity starter asset package for character movement, camera follow.",
        images: [],
        videos: [],
        tags: ["Concept", "Game Design", "Unity"]
    }
];

// Type colors for visual variety
const typeColors: Record<string, string> = {
    "Modeling & Animations": "bg-purple-100 text-purple-700 border-purple-200",
    "Development": "bg-blue-100 text-blue-700 border-blue-200",
    "Planning": "bg-green-100 text-green-700 border-green-200",
    "Audio": "bg-pink-100 text-pink-700 border-pink-200",
    "Art": "bg-orange-100 text-orange-700 border-orange-200"
};

export default function GuitarGamePage() {
    const [expandedLogs, setExpandedLogs] = useState<number[]>([0]); // First entry expanded by default

    const toggleLog = (index: number) => {
        setExpandedLogs(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-purple-950 via-pink-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
                </div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 animate-pulse">
                        🎸 In Development · Unity · Blender
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Rhythm Warrior
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        A music-based action game where guitar strums transform into powerful musical projectiles. 
                        Rock out while defeating enemies with the power of sound!
                    </p>
    
                </div>
            </div>

            {/* Developer Log Section */}
            <div className="bg-gradient-to-b from-white to-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Calendar className="w-8 h-8 text-purple-600" />
                            <h2 className="text-4xl font-bold text-slate-900">Development Log</h2>
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Follow along with the journey from concept to playable game</p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-transparent hidden md:block"></div>

                        {/* Log entries */}
                        <div className="space-y-8">
                            {devLogs.map((log, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block transform -translate-x-1.5"></div>

                                    {/* Log card */}
                                    <div className="md:ml-20 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        {/* Header */}
                                        <div 
                                            className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                                            onClick={() => toggleLog(index)}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${typeColors[log.type] || 'bg-gray-100 text-gray-700'}`}>
                                                            {log.type}
                                                        </span>
                                                        <span className="text-sm text-slate-500 flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {log.date}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{log.title}</h3>
                                                    <p className="text-slate-600 leading-relaxed">{log.description}</p>
                                                </div>
                                                {(log.images.length > 0 || log.videos.length > 0) && (
                                                    <button className="flex-shrink-0 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                                        {expandedLogs.includes(index) ? (
                                                            <ChevronUp className="w-6 h-6 text-slate-400" />
                                                        ) : (
                                                            <ChevronDown className="w-6 h-6 text-slate-400" />
                                                        )}
                                                    </button>
                                                )}
                                            </div>

                                            {/* Tags */}
                                            {log.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {log.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Expanded content */}
                                        {expandedLogs.includes(index) && (log.images.length > 0 || log.videos.length > 0) && (
                                            <div className="border-t border-slate-200 p-6 bg-slate-50">
                                                {/* Images */}
                                                {log.images.length > 0 && (
                                                    <div className="mb-6">
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <ImageIcon className="w-5 h-5 text-purple-600" />
                                                            <h4 className="font-bold text-slate-900">Images ({log.images.length})</h4>
                                                        </div>
                                                        <div className={`grid ${log.images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
                                                            {log.images.map((img, imgIndex) => (
                                                                <div key={imgIndex} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                                                    <Image
                                                                        src={img.src}
                                                                        alt={img.alt}
                                                                        width={800}
                                                                        height={600}
                                                                        className="w-full h-auto"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Videos */}
                                                {log.videos.length > 0 && (
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <Video className="w-5 h-5 text-pink-600" />
                                                            <h4 className="font-bold text-slate-900">Videos ({log.videos.length})</h4>
                                                        </div>
                                                        <div className="space-y-4">
                                                            {log.videos.map((vid, vidIndex) => (
                                                                <div key={vidIndex} className="rounded-xl overflow-hidden shadow-md">
                                                                    <iframe 
                                                                        className="w-full aspect-video"
                                                                        src={vid.src}
                                                                        title={vid.title}
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    ></iframe>
                                                                    {vid.title && (
                                                                        <div className="bg-slate-100 px-4 py-2 text-sm text-slate-700 font-medium">
                                                                            {vid.title}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Concept Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Game Concept</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">The Vision</h3>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">Rhythm Warrior</strong> is a unique blend of music and action gameplay. 
                                    Players control a guitar-wielding hero who battles enemies using the power of music.
                                </p>
                                <p>
                                    Every strum of the guitar launches musical notes as projectiles, creating a rhythmic combat 
                                    system where timing and beat awareness are key to victory.
                                </p>
                                <p>
                                    The game combines fast-paced action with musical creativity, allowing players to defeat 
                                    enemies while creating their own soundtrack.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/guitar-game/GameplaySS.png"
                                    alt="Game concept - Character with guitar"
                                    width={700}
                                    height={467}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Core Mechanics */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Music className="w-6 h-6 text-purple-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Musical Combat</h4>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Strum your guitar to shoot musical notes at enemies. Each note becomes a projectile, 
                                creating rhythm-based combat mechanics.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-pink-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-pink-100 rounded-lg">
                                    <Zap className="w-6 h-6 text-pink-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Power Chords</h4>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Special attacks and abilities triggered by hitting the right rhythm and combos. 
                                Master the music to unlock powerful moves.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-cyan-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-cyan-100 rounded-lg">
                                    <Sparkles className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Creative Expression</h4>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Your playstyle creates the soundtrack. Fight enemies while composing your own 
                                musical masterpiece in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Current Demo Video */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Demo Video</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">See the game in action!</p>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://drive.google.com/file/d/1IrM5JSvF830b2oF3plpdcIiK3q6IeFzh/preview" 
                            title="VR Cognitive Tests walkthrough video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>

                </div>
            </div>

            {/* Character & Assets Showcase */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Character & Assets</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Custom 3D models created in Blender</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Character */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6 text-purple-600" />
                                    The Protagonist
                                </h3>
                                <div className="mb-6 rounded-xl overflow-hidden bg-slate-900">
                                    <Image
                                        src="/images/guitar-game/characterBlenderSS.png"
                                        alt="Character model in Blender"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-3 text-slate-700">
                                    <p className="font-semibold text-slate-900">Design Features:</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>Spiky Hair:</strong> Iconic punk rock aesthetic with dramatic hair spikes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>Low-Poly Style:</strong> Clean, stylized geometry optimized for performance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>Vibrant Colors:</strong> Red shirt, blue shorts, red shoes for bold visual appeal</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span><strong>Rigged & Ready:</strong> Modeled in Blender with rigging prepared for animation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Guitar */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Music className="w-6 h-6 text-pink-600" />
                                    The Electric Guitar
                                </h3>
                                <div className="mb-6 rounded-xl overflow-hidden bg-slate-900">
                                    <Image
                                        src="/images/guitar-game/guitarBlenderSS.png"
                                        alt="Guitar model in Blender"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="space-y-3 text-slate-700">
                                    <p className="font-semibold text-slate-900">Design Features:</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-600 mt-1">•</span>
                                            <span><strong>Classic Shape:</strong> Stratocaster-inspired electric guitar design</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-600 mt-1">•</span>
                                            <span><strong>Bold Red Finish:</strong> Vibrant red body with white pickguard</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-600 mt-1">•</span>
                                            <span><strong>Detailed Fretboard:</strong> Individual strings and fret markers modeled</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-600 mt-1">•</span>
                                            <span><strong>Weapon & Instrument:</strong> Dual purpose as both musical tool and combat weapon</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-purple-600" />
                                Development
                            </h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Unity Game Engine</li>
                                <li>• C# Programming</li>
                                <li>• Unity Input System</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-pink-600" />
                                3D Assets
                            </h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Blender 3D</li>
                                <li>• Character Modeling</li>
                                <li>• Asset Rigging</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Music className="w-5 h-5 text-cyan-600" />
                                Audio (Planned)
                            </h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• FMOD / Wwise</li>
                                <li>• Dynamic Music</li>
                                <li>• Sound Effects</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Play className="w-5 h-5 text-orange-600" />
                                Platform (TBD)
                            </h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• PC (Windows)</li>
                                <li>• Consoles (Maybe)</li>
                                <li>• Mobile (Exploring)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Follow the Development Journey</h2>
                    <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                        This game is in early development. Check back regularly for new updates, gameplay videos, 
                        and behind-the-scenes development logs as the project evolves!
                    </p>
                    <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <p className="text-lg font-semibold">Latest Update: {devLogs[0].date}</p>
                        <p className="text-purple-200 text-sm mt-1">{devLogs[0].title}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}