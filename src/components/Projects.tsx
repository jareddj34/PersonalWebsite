import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import PhotoAlbum from "react-photo-album";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";


const websites = [
    {
        name: "Crabfit",
        description:
            "A personalized AI fitness trainer, tailored to each users needs.",
        image: "/images/CrabFit.png",
        github: "https://github.com/jareddj34/CrabFit",
        link: "",
        piclink: "https://youtu.be/5Et-1yUL3K8",
        youtubelink: "https://youtu.be/5Et-1yUL3K8",
    },
    {
        name: "Origin PC Website",
        description:
            "Updated and maintained the Origin PC website. Developed a new page showcasing the customizable aspects of the PCs.",
        image: "/images/OriginPC.png",
        github: "",
        link: "https://www.originpc.com/gaming/desktops/custom-pc-builder/",
        piclink: "https://www.originpc.com/gaming/desktops/custom-pc-builder/",
        youtubelink: "",
    },
    {
        name: "Kappa Theta Pi Website",
        description:
            "Website for Kappa Theta Pi, UMiami's first professional technology fraternity. Has info about events, members, etc.",
        image: "/images/KTP.png",
        github: "https://github.com/jareddj34/ktpmiami",
        link: "https://ktpmiami.com",
        piclink: "https://ktpmiami.com",
        youtubelink: "",
    },
    
    {
        name: "JamZ",
        description:
            "A document simplifier, making it easy for people to read long, confusing documents.",
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
        description:
            "A VR airboat driving experience through a post-apocalyptic Everglades, fighting enemies and saving the environment along the way.",
        image: "/images/swampocalypse.jpg",
        github: "",
        link: "/airboat",
        piclink: "/airboat",
        youtubelink: "",
    },
    {
        name: "Get Gator Back",
        description:
            "A 2D platformer where you play as Al or Ally the Alligator, and help them get back to their homes by exploring various environments and taking out invasive species along the way.",
        image: "/images/GetGatorBack.png",
        github: "",
        link: "https://steinvisionstudios.itch.io/get-gator-back",
        piclink: "https://steinvisionstudios.itch.io/get-gator-back",
        youtubelink: "",
    },

    {
        name: "Flower Adventures",
        description:
            "A video game I made for my Game Programming class. Focuses on a flower that fights bugs and traverses through obstacles. Created in Unity.",
        image: "/images/FlowerAdventures.png",
        github: "",
        link: "/flower",
        piclink: "/flower",
        youtubelink: "https://www.youtube.com/watch?v=MElVeqwKQHM",
    },
    
    {
        name: "Temikki Garden",
        description:
            "A mobile AR application to promote the emotional well-being of children during long hospital stays. Children can build, modify, and play in a living virtual garden while reminded of their accomplishments.",
        image: "/images/temikki.jpg",
        github: "",
        link: "/temikki",
        piclink: "/temikki",
        youtubelink: "",
    },

    {
        name: "Tests for Cognitive Impairment",
        description:
            "A Unity applications that puts the user through tests to detect if they have minor cognitive impairment of Alzheimer's disease. The application is ran through a VR headset, giving the user full immersion in the experience. Partnered with Dr. Ubbo Visser and Dr. Christine Lisetti.",
        image: "/images/VisserProjectThumbnail.png",
        github: "",
        link: "https://docs.google.com/document/d/1cCCPMQl8vztD1VaHMsl3QkHKZ9jIcGALblYXA9DDlik/edit?tab=t.0",
        piclink: "https://docs.google.com/document/d/1cCCPMQl8vztD1VaHMsl3QkHKZ9jIcGALblYXA9DDlik/edit?tab=t.0",
        youtubelink: "",
    },
    
    {
        name: "ARchaeology",
        description:
            "ARchaeology is an augmented reality application designed for Meta Quest to bring paleontology to your own backyard! The app's hands-on gameplay allows the user to step into the role of an archaeologist by uncovering, digging, cleaning, and assembling dinosaur skeletons.",
        image: "/images/ARchaeology.png",
        github: "",
        link: "https://txp552.wixsite.com/archaeology",
        piclink: "https://txp552.wixsite.com/archaeology",
        youtubelink: "",
    },
];

