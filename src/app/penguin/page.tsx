"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Music, Zap, Calendar, Image as ImageIcon, Video, Code, Sparkles, Play, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

// Developer Log Entries - ADD NEW ENTRIES AT THE TOP!
const devLogs = [
    {
        date: "May 2, 2026",
        title: "Snowballs, Staggers, & NPC Slides",
        type: ["Development"],
        description: "Got stagger and hit animations working for the seal enemy. Fixed bugs. Added a snowball throw mechanic. Penguin NPC now slides around.",
        images: [],
        videos: [{ src: "https://drive.google.com/file/d/1yGVa_SuO_YgusffhDTRVoDs8cKDTrvan/preview", title: "Demo 1" }],
        tags: ["Unity", "C#", "Bug Fix", "Combat", "NPC"]
    },
    {
        date: "May 1, 2026",
        title: "Seal Enemy & Combat Systems",
        type: ["Development", "Modeling & Animations"],
        description: "Modeled the seal enemy and imported it into the game. Built a knockback system with animations. Got shielding mechanic working for the player.",
        images: [{src: "/images/penguin/BlenderSeal.png", alt: "Seal model in Blender"}],
        videos: [],
        tags: ["Blender", "Unity", "Combat", "Enemy AI", "Animation"]
    },
    {
        date: "April 30, 2026",
        title: "NPCs, Health & A Broken Package",
        type: ["Development"],
        description: "Made a penguin NPC and added a health collectable with a basic pickup tutorial. Added space-to-continue text in the dialogue line presenter and tweaked the walk animation. Tried importing a food asset pack which broke the entire project — had to revert to a pre-GitHub backup and recover everything.",
        images: [],
        videos: [],
        tags: ["Unity", "Yarn Spinner", "Dialogue", "NPC", "Bug Fix"]
    },
    {
        date: "April 29, 2026",
        title: "Combat, Dialogue & Game State",
        type: ["Development"],
        description: "Got sword slash effect working. Imported sword models and added attack animations and mechanics. Built an interaction mechanic and added a Zelda-style icon popup animation. Added ice rocks to the environment. Modularized item scripting and built a collectables system. Created a GameState manager to cleanly separate NPC dialogue from item pickup dialogue.",
        images: [],
        videos: [],
        tags: ["Unity", "C#", "Combat", "Yarn Spinner", "Game Architecture", "VFX"]
    },
    {
        date: "April 28, 2026",
        title: "Project Kickoff",
        type: ["Planning", "Development", "Modeling & Animations"],
        description: "Concept: top-down game where you play as a penguin defending against seals — inspired by Link's Awakening. Created the Unity project and got character movement up and running. Modeled the penguin character with idle, walk, attack, and dash animations.",
        images: [{src: "/images/penguin/BlenderPenguin.png", alt: "Penguin model in Blender"}],
        videos: [],
        tags: ["Concept", "Game Design", "Unity", "Blender", "Animation"]
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

export default function PenguinPage() {
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
            <div className="relative bg-gradient-to-br from-blue-950 via-teal-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
                </div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 animate-pulse">
                        🧊 In Development · Unity · Blender
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Penguin Game
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        A top down RPG where you play as a penguin, defending his icy home. Inspired by Link's Awakening
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
                                                        {log.type.map((t, i) => (
                                                            <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold border ${typeColors[t] || 'bg-gray-100 text-gray-700'}`}>
                                                                {t}
                                                            </span>
                                                        ))}
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
                                    This untitled penguin game will be a top-down RPG where you play as a penguin attempting to save his home,
                                    fighting enemies, facing challenges, and learning things about his environment.
                                </p>
                                <p>
                                    This game is inspired my The Legend of Zelda: Links Awakening, with similar design, concept, and mechanics.
                                </p>
                                
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/penguin/thumbnail.png"
                                    alt="Game concept - Character with guitar"
                                    width={700}
                                    height={467}
                                    className="w-full h-auto"
                                />
                            </div>
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
                            src="https://drive.google.com/file/d/1yGVa_SuO_YgusffhDTRVoDs8cKDTrvan/preview" 
                            title="Penguin game demo 1"  
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
                                    <Sparkles className="w-6 h-6 text-blue-300" />
                                    The Penguin
                                </h3>
                                <div className="mb-6 rounded-xl overflow-hidden bg-slate-900">
                                    <Image
                                        src="/images/penguin/BlenderPenguin.png"
                                        alt="Character model in Blender"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
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
                                        src="/images/penguin/BlenderSeal.png"
                                        alt="Seal model in Blender"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
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