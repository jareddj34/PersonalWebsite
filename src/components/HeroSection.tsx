// "use client";

// import Image from "next/image";
// import React from "react";
// import { Button } from "./ui/button";
// import "animate.css";

// const HeroSection = () => {
//     const downloadFile = (url: any) => {
//         const aTag = document.createElement("a");
//         aTag.href = url;
//         aTag.setAttribute("download", "Jared_deMonteiro_Resume");
//         document.body.appendChild(aTag);
//         aTag.click();
//         aTag.remove();
//     };

//     return (
//         <section id="home">
//             <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
//                 <div>
//                     <Image
//                         src="/images/JaredPic.JPG"
//                         alt=""
//                         height={300}
//                         width={300}
//                         className="rounded-full"
//                     />
//                 </div>
//                 <div className="md:mt-2 md:w-3/5">
//                     <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
//                         Hello, I&#39;m Jared!
//                     </h1>
//                     <p className="text-lg mt-4 mb-6 md:text-2xl">
//                         I&#39;m a Computer Scientist with a passion for web
//                         development, game development, software engineering, and
//                         much more!
//                     </p>
//                     <div className="flex items-center">
//                         <Button
//                             className="bg-green-600 hover:bg-green-500"
//                             onClick={() => {
//                                 downloadFile(
//                                     "https://jareddemonteiro.vercel.app/Jared_deMonteiro_Resume.pdf"
//                                 );
//                             }}
//                         >
//                             Resume{" "}
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20px"
//                                 height="20px"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 className="ml-2"
//                             >
//                                 <path
//                                     d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
//                                     fill="#ffffff"
//                                 />
//                                 <path
//                                     d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
//                                     fill="#ffffff"
//                                 />
//                             </svg>
//                         </Button>
//                         <div className="ml-4">
//                             <a
//                                 target="_blank"
//                                 href="https://www.linkedin.com/in/jareddemonteiro/"
//                             >
//                                 <div className="hover-path">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         x="0px"
//                                         y="0px"
//                                         width="48"
//                                         height="48"
//                                         viewBox="0 0 50 50"
//                                     >
//                                         <path
//                                             fill="#0288D1"
//                                             d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
//                                         ></path>
//                                     </svg>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github, Mail } from "lucide-react";

const HeroSection = () => {
    const downloadFile = (url: any) => {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", "Jared_deMonteiro_Resume");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Gradient Background - Full Width */}
            <div className="absolute inset-0 w-full bg-gradient-to-br from-emerald-50 via-white to-green-50 -z-10"></div>
            
            {/* Animated circles in background - Full Width */}
            <div className="absolute inset-0 w-full -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
                    {/* Profile Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative">
                            <Image
                                src="/images/JaredPic.JPG"
                                alt="Jared de Monteiro"
                                height={350}
                                width={350}
                                className="rounded-full ring-4 ring-white shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div className="space-y-2">
                            {/* <p className="text-emerald-600 font-semibold text-lg tracking-wide">
                                Welcome to my portfolio
                            </p> */}
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900">
                                Hi, I&apos;m{" "}
                                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                    Jared
                                </span>
                            </h1>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                            A developer, designer, and technologist with a passion for{" "}
                            <span className="font-semibold text-slate-900">creative technology</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                                onClick={() => {
                                    window.open(
                                        "https://jareddemonteiro.vercel.app/Jared_deMonteiro_Resume.pdf",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                            >
                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                Download Resume
                            </Button>

                            <div className="flex gap-3">
                                <a
                                    href="https://www.linkedin.com/in/jareddemonteiro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                                >
                                    <Linkedin className="h-6 w-6 text-[#0288D1] group-hover:text-[#0277BD]" />
                                </a>
                                <a
                                    href="https://github.com/jareddj34"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                                >
                                    <Github className="h-6 w-6 text-slate-700 group-hover:text-slate-900" />
                                </a>
                                <a
                                    href="mailto:jared@example.com"
                                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                                >
                                    <Mail className="h-6 w-6 text-emerald-600 group-hover:text-emerald-700" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex gap-8 pt-6 justify-center md:justify-start">
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-emerald-600">15+</div>
                                <div className="text-sm text-slate-600">Projects</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-emerald-600">4+</div>
                                <div className="text-sm text-slate-600">Years Experience</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-3xl font-bold text-emerald-600">20+</div>
                                <div className="text-sm text-slate-600">Skills</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;