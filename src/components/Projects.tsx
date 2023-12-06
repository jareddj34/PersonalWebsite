import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import PhotoAlbum from "react-photo-album";

const projects = [
    {
        name: "Crabfit",
        description:
            "A personalized AI fitness trainer, tailored to each users needs.",
        image: "/images/CrabFit.png",
        github: "https://github.com/jareddj34/CrabFit",
        link: "",
        piclink: "https://youtu.be/5Et-1yUL3K8",
    },
    {
        name: "Flower Adventures",
        description:
            "A video game I made for my Game Programming class. Focuses on a flower that fights bugs and traverses through obstacles. Created in Unity.",
        image: "/images/FlowerAdventures.png",
        github: "",
        link: "https://www.youtube.com/watch?v=MElVeqwKQHM&ab_channel=JaredDeMonteiro",
        piclink:
            "https://www.youtube.com/watch?v=MElVeqwKQHM&ab_channel=JaredDeMonteiro",
    },
    {
        name: "JamZ",
        description:
            "A document simplifier, making it easy for people to read long, confusing documents",
        image: "/images/JamZ.png",
        github: "https://github.com/jareddj34/JamZ",
        link: "",
        piclink: "https://github.com/jareddj34/JamZ",
    },
    {
        name: "Kappa Theta Pi Website",
        description:
            "Website for Kappa Theta Pi, UMiami's first professional technology fraternity. Has info about events, members, etc.",
        image: "/images/KTP.png",
        github: "",
        link: "https://ktpmiami.vercel.app/",
        piclink: "https://ktpmiami.vercel.app/",
    },
];

const figmas = [
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
            <h1 className="text-center font-bold text-4xl mb-6">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
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
                                        {project.name !=
                                            "Flower Adventures" && (
                                            <Link
                                                href={project.github}
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
                                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                                </svg>
                                            </Link>
                                        )}

                                        {project.name ==
                                            "Kappa Theta Pi Website" && (
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div style={{ marginTop: "150px" }}>
                <h1 className="text-center font-bold text-4xl mb-4">
                    Some Figma Prototypes
                </h1>
                <p className="text-center">
                    These are prototypes for apps, that are not fully functional
                    and do not have all the features yet.
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

            <div style={{ marginTop: "150px" }}>
                <h1 className="text-center font-bold text-4xl mb-6">
                    Some Digital Design Projects
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>
                <PhotoAlbum photos={photos} layout="rows" />;
                <PhotoAlbum photos={photos2} layout="rows" />;
            </div>
        </section>
    );
};

export default Projects;
