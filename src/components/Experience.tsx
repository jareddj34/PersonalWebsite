// import Image from "next/image";
// import Link from "next/link";

// const jobs = [
//     {
//         name: "Virtual Experiences Simulation Lab",
//         title: "Lead Developer",
//         date: "November 2023 - Present",
//         description:
//             <>
//             <ul className="list-disc list-inside">
//                 <li>
//                     Developed XR projects in Unity (C#), which have world impacts that span from healthcare training, education, and narrative storytelling
//                 </li>
//                 <li>
//                     Implemented gameplay systems, including player movement, interactable objects, and NPC AI movement
//                 </li>
//                 <li>
//                     Led teams of 3D modelers, UI/UX Designers, and other Unity developers to deliver fully deployable projects
//                 </li>
//             </ul>
//             </>,
//         pic: "/images/vesl.png",
//         link: "https://xr.miami.edu/labs/the-vesl/index.html",
//     },
//     {
//         name: "Corsair - Origin PC",
//         title: "Web Design Intern",
//         date: "May 2024 - December 2024",
//         description:
//             <>
//                 <ul className="list-disc list-inside">
//                     <li>
//                         Updated website content using JavaScript, HTML, and CSS, improving UX across multiple product pages
//                     </li>
//                     <li>
//                         Designed custom UV prints for PC cases using Photoshop and Illustrator, contributing to product personalization
//                     </li>
//                     <li>
//                         Created promotional graphics for social media campaigns, increasing user engagement
//                     </li>
//                 </ul>
//             </>,
//         pic: "/images/origin.png",
//         link: "https://www.originpc.com/",
//     },
    
//     {
//         name: "Kappa Theta Pi",
//         title: "Co-Founder, VP of Technical Development, Director of Website & Technical Operations",
//         date: "August 2023 - Present",
//         description:
//             <>
//                 <ul className="list-disc list-inside">
//                     <li>
//                         Co-founded first ever professional technology fraternity at the Univesrity of Miami
//                     </li>
//                     <li>
//                         Developed website using Next.js, displaying general information on the fraternity, events, and members
//                     </li>
//                     <li>
//                         Arrange workshops to improve members technical skills in coding, design, etc.
//                     </li>
//                 </ul>
//             </>,
//         pic: "/images/ktplogo.png",
//         link: "https://www.ktpmiami.com/",
//     },
//     {
//         name: "iD Tech",
//         title: "Instructor",
//         date: "May - July 2025",
//         description:
//             <>
//                 <ul className="list-disc list-inside">
//                     <li>
//                         Taught and mentored students in an engaging, project-based environment
//                     </li>
//                     <li>
//                         Delivered hands-on instruction in Unity (C# programming, 3D game development, physics-based mechanics)
//                     </li>
//                     <li>
//                         Taught Roblox Studio (scripting with Lua, game design fundamentals, publishing projects)
//                     </li>
//                     <li>
//                         Instructed on Virtual Reality (Meta Quest headsets, game design principles for VR-based projects)
//                     </li>
//                 </ul>
//             </>,
//         pic: "/images/idtechlogo.png",
//         link: "https://www.idtech.com/",
//     },
// ];

// export default function Experience() {
//     return (
//         <>
//             <section id="experience">
//                 <h1 className="text-center font-bold text-4xl mb-6">
//                     Experience
//                     <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 </h1>
//             </section>

//             <div className="flex flex-col space-y-28 pb-20 md:pb-48">
//                 {jobs.map((job, index) => {
//                     return (
//                         <div
//                             key={index}
//                             className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
//                         >
//                             <div className="w-1/4">
//                                 {job.pic ? (
//                                     <Link href={job.link} target="_blank">
//                                         <Image
//                                             src={job.pic}
//                                             alt=""
//                                             width={300}
//                                             height={300}
//                                         />
//                                     </Link>
//                                 ) : (
//                                     <div className="bg-gray-200 w-48 h-48"></div>
//                                 )}
//                             </div>
//                             <div className="w-3/4 pt-10">
//                                 <h2 className="font-bold text-2xl">
//                                     {job.name}
//                                 </h2>
//                                 <h3 className="text-xl">{job.title}</h3>
//                                 <h4 className="text-lg">{job.date}</h4>
//                                 <p className="mt-4">{job.description}</p>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// }