const animations = [
    {
        name: "Gambling Animation",
        description:
            "An animation on the effects that gambling has on people. Made for my Animation class, produced in After Effects, Illustrator, and Premiere.",
        image: "/images/gambling.png",
        github: "",
        link: "",
        piclink: "https://youtu.be/FMKl4py7z60",
        youtubelink: "https://youtu.be/FMKl4py7z60",
    },
    {
        name: "History of the Guitar Animation",
        description:
            "An animation on the brief history of the guitar. Made for my Animation class, produced in After Effects, Illustrator, and Premiere.",
        image: "/images/guitar.jpg",
        github: "",
        link: "",
        piclink: "https://www.youtube.com/watch?v=Z0c2h39RuyA",
        youtubelink: "https://www.youtube.com/watch?v=Z0c2h39RuyA",
    },
    
];

const figmas = [
    {
        name: "Laundr",
        description: (
            <>
                <p>An app designed for college students in dorm who want to have a better experience with their laundry. This app would track all the laundry machines, and show the available and in-use machines.{" "}
                </p>
                <p><a
                    href="https://drive.google.com/file/d/1PoUs1s3bmBpUZK3hvF54pgGjlyIudiLO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    Check out the case study.
                </a></p>
            </>
        ),
        image: "/images/LaundrCaseStudyThumbnail.png",
        embed: (
            <iframe
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                }}
                width={500}
                height={650}
                src="https://embed.figma.com/proto/mJzo4qeJOG2kd87zWquEJf/Low-Fidelity-Laundr-App?node-id=341-1040&p=f&scaling=scale-down&content-scaling=fixed&page-id=341%3A700&starting-point-node-id=341%3A1040&embed-host=share"
                allowFullScreen
            />
        ),
    },
    {
        name: "Travel Clock",
        description:
            "An app for users who travel on trains, and would like to sleep and get woken up at a specific time before their stop",
        embed: (
            <iframe
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                }}
                width={500}
                height={650}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3AIiNrftQ2OY0LivjxNLCA%2FTravel-Clock%3Ftype%3Ddesign%26node-id%3D1-2%26t%3D2NyecyiIQlSXjcSj-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2%26mode%3Ddesign"
                allowFullScreen
            />
        ),
    },

    {
        name: "GoalBud",
        description:
            "An app for users who need help keeping track of their goals, as well as socialize with other with similar interests.",
        embed: (
            <iframe
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                }}
                width={500}
                height={650}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhCBUVKAB7V2uYU25VARgvp%2FGoalBud%3Ftype%3Ddesign%26t%3D2VbiKM2i0LZ8Rbf3-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A16%26node-id%3D1-16%26mode%3Ddesign"
                allowFullScreen
            />
        ),
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

