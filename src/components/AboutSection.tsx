import React from "react";

const skills = [
    { skill: "Java" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Next.js" },
    { skill: "C" },
    { skill: "C#" },
    { skill: "R" },
    { skill: "MySQL" },
    { skill: "Figma" },
    { skill: "Photoshop" },
    { skill: "After Effects" },
    { skill: "Unity" },
    { skill: "GitHub" },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-17 md:pb-48">
                <h1 className="text-center font-bold text-4xl mb-6">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me
                        </h1>
                        <p>
                            Hello, my name is Jared de Monteiro, and I am a
                            Computer Scientist based in the Bay Area of
                            California. I am currently a Sophomore at the
                            University of Miami, pursuing a B.S. in Computer
                            Science and minoring in Mathematics.
                        </p>
                        <br />
                        <p>
                            I have a wide range of passions and hobbies that
                            keep me busy. I love playing musical instruments
                            like piano and guitar, playing basketball, and
                            working out.
                        </p>
                        <br />
                        <p>
                            I have also huge passion for art, which I like to
                            combine with my passion for tech as well. I enjoy
                            creating things from scratch, and seeing all my work
                            come together to make a finished product. I love
                            working with applications like Photoshop,
                            Illustrator, Figma, and After Effects for creative
                            projects. With my passion for creation, I have
                            gotten really into web development, creating sites
                            that help people with their everyday problems.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Some things I know
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover-float"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
