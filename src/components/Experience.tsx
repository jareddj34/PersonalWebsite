import Image from "next/image";
import Link from "next/link";

const jobs = [
    {
        name: "Virtual Experiences Simulation Lab",
        title: "Lead Developer",
        date: "November 2023 - Present",
        description:
            <>
            <ul className="list-disc list-inside">
                <li>
                    Developed XR projects in Unity (C#), which have world impacts that span from healthcare training, education, and narrative storytelling
                </li>
                <li>
                    Implemented gameplay systems, including player movement, interactable objects, and NPC AI movement
                </li>
                <li>
                    Led teams of 3D modelers, UI/UX Designers, and other Unity developers to deliver fully deployable projects
                </li>
            </ul>
            </>,
        pic: "/images/vesl.png",
        link: "https://xr.miami.edu/labs/the-vesl/index.html",
    },
    {
        name: "Corsair - Origin PC",
        title: "Web Design Intern",
        date: "May 2024 - December 2024",
        description:
            <>
                <ul className="list-disc list-inside">
                    <li>
                        Updated website content using JavaScript, HTML, and CSS, improving UX across multiple product pages
                    </li>
                    <li>
                        Designed custom UV prints for PC cases using Photoshop and Illustrator, contributing to product personalization
                    </li>
                    <li>
                        Created promotional graphics for social media campaigns, increasing user engagement
                    </li>
                </ul>
            </>,
        pic: "/images/origin.png",
        link: "https://www.originpc.com/",
    },
    
    {
        name: "Kappa Theta Pi",
        title: "Co-Founder, VP of Technical Development, Director of Website & Technical Operations",
        date: "August 2023 - Present",
        description:
            <>
                <ul className="list-disc list-inside">
                    <li>
                        Co-founded first ever professional technology fraternity at the Univesrity of Miami
                    </li>
                    <li>
                        Developed website using Next.js, displaying general information on the fraternity, events, and members
                    </li>
                    <li>
                        Arrange workshops to improve members technical skills in coding, design, etc.
                    </li>
                </ul>
            </>,
        pic: "/images/ktplogo.png",
        link: "https://www.ktpmiami.com/",
    },
    {
        name: "iD Tech",
        title: "Instructor",
        date: "May - July 2025",
        description:
            <>
                <ul className="list-disc list-inside">
                    <li>
                        Taught and mentored students in an engaging, project-based environment
                    </li>
                    <li>
                        Delivered hands-on instruction in Unity (C# programming, 3D game development, physics-based mechanics)
                    </li>
                    <li>
                        Taught Roblox Studio (scripting with Lua, game design fundamentals, publishing projects)
                    </li>
                    <li>
                        Instructed on Virtual Reality (Meta Quest headsets, game design principles for VR-based projects)
                    </li>
                </ul>
            </>,
        pic: "/images/idtechlogo.png",
        link: "https://www.idtech.com/",
    },
];

export default function Experience() {
    return (
        <>
            <section id="experience">
                <h1 className="text-center font-bold text-4xl mb-6">
                    Experience
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>
            </section>

            <div className="flex flex-col space-y-28 pb-20 md:pb-48">
                {jobs.map((job, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
                        >
                            <div className="w-1/4">
                                {job.pic ? (
                                    <Link href={job.link} target="_blank">
                                        <Image
                                            src={job.pic}
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </Link>
                                ) : (
                                    <div className="bg-gray-200 w-48 h-48"></div>
                                )}
                            </div>
                            <div className="w-3/4 pt-10">
                                <h2 className="font-bold text-2xl">
                                    {job.name}
                                </h2>
                                <h3 className="text-xl">{job.title}</h3>
                                <h4 className="text-lg">{job.date}</h4>
                                <p className="mt-4">{job.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