const Projects = () => {
    return (
        <section id="projects">
            

            <div data-section="games">
                <h1 className="text-center font-bold text-4xl mb-6">
                    Games
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-28">
                    {games.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        <Link
                                            href={project.piclink}
                                            target={project.piclink?.startsWith("http") ? "_blank" : undefined}
                                            rel={project.piclink?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row space-x-4 ">
                                            {project.github && (
                                                <Link href={project.github} target="_blank">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target={project.link?.startsWith("http") ? "_blank" : undefined}
                                                    rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.youtubelink && (
                                                <Link
                                                    href={project.youtubelink}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="#000000"
                                                        height="50px"
                                                        width="50px"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        viewBox="0 0 310 310"
                                                        className="hover-float"
                                                    >
                                                        <g id="XMLID_822_">
                                                            <path
                                                                id="XMLID_823_"
                                                                d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                                            />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div data-section="websites" style={{marginTop: "150px"}}>
                <h1 className="text-center font-bold text-4xl mb-6">
                    Websites
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-28">
                    {websites.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        <Link
                                            href={project.piclink}
                                            target="_blank"
                                        >
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row space-x-4 ">
                                            {project.github && (
                                                <Link href={project.github} target="_blank">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.youtubelink && (
                                                <Link
                                                    href={project.youtubelink}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="#000000"
                                                        height="50px"
                                                        width="50px"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        viewBox="0 0 310 310"
                                                        className="hover-float"
                                                    >
                                                        <g id="XMLID_822_">
                                                            <path
                                                                id="XMLID_823_"
                                                                d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                                            />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            

            {/* For the blender gif */}
            <div data-section="blender" style={{ marginTop: "150px" }}>
                <div className="mt-12 text-center">
                    <h1 className="text-4xl font-bold mb-6">
                        3D Models and Animations
                    </h1>
                    <h2 className="text-2xl">
                        Check out my animation portfolio website <a 
                    href="https://ppare34.artstation.com/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    here!
                </a>
                    </h2>
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </div>
                <div className="flex flex-wrap justify-center gap-8"> 
                    
                    <Link
                        href="https://www.youtube.com/watch?v=C9jjvxcFIYo"
                        target="_blank"
                    >
                        <Image
                            src="/images/blender/CactusThumbnailFinal.png"
                            alt="Demo Reel Thumbnail"
                            width={700}
                            height={500}
                            className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                        />
                    </Link>

                    <Link
                        href="https://www.youtube.com/watch?v=wifdeubujKk"
                        target="_blank"
                    >
                        <Image
                            src="/images/blender/DemoReelThumbnail.png"
                            alt="Demo Reel Thumbnail"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                        />
                    </Link>

                    <Link
                        href="https://www.youtube.com/watch?v=npbupjoH3xc"
                        target="_blank"
                    >
                        <Image
                            src="/images/blender/NutcrackerThumbnail.png"
                            alt="Nutcracker Thumbnail"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                        />
                    </Link>

                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/CatInBedroom.gif"
                                alt="Cat In Bedroom Animation"
                                width={350}
                                height={350}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Cat In Bedroom
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                Being one of the first models that I&apos;ve created in Blender, I decided to improve upon it by animating the objects to fly in the screen, similar to the Airbnb commericials. The cat is also the first character
                                I ever modeled and rigged, following Joey Carlino&apos;s Youtube tutorials.
                            </p>
                            <Link href="https://www.youtube.com/shorts/uBzHTZ0ClMY" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    height="50px"
                                    width="50px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 310 310"
                                    className="hover-float"
                                >
                                    <g id="XMLID_822_">
                                        <path
                                            id="XMLID_823_"
                                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/NewBedroom.gif"
                                alt="New Living Room Animation"
                                width={350}
                                height={350}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Vibrant Living Room
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                A colorful and vibrant isometric living room, with the objects soaring into the scene in unique ways.
                            </p>
                            <Link href="https://www.youtube.com/shorts/s-HQNWTM_Wg" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    height="50px"
                                    width="50px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 310 310"
                                    className="hover-float"
                                >
                                    <g id="XMLID_822_">
                                        <path
                                            id="XMLID_823_"
                                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/LivingRoom.gif"
                                alt="Living Room Animation"
                                width={350}
                                height={350}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Catalogue Living Room
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                I&apos;ve always imagined this living room being shown in a catalogue of home decor inspiration. Again, another Airbnb style animation.
                            </p>
                            <Link href="https://www.youtube.com/shorts/89Q6NvtoMKo" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    height="50px"
                                    width="50px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 310 310"
                                    className="hover-float"
                                >
                                    <g id="XMLID_822_">
                                        <path
                                            id="XMLID_823_"
                                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/rubikscubewalking.gif"
                                alt="Rubik's Cube Walking Animation"
                                width={550}
                                height={500}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Rubik&apos;s Cube Walking
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                Solving Rubik&apos;s Cubes is one of my longest and most cherrished hobbies. Having a collection of over 100 cubes, I knew I had to incorporate one of the things I identify with into my modeling and animation.
                            </p>
                            <Link
                                href="https://www.youtube.com/watch?v=pONAtAiO5_o&pp=ygURamFyZWQgZGUgbW9udGVpcm8%3D"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    height="50px"
                                    width="50px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 310 310"
                                    className="hover-float"
                                >
                                    <g id="XMLID_822_">
                                        <path
                                            id="XMLID_823_"
                                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/typewriterwalkinggif.gif"
                                alt="Typewriter Walking Animation"
                                width={550}
                                height={500}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Typewriter Walking
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                I found inspiration for this animation while browsing an art museum in Sedona, Arizona. There were metal sculptures of common antiques, that were morphed into characters with arms and legs.
                            </p>
                            <Link
                                href="https://www.youtube.com/watch?v=87x30FPKX1o"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000000"
                                    height="50px"
                                    width="50px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 310 310"
                                    className="hover-float"
                                >
                                    <g id="XMLID_822_">
                                        <path
                                            id="XMLID_823_"
                                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/guitar.gif"
                                alt="Guitar"
                                width={400}
                                height={400}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Guitar
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                This was my first ever model made the Maya. I wanted to create an object from one of my favorite hobbies, which is playing the guitar. Modeled in Maya, textured in Substance Painter.                  
                            </p>
                            
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                            <Image
                                src="/images/blender/CactusWalking.gif"
                                alt="Cactus Walking Animation"
                                width={400}
                                height={400}
                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                            />
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <h2 className="text-2xl font-bold mb-6">
                                Cactus Walking
                            </h2>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                One of my mothers favorite plants is a cactus. I wanted to create this model and animate it for her birthday. I have also implemented this character in the game I am currently developing.
                            </p>
                            
                        </PopoverContent>
                    </Popover>


                </div>
            </div>


            
            <div data-section="animations" style={{marginTop: "150px"}}>
                <h1 className="text-center font-bold text-4xl mb-6">
                    After Effects Animations
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-28">
                    {animations.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        <Link
                                            href={project.piclink}
                                            target="_blank"
                                        >
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row space-x-4 ">
                                            {project.github && (
                                                <Link href={project.github} target="_blank">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="50"
                                                        height="50"
                                                        viewBox="0 0 24 24"
                                                        className="hover-float"
                                                    >
                                                        <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
                                                    </svg>
                                                </Link>
                                            )}

                                            {project.youtubelink && (
                                                <Link
                                                    href={project.youtubelink}
                                                    target="_blank"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="#000000"
                                                        height="50px"
                                                        width="50px"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        viewBox="0 0 310 310"
                                                        className="hover-float"
                                                    >
                                                        <g id="XMLID_822_">
                                                            <path
                                                                id="XMLID_823_"
                                                                d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z"
                                                            />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            <div data-section="figmas" style={{ marginTop: "150px" }}>
                <h1 className="text-center font-bold text-4xl mb-4">
                    Figma Prototypes
                </h1>
                <p className="text-center">
                    These are prototypes for some app ideas that I had.
                </p>
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-28">
                    {figmas.map((figma, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-row md:space-x-12">
                                    <div className="mt-14 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {figma.name}
                                        </h1>
                                        <p className="text-2xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {figma.description}
                                        </p>
                                        {figma.image && (
                                            <a href="https://drive.google.com/file/d/1PoUs1s3bmBpUZK3hvF54pgGjlyIudiLO/view?usp=sharing" target="_blank">
                                                <Image
                                                    src={figma.image}
                                                    alt={figma.name}
                                                    width={500}
                                                    height={500}
                                                    className="rounded-xl shadow-xl hover:opacity-70 hover-float"
                                                />
                                            </a>
                                        )}
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        {figma.embed}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div data-section="photos" style={{ marginTop: "150px" }}>
                <h1 className="text-center font-bold text-4xl mb-6">
                    Digital Design Projects
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>
                <PhotoAlbum photos={photos} layout="rows" />;
                <PhotoAlbum photos={photos2} layout="rows" />;
            </div>
        </section>
    );
};

export default Projects;
