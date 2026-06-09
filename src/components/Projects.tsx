"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PhotoAlbum from "react-photo-album";
import { ExternalLink, Github, Youtube, Sparkles, Gamepad2, Globe, Film, Palette, Figma, Newspaper, LayoutGrid, Trophy, SquareCode } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Lazy loading component for Figma embeds
const LazyFigmaEmbed = ({ embedUrl, title }: { embedUrl: string; title: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setHasLoaded(true);
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '100px' // Start loading slightly before visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasLoaded]);

    return (
        <div ref={containerRef} className="w-full" style={{ minHeight: '650px' }}>
            {isVisible ? (
                <iframe
                    style={{ border: "none", backgroundColor: "transparent" }}
                    width="100%"
                    height={650}
                    src={embedUrl}
                    title={title}
                    allowFullScreen
                />
            ) : (
                <div className="w-full h-[650px] bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                        <Figma className="w-16 h-16 text-slate-400 mx-auto mb-4 animate-pulse" />
                        <p className="text-slate-600">Scroll down to load {title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

// All your original data
const websites = [
    {
        name: "Crabfit",
        description: "A personalized AI fitness trainer, tailored to each users needs.",
        image: "/images/CrabFit.png",
        github: "https://github.com/jareddj34/CrabFit",
        link: "",
        piclink: "https://youtu.be/5Et-1yUL3K8",
        youtubelink: "https://youtu.be/5Et-1yUL3K8",
    },
    {
        name: "Origin PC Website",
        description: "Updated and maintained the Origin PC website. Developed a new page showcasing the customizable aspects of the PCs.",
        image: "/images/OriginPC.png",
        github: "",
        link: "https://www.originpc.com/gaming/desktops/custom-pc-builder/",
        piclink: "https://www.originpc.com/gaming/desktops/custom-pc-builder/",
        youtubelink: "",
    },
    {
        name: "Kappa Theta Pi Website",
        description: "Website for Kappa Theta Pi, UMiami's first professional technology fraternity. Has info about events, members, etc.",
        image: "/images/KTP.png",
        github: "https://github.com/jareddj34/ktpmiami",
        link: "https://ktpmiami.com",
        piclink: "https://ktpmiami.com",
        youtubelink: "",
    },
    {
        name: "JamZ",
        description: "A document simplifier, making it easy for people to read long, confusing documents.",
        image: "/images/JamZ.png",
        github: "https://github.com/jareddj34/JamZ",
        link: "",
        piclink: "https://github.com/jareddj34/JamZ",
        youtubelink: "",
    },
];

const games = [
    {
        name: "Swampocalypse",
        description: "A VR airboat driving experience through a post-apocalyptic Everglades, fighting enemies and saving the environment along the way.",
        image: "/images/airboat/SwampocalypseThumbnail.png",
        github: "",
        link: "/airboat",
        piclink: "/airboat",
        youtubelink: "",
        featured: true,
    },
    
    {
        name: "Get Gator Back",
        description: "A 2D platformer where you play as Al or Ally the Alligator, and help them get back to their homes by exploring various environments and taking out invasive species along the way.",
        image: "/images/GetGatorBack.png",
        github: "",
        link: "https://steinvisionstudios.itch.io/get-gator-back",
        piclink: "https://steinvisionstudios.itch.io/get-gator-back",
        youtubelink: "",
        award: true,
    },
    {
        name: "Chicken Hunt",
        description: "A first person game where you hunt down chickens running loose in the land. Made in Unity.",
        image: "/images/ChickenHunt.png",
        github: "",
        link: "https://ppare34.itch.io/chicken-hunt",
        piclink: "https://ppare34.itch.io/chicken-hunt",
        youtubelink: "",
    },
    {
        name: "Penguins Peak",
        description: "A top down RPG where you play as a penguin, defending his icy home. Inspired by Link's Awakening.",
        image: "/images/penguin/thumbnail2.png",
        github: "",
        link: "/penguin",
        piclink: "/penguin",
        youtubelink: "",
        early: true,
    },
    {
        name: "Temikki Garden",
        description: "A mobile AR application to promote the emotional well-being of children during long hospital stays. Children can build, modify, and play in a living virtual garden while reminded of their accomplishments.",
        image: "/images/temikki.jpg",
        github: "",
        link: "/temikki",
        piclink: "/temikki",
        youtubelink: "",
    },
    {
        name: "Flower Adventures",
        description: "A video game I made for my Game Programming class. Focuses on a flower that fights bugs and traverses through obstacles. Created in Unity.",
        image: "/images/FlowerAdventures.png",
        github: "",
        link: "/flower",
        piclink: "/flower",
        youtubelink: "https://www.youtube.com/watch?v=MElVeqwKQHM",
    },
    {
        name: "AI Literacy",
        description: "This research explores how AI-driven, adaptive virtual reality learning experiences, co-designed with educators, can enhance literacy development through immersive, personalized, and engaging environments grounded in cognitive and learning sciences.",
        image: "/images/ai_literacy.png",
        github: "",
        link: "https://xr.miami.edu/labs/frl/research.html#ai-literacy",
        piclink: "https://xr.miami.edu/labs/frl/research.html#ai-literacy",
        youtubelink: "",
    },
    {
        name: "Atomic Chemical Structures",
        description: "A mixed reality experience for students to interact with atomic models first hand. Users can select atoms from the periodic table and examine their internal structures.",
        image: "/images/atomic.png",
        github: "",
        link: "",
        piclink: "https://vimeo.com/1151794143?share=copy&fl=sv&fe=ci",
        youtubelink: "https://vimeo.com/1151794143?share=copy&fl=sv&fe=ci",
    },
    {
        name: "Tests for Cognitive Impairment",
        description: "A Unity applications that puts the user through tests to detect if they have minor cognitive impairment of Alzheimer's disease. The application is ran through a VR headset, giving the user full immersion in the experience. Partnered with Dr. Ubbo Visser and Dr. Christine Lisetti.",
        image: "/images/VisserProjectThumbnail.png",
        github: "",
        link: "/cognitive",
        piclink: "/cognitive",
        youtubelink: "",
        featured: true,
    },
    {
        name: "ARchaeology",
        description: "ARchaeology is an augmented reality application designed for Meta Quest to bring paleontology to your own backyard! The app's hands-on gameplay allows the user to step into the role of an archaeologist by uncovering, digging, cleaning, and assembling dinosaur skeletons.",
        image: "/images/ARchaeology.png",
        github: "",
        link: "https://txp552.wixsite.com/archaeology",
        piclink: "https://txp552.wixsite.com/archaeology",
        youtubelink: "",
    },
    {
        name: "Plant Puzzles",
        description: "EARLY DEVELOPMENT | A reimagined version of the first game I created, Flower Adventures. Created in Unreal Engine.",
        image: "/images/PlantPuzzles.png",
        github: "",
        link: "https://drive.google.com/file/d/1OtDcQxWBTN3Y7287u3FzS6Dp8eELU2lD/view?usp=sharing",
        piclink: "https://drive.google.com/file/d/1OtDcQxWBTN3Y7287u3FzS6Dp8eELU2lD/view?usp=sharing",
        youtubelink: "",
        early: true,
    },
    {
        name: "Rythm Warrior",
        description: "EARLY DEVELOPMENT | A music-based action game where guitar strums transform into powerful musical projectiles. Rock out while defeating enemies with the power of sound!",
        image: "/images/guitar-game/GameplaySS.png",
        github: "",
        link: "/newgame",
        piclink: "/newgame",
        youtubelink: "",
        early: true,
    },
];

const animations = [
    {
        name: "Gambling Animation",
        description: "An animation on the effects that gambling has on people. Made for my Animation class, produced in After Effects, Illustrator, and Premiere.",
        image: "/images/gambling.png",
        github: "",
        link: "",
        piclink: "https://youtu.be/FMKl4py7z60",
        youtubelink: "https://youtu.be/FMKl4py7z60",
    },
    {
        name: "History of the Guitar Animation",
        description: "An animation on the brief history of the guitar. Made for my Animation class, produced in After Effects, Illustrator, and Premiere.",
        image: "/images/guitar.jpg",
        github: "",
        link: "",
        piclink: "https://www.youtube.com/watch?v=Z0c2h39RuyA",
        youtubelink: "https://www.youtube.com/watch?v=Z0c2h39RuyA",
    },
];

const blenderProjects = [
    {
        image: "/images/blender/DemoReelThumbnailW2026.jpg",
        alt: "Demo Reel",
        title: "Animation Demo Reel Winter 2026",
        description: "A compilation of various 3D animations I created throughout 2025, showcasing room transformations, character animations, and more. Created in Blender and Maya.",
        videoLink: "https://www.youtube.com/watch?v=05Dxjj-9tSU",
    },
    {
        image: "/images/blender/CactusThumbnailFinal.png",
        alt: "Cactus Animation Thumbnail",
        title: "Cactus Animation",
        description: "An animated cactus character showcasing personality and movement.",
        videoLink: "https://www.youtube.com/watch?v=C9jjvxcFIYo",
    },
    
    {
        image: "/images/blender/NutcrackerThumbnail.png",
        alt: "Nutcracker Animation",
        title: "Nutcracker",
        description: "A festive nutcracker animation bringing this classic character to life.",
        videoLink: "https://www.youtube.com/watch?v=npbupjoH3xc",
    },
    {
        image: "/images/blender/CatInBedroom.mp4",
        alt: "Cat In Bedroom Animation",
        title: "Cat In Bedroom",
        description: "Being one of the first models that I've created in Blender, I decided to improve upon it by animating the objects to fly in the screen, similar to the Airbnb commercials. The cat is also the first character I ever modeled and rigged, following Joey Carlino's Youtube tutorials.",
        videoLink: "https://www.youtube.com/shorts/uBzHTZ0ClMY",
    },
    {
        image: "/images/blender/NewBedroomReduced.mp4",
        alt: "Vibrant Living Room Animation",
        title: "Vibrant Living Room",
        description: "A colorful and vibrant isometric living room, with the objects soaring into the scene in unique ways.",
        videoLink: "https://www.youtube.com/shorts/s-HQNWTM_Wg",
    },
    {
        image: "/images/blender/LivingRoom.mp4",
        alt: "Catalogue Living Room Animation",
        title: "Catalogue Living Room",
        description: "I've always imagined this living room being shown in a catalogue of home decor inspiration. Again, another Airbnb style animation.",
        videoLink: "https://www.youtube.com/shorts/89Q6NvtoMKo",
    },
    
    {
        image: "/images/blender/CactusWalkingReduced.mp4",
        alt: "Cactus Walking Animation",
        title: "Cactus Walking",
        description: "One of my mothers favorite plants is a cactus. I wanted to create this model and animate it for her birthday. I have also implemented this character in the game I am currently developing.",
    },
    {
        image: "/images/blender/FoxWalk.mp4",
        alt: "Fox Walk",
        title: "Fox Walk",
        description: "Modeled a plushy, squishy red fox for an upcoming top-down 3D RPG game I am developing.",
        artstation: "https://ppare34.artstation.com/projects/vbnVq3"
    },
    {
        image: "/images/blender/guitarReduced.mp4",
        alt: "Guitar",
        title: "Guitar",
        description: "This was my first ever model made the Maya. I wanted to create an object from one of my favorite hobbies, which is playing the guitar. Modeled in Maya, textured in Substance Painter.",
    },
    {
        image: "/images/blender/typewriterwalkinggifreduced.mp4",
        alt: "Typewriter Walking Animation",
        title: "Typewriter Walking",
        description: "I found inspiration for this animation while browsing an art museum in Sedona, Arizona. There were metal sculptures of common antiques, that were morphed into characters with arms and legs.",
        videoLink: "https://www.youtube.com/watch?v=87x30FPKX1o",
    },
    {
        image: "/images/blender/rubikscubewalkingreduced.mp4",
        alt: "Rubik's Cube Walking Animation",
        title: "Rubik's Cube Walking",
        description: "Solving Rubik's Cubes is one of my longest and most cherished hobbies. Having a collection of over 100 cubes, I knew I had to incorporate one of the things I identify with into my modeling and animation.",
        videoLink: "https://www.youtube.com/watch?v=pONAtAiO5_o&pp=ygURamFyZWQgZGUgbW9udGVpcm8%3D",
    },
    {
        image: "/images/blender/MikeRun.mp4",
        alt: "Mike Running",
        title: "Mike Wazowski Running",
        description: "A model of Mike Wazowksi from the Monsters movies that I found. Rigged it, and animated in the same style as in the movies.",
        artstation: "https://ppare34.artstation.com/projects/AZmJRo"
    },
    {
        image: "/images/blender/You_Are_A_Toy.mp4",
        alt: "Woody - You are a toy!",
        title: "Woody - You are a toy!",
        description: "Model of Woody from Toy Story. Decided to recreate my favorite scene from the movie - YOU ARE A TOY!",
        artstation: "https://ppare34.artstation.com/projects/wrzBBg"
    },
    {
        image: "/images/blender/BuzzFall.mp4",
        alt: "Buzz Falling",
        title: "Buzz Lightyear",
        description: "Model of Buzz from Toy Story. Animated him opening his wings and falling with style.",
        artstation: "https://ppare34.artstation.com/projects/zxaeld"
    },
    
];

const figmas = [
    {
        name: "Laundr",
        description: (
            <>
                <p className="mb-2">An app designed for college students in dorm who want to have a better experience with their laundry. This app would track all the laundry machines, and show the available and in-use machines.</p>
                <p><a href="https://drive.google.com/file/d/1PoUs1s3bmBpUZK3hvF54pgGjlyIudiLO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">Check out the case study.</a></p>
            </>
        ),
        image: "/images/LaundrCaseStudyThumbnail.png",
        embedUrl: "https://embed.figma.com/proto/mJzo4qeJOG2kd87zWquEJf/Low-Fidelity-Laundr-App?node-id=341-1040&p=f&scaling=scale-down&content-scaling=fixed&page-id=341%3A700&starting-point-node-id=341%3A1040&embed-host=share",
    },
    {
        name: "Travel Clock",
        description: "An app for users who travel on trains, and would like to sleep and get woken up at a specific time before their stop",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3AIiNrftQ2OY0LivjxNLCA%2FTravel-Clock%3Ftype%3Ddesign%26node-id%3D1-2%26t%3D2NyecyiIQlSXjcSj-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2%26mode%3Ddesign",
    },
    {
        name: "GoalBud",
        description: "An app for users who need help keeping track of their goals, as well as socialize with other with similar interests.",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhCBUVKAB7V2uYU25VARgvp%2FGoalBud%3Ftype%3Ddesign%26t%3D2VbiKM2i0LZ8Rbf3-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A16%26node-id%3D1-16%26mode%3Ddesign",
    },
];

const photos = [
    { src: "/images/DD/Water Color RDJ.jpg", width: 280, height: 180 },
    { src: "/images/DD/Double Exposure.png", width: 800, height: 800 },
    { src: "/images/DD/Nature Watercolor.jpg", width: 1200, height: 1200 },
];

const photos2 = [
    { src: "/images/DD/Postcard.png", width: 200, height: 150 },
    { src: "/images/DD/Poster-Final.jpg", width: 130, height: 180 },
];

// Reusable Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isEven = index % 2 === 0;
    
    return (
        <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? '' : ''}`}>
            {/* Image */}
            <div className={`${!isEven ? 'md:order-2' : ''}`}>
                <Link 
                    href={project.piclink} 
                    target={project.piclink?.startsWith("http") ? "_blank" : undefined}
                    rel={project.piclink?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={700}
                            height={467}
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                            quality={75}
                            loading="lazy"

                        />
                        {project.featured && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold rounded-full flex items-center gap-1 z-20">
                                <Sparkles className="w-4 h-4" />
                                Featured
                            </div>
                        )}
                        {project.award && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-bold rounded-full flex items-center gap-1 z-20">
                                <Trophy className="w-4 h-4" />
                                Award Winning
                            </div>
                        )}
                        {project.early && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full flex items-center gap-1 z-20">
                                <SquareCode className="w-4 h-4" />
                                Early Development
                            </div>
                        )}
                    </div>
                </Link>
            </div>

            {/* Content */}
            <div className={`space-y-4 ${!isEven ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {project.name}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-slate-200"
                        >
                            <Github className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
                        </Link>
                    )}
                    {project.link && (
                        <Link
                            href={project.link}
                            target={project.piclink?.startsWith("http") ? "_blank" : undefined}
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-slate-200"
                        >
                            <ExternalLink className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
                        </Link>
                    )}
                    {project.youtubelink && (
                        <Link
                            href={project.youtubelink}
                            target="_blank"
                            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group border border-slate-200"
                        >
                            <Youtube className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

// Section Header Component
const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
    <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl">
                <Icon className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                {title}
            </h2>
        </div>
        <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-4"></div>
        {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
    </div>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const filters = [
        { id: "all", label: "All Projects", icon: LayoutGrid },
        { id: "games", label: "Games", icon: Gamepad2 },
        { id: "websites", label: "Websites", icon: Globe },
        { id: "animations", label: "3D & Animation", icon: Palette },
        { id: "aftereffects", label: "After Effects", icon: Film },
        { id: "figmas", label: "Figma", icon: Figma },
        { id: "photos", label: "Design", icon: Newspaper },
    ];

    // Handle initial URL hash and updates
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const validFilters = filters.map(f => f.id);
            
            if (validFilters.includes(hash)) {
                setActiveFilter(hash);
            } else if (hash === 'projects') {
                setActiveFilter('all');
            }
        };

        // Set initial filter based on URL hash
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Update URL hash when filter changes
    const handleFilterChange = (filterId: string) => {
        setActiveFilter(filterId);
        
        // Update URL hash
        if (filterId === 'all') {
            window.history.pushState(null, '', '#projects');
        } else {
            window.history.pushState(null, '', `#${filterId}`);
        }

        // Scroll to projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                {/* Main Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                        My Projects
                    </h1>
                    <div className="w-24 h-2 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A showcase of my creative and technical work across games, web development, 
                        animation, and design.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-2 border border-slate-200">
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => {
                                const Icon = filter.icon;
                                const isActive = activeFilter === filter.id;
                                return (
                                    <button
                                        key={filter.id}
                                        onClick={() => handleFilterChange(filter.id)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md scale-105"
                                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="hidden sm:inline">{filter.label}</span>
                                        <span className="sm:hidden">{filter.label.split(" ")[0]}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Games Section */}
                {(activeFilter === "all" || activeFilter === "games") && (
                    <div data-section="games" className="max-w-6xl mx-auto mb-32">
                        <SectionHeader 
                            icon={Gamepad2} 
                            title="Games & XR Experiences" 
                            subtitle="Immersive experiences built with Unity and Unreal Engine"
                        />
                        <div className="space-y-20">
                            {games.map((project, idx) => (
                                <ProjectCard key={idx} project={project} index={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Websites Section */}
                {(activeFilter === "all" || activeFilter === "websites") && (
                    <div data-section="websites" className="max-w-6xl mx-auto mb-32">
                        <SectionHeader 
                            icon={Globe} 
                            title="Web Development" 
                            subtitle="Modern web applications and experiences"
                        />
                        <div className="space-y-20">
                            {websites.map((project, idx) => (
                                <ProjectCard key={idx} project={project} index={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Blender Section */}
                {(activeFilter === "all" || activeFilter === "animations") && (
                    <div data-section="animations" className="max-w-7xl mx-auto mb-32">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl">
                                    <Palette className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                                    3D Models & Animations
                                </h2>
                            </div>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-4"></div>
                            <p className="text-slate-600 text-lg mb-3">Character animations and 3D modeling in Blender and Maya</p>
                            <a 
                                href="https://ppare34.artstation.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
                                </svg>
                                View full portfolio on ArtStation
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {blenderProjects.map((project, idx) => (
                                <div key={idx} className="group">
                                    <Popover>
                                        <PopoverTrigger className="w-full">
                                            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                                {project.image.endsWith('.mp4') ? (
                                                    <video autoPlay loop muted playsInline className="w-full h-auto rounded-xl">
                                                        <source src={project.image} type="video/mp4" />
                                                    </video>
                                                ) : (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.alt}
                                                        width={500}
                                                        height={500}
                                                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                                        quality={75}
                                                        loading="lazy"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                                                </div>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-96 p-6">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-slate-900">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-700 leading-relaxed">
                                                    {project.description}
                                                </p>
                                                {project.videoLink && (
                                                    <Link
                                                        href={project.videoLink}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
                                                    >
                                                        <Youtube className="w-5 h-5" />
                                                        Watch Video
                                                    </Link>
                                                )}
                                                {project.artstation && (
                                                    <Link href={project.artstation}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
                                                    >
                                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
                                                        </svg>
                                                        View on ArtStation
                                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                )}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* After Effects Section */}
                {(activeFilter === "all" || activeFilter === "aftereffects") && (
                    <div data-section="aftereffects" className="max-w-6xl mx-auto mb-32">
                        <SectionHeader 
                            icon={Film} 
                            title="After Effects Animations" 
                            subtitle="Motion graphics and storytelling through animation"
                        />
                        <div className="space-y-20">
                            {animations.map((project, idx) => (
                                <ProjectCard key={idx} project={project} index={idx} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Figma Section */}
                {(activeFilter === "all" || activeFilter === "figmas") && (
                    <div data-section="figmas" className="max-w-6xl mx-auto mb-32">
                        <SectionHeader 
                            icon={Figma} 
                            title="Figma Prototypes" 
                            subtitle="Interactive app prototypes and UI/UX designs"
                        />
                        <div className="space-y-16">
                            {figmas.map((figma, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <div key={idx} className="grid md:grid-cols-2 gap-8 items-start">
                                        <div className={`space-y-6 ${!isEven ? 'md:order-2' : ''}`}>
                                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                                                {figma.name}
                                            </h3>
                                            <div className="text-lg text-slate-600 leading-relaxed">
                                                {figma.description}
                                            </div>
                                            {figma.image && (
                                                <a href="https://drive.google.com/file/d/1PoUs1s3bmBpUZK3hvF54pgGjlyIudiLO/view?usp=sharing" target="_blank" className="block">
                                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                                        <Image
                                                            src={figma.image}
                                                            alt={figma.name}
                                                            width={500}
                                                            height={500}
                                                            className="w-full h-auto hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                        <div className={`bg-white rounded-2xl shadow-lg p-4 ${!isEven ? 'md:order-1' : ''}`}>
                                            <LazyFigmaEmbed embedUrl={figma.embedUrl} title={figma.name} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Photos Section */}
                {(activeFilter === "all" || activeFilter === "photos") && (
                    <div data-section="photos" className="max-w-7xl mx-auto">
                        <SectionHeader 
                            icon={Newspaper} 
                            title="Digital Design Projects" 
                            subtitle="Photoshop artwork and graphic design"
                        />
                        <div className="space-y-8">
                            <PhotoAlbum photos={photos} layout="rows" />
                            <PhotoAlbum photos={photos2} layout="rows" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;