import Image from "next/image";
import Link from "next/link";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

const jobs = [
    {
        name: "Virtual Experiences Simulation Lab",
        title: "Lead Developer",
        date: "November 2023 - Present",
        location: "University of Miami",
        description:
            <>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    Developed XR projects in Unity (C#), which have world impacts that span from healthcare training, education, and narrative storytelling
                </li>
                <li>
                    Implemented gameplay systems, including player movement, interactable objects, weapons mechanics, and NPC AI movement
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
        name: "The Miami Hurricane",
        title: "Graphic Designer",
        date: "October 2025 - Present",
        location: "University of Miami",
        description:
            <>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    Designed infographics and data visualizations for articles, improving reader engagement and clarity
                </li>
                <li>
                    Created layouts and visual assets for print and digital publications using Adobe Illustrator, Photoshop, and InDesign 
                </li>
                <li>
                    Produced promotional graphics and social media visuals, increasing user engagement 
                </li>
            </ul>
            </>,
        pic: "/images/TMH.png",
        link: "https://themiamihurricane.com/",
    },
    {
        name: "Corsair - Origin PC",
        title: "Web Design Intern",
        date: "May 2024 - December 2024",
        location: "Miami, FL",
        description:
            <>
                <ul className="list-disc list-inside space-y-2">
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
        title: "Co-Founder, VP of Technical Development",
        date: "August 2023 - Present",
        location: "University of Miami",
        description:
            <>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Co-founded first ever professional technology fraternity at the University of Miami
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
        location: "UC Berkeley",
        description:
            <>
                <ul className="list-disc list-inside space-y-2">
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
        <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-4 text-lg">My professional journey</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-200 via-green-200 to-emerald-100"></div>

                        <div className="space-y-12">
                            {jobs.map((job, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col md:flex-row gap-8 ${
                                            isEven ? "md:flex-row-reverse" : ""
                                        }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                                            <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full ring-4 ring-white shadow-lg"></div>
                                        </div>

                                        {/* Content */}
                                        <div className={`md:w-1/2 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group">
                                                {/* Company Logo */}
                                                {job.pic && (
                                                    <div className="p-6 bg-slate-50 border-b border-slate-100">
                                                        <Link href={job.link} target="_blank" className="block">
                                                            <div className="relative h-24 flex items-center justify-center">
                                                                <Image
                                                                    src={job.pic}
                                                                    alt={job.name}
                                                                    width={200}
                                                                    height={100}
                                                                    className="object-contain max-h-20 group-hover:scale-105 transition-transform"
                                                                    quality={75}
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )}

                                                <div className="p-6">
                                                    {/* Job Title and Company */}
                                                    <div className="mb-4">
                                                        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                            {job.name}
                                                            <Link
                                                                href={job.link}
                                                                target="_blank"
                                                                className="text-emerald-600 hover:text-emerald-700 transition-colors"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </Link>
                                                        </h3>
                                                        <p className="text-lg font-semibold text-emerald-600 mb-2 text-left">
                                                            {job.title}
                                                        </p>
                                                        <div className="flex flex-col gap-1 text-sm text-slate-600 text-left">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{job.date}</span>
                                                            </div>
                                                            {job.location && (
                                                                <div className="flex items-center gap-2">
                                                                    <MapPin className="w-4 h-4" />
                                                                    <span>{job.location}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <div className="text-slate-700 text-sm leading-relaxed text-left">
                                                        {job.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spacer for the other side */}
                                        <div className="hidden md:block md:w-1/2"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
