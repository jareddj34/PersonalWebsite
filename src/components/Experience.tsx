import Image from "next/image";
import Link from "next/link";

const jobs = [
    {
        name: "Corsair - Origin PC",
        title: "Web Design Intern",
        date: "May 2024 - Present",
        description:
            "Updated content on the website using Photoshop, Illustrator, and HTMl. Worked with marketing team to create graphics for social media posts.",
        pic: "/images/origin.png",
        link: "https://www.originpc.com/",
    },
    {
        name: "Virtual Experiences Simulation Lab",
        title: "Unity Developer",
        date: "November 2024 - Present",
        description:
            "Develop XR games/projects in Unity, which have world impacts that span from healthcare training, education, and narrative storytelling. Work with 3D modelers, UI Designers, and other Unity Developers to create final products",
        pic: "/images/vesl.png",
        link: "https://xr.miami.edu/lab/vesl/vesl1.html",
    },
    {
        name: "Kappa Theta Pi",
        title: "VP of Technical Development, Director of Website",
        date: "August 2023 - May 2024",
        description:
            "Developed website using Next.js, displaying general information on the fraternity, events, and members Arrange workshops to improve members technical skills in coding, design, etc.",
        pic: "/images/ktplogo.png",
        link: "https://www.ktpmiami.com/",
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
