// import React from "react";

// const skills = [
//     { skill: "Unity" },
//     { skill: "Blender" },
//     { skill: "Unreal Engine" },
//     { skill: "Maya" },
//     { skill: "C#" },
//     { skill: "C++" },
//     { skill: "Java" },
//     { skill: "JavaScript" },
//     { skill: "TypeScript" },
//     { skill: "HTML" },
//     { skill: "React" },
//     { skill: "Python" },
//     { skill: "R" },
//     { skill: "MySQL" },
//     { skill: "Figma" },
//     { skill: "Photoshop" },
//     { skill: "Illustrator" },
//     { skill: "After Effects" },
    
// ];

// const AboutSection = () => {
//     return (
//         <section id="about">
//             <div className="my-12 pb-12 pt-20 md:pb-48 ">
//                 <h1 className="text-center font-bold text-4xl mb-6">
//                     About Me
//                     <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 </h1>

//                 <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
//                     <div className="md:w-1/2">
//                         <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
//                             Get to know me
//                         </h1>
//                         <p>
//                             Hello, my name is Jared de Monteiro, and I am a
//                             Developer based in the San Francisco Bay
//                             Area. I am currently a senior at the University
//                             of Miami, pursuing a B.S. in Computer Science, Interactive Media and
//                             minoring in Mathematics.
//                         </p>
//                         <br />
//                         <p>
//                             I have a wide range of passions and hobbies that
//                             keep me busy. I love playing musical instruments
//                             like piano and guitar, playing basketball, and
//                             working out.
//                         </p>
//                         <br />
//                         <p>
//                             I also have a huge passion for art, which I like to
//                             combine with my passion for tech as well. I enjoy
//                             creating things from scratch, and seeing all my work
//                             come together to make a finished product. I love
//                             working with applications like Unity, Blender, Unreal Engine,
//                             Maya, Photoshop, Illustrator, Figma, and After Effects for creative
//                             projects. With my passion for creation, I have gotten into game
//                             development, web development, and 3D modeling/animation.
//                         </p>
//                     </div>
//                     <div className="md:w-1/2">
//                         <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
//                             Some things I know
//                         </h1>
//                         <div className="flex flex-wrap flex-row justify-center md:justify-start">
//                             {skills.map((item, idx) => {
//                                 return (
//                                     <p
//                                         key={idx}
//                                         className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover-float"
//                                     >
//                                         {item.skill}
//                                     </p>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSection;
import React from "react";
import { Code2 } from "lucide-react";

const skills = [
    { skill: "Unity", category: "game" },
    { skill: "Blender", category: "design" },
    { skill: "Unreal Engine", category: "game" },
    { skill: "Maya", category: "design" },
    { skill: "Animation", category: "design" },
    { skill: "C#", category: "code" },
    { skill: "C++", category: "code" },
    { skill: "Java", category: "code" },
    { skill: "JavaScript", category: "code" },
    { skill: "TypeScript", category: "code" },
    { skill: "HTML", category: "code" },
    { skill: "Python", category: "code" },
    { skill: "R", category: "code" },
    { skill: "MySQL", category: "code" },
    { skill: "Figma", category: "design" },
    { skill: "Photoshop", category: "design" },
    { skill: "Illustrator", category: "design" },
    { skill: "After Effects", category: "design" },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Bio Section */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <div className="p-2 bg-emerald-600 rounded-lg">
                                    <Code2 className="w-5 h-5 text-white" />
                                </div>
                                Get to Know Me
                            </h3>
                            
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                {/* <p>
                                    Hello, my name is <span className="font-semibold text-slate-900">Jared de Monteiro</span>, and I am a
                                    Developer based in the <span className="font-semibold text-slate-900">San Francisco Bay Area</span>. I am currently a senior at the{" "}
                                    <span className="font-semibold text-slate-900">University of Miami</span>, pursuing a B.S. in Computer Science, Interactive Media and
                                    minoring in Mathematics.
                                </p>
                                
                                <p>
                                    I have a wide range of passions and hobbies that keep me busy. I love playing musical instruments
                                    like piano and guitar, playing basketball, and working out.
                                </p>
                                
                                <p>
                                    I also have a huge passion for art, which I like to combine with my passion for tech as well. I enjoy
                                    creating things from scratch, and seeing all my work come together to make a finished product. I love
                                    working with applications like Unity, Blender, Unreal Engine, Maya, Photoshop, Illustrator, Figma, and After Effects for creative
                                    projects. With my passion for creation, I have gotten into{" "}
                                    <span className="font-semibold text-slate-900">game development</span>,{" "}
                                    <span className="font-semibold text-slate-900">web development</span>, and{" "}
                                    <span className="font-semibold text-slate-900">3D modeling/animation</span>.
                                </p> */}
                                <p>
                                    Hello, I&#39;m Jared de Monteiro, a developer, technical artist, and animator from the San Francisco Bay Area. I am currently a senior at the University of Miami, studying Computer Science - Graphics & Game Design, Interactive Media, and Mathematics.
                                </p>

                                <p>
                                    I have a variety of different types of projects in different realms of technology. I am currently the lead developer at the Virtual Experiences Simulation Lab, where I&#39;ve contributed to a multitude of XR projects, integrating VR and other immersive technologies. I aim to create experiences that engage people emotionally, help them learn, and invite them to explore in new ways.

                                </p>

                                <p>
                                    Outside of work, I work on projects that incorporate both art and technical skills. This includes creating 3D models from scratch, rigging and animating these models to bring them to life, and integrating them into games where people can control these models.

I am always eager to be learning more about new types of technologies and trends in art, and my goal is to continue making projects that have a positive impact on people.

                                </p>
                            </div>
                        </div>

                        {/* Interests Cards */}
                        {/* <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-3">
                                    <Gamepad2 className="w-6 h-6 text-purple-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Game Dev</h4>
                                <p className="text-sm text-slate-600">VR/AR experiences</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-3">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Web Dev</h4>
                                <p className="text-sm text-slate-600">Modern interfaces</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-pink-100 rounded-lg w-fit mb-3">
                                    <Palette className="w-6 h-6 text-pink-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Design</h4>
                                <p className="text-sm text-slate-600">3D modeling & UI</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-orange-100 rounded-lg w-fit mb-3">
                                    <Code2 className="w-6 h-6 text-orange-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Software</h4>
                                <p className="text-sm text-slate-600">Full-stack apps</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Skills Section */}
                    <div>
                        <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                Technical Skills
                            </h3>
                            
                            <div className="space-y-6">
                                {/* Categorized Skills */}
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">
                                        Programming
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === "code").map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-white text-slate-700 rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-slate-200"
                                            >
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">
                                        Game Development
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === "game").map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-purple-200"
                                            >
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                                <div>
                                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">
                                        Design & Creative
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.filter(s => s.category === "design").map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-pink-50 text-pink-700 rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-pink-200"
                                            >
                                                {item.skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
