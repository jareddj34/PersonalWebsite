// import React from "react";
// import Image from "next/image";
// import { Video } from "lucide-react";
// import VideoPlayer from "../../components/VideoPlayer";
// import Footer from "@/components/Footer";

// export default function TemikkiPage() {
//     return (
//         <>
//         <div className="min-h-screen flex flex-col items-center justify-start mt-14">
//             <h1 className="text-center text-6xl font-bold mb-6">Temikki Garden</h1>
            

//             <h2 className="text-center text-3xl font-bold mb-2 mt-12">About the project</h2>
//             <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//             <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left mb-14">
//                 <div className="md:w-1/2">
//                     <p className="text-justify justify-center items-center">Temikki Garden is a mobile AR application tailored towards children enduring long-term hospital stays. The
//                         app allows children to build, modify, and play in a living virtual garden, promoting creativity and their accomplishments.
//                     </p>
//                 </div>
//                 <div className="md:w-1/2">
//                     <Image
//                         src="/images/temikki.jpg"
//                         alt="Temikki Garden"
//                         width={600}
//                         height={400}
//                         className="rounded-lg"
//                     />
//                 </div>
//             </div>

//             <div className="mb-20">
//                 <h2 className="text-center text-3xl font-bold mb-2">Gameplay</h2>
//                 <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//                 <div className="px-4 space-y-10">
//                     <iframe width="900" height="506" src="https://www.youtube.com/embed/MHRfTXn37YM?si=6u1xRlhDsZQ-3a-d" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
//                     {/* <VideoPlayer src="/videos/RigFootage.mp4" poster="" controls autoPlay={false} muted={false} /> */}
//                 </div>
//             </div>
//         </div>
//         <Footer/>
//         </>
//     );
// }

import React from "react";
import Image from "next/image";
import { Heart, Smartphone, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

export default function TemikkiPage() {
    return (
        <>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-teal-950 via-cyan-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 bg-[url('/images/temikki.jpg')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                        Mobile AR · Unity · Healthcare
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                        Temikki Garden
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A mobile AR application promoting emotional well-being for children during 
                        long-term hospital stays through creative play and virtual gardening.
                    </p>
                </div>
            </div>

            {/* Overview Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">About the Project</h2>
                        <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Temikki Garden is a mobile AR application tailored towards children enduring long-term 
                            hospital stays. The app allows children to build, modify, and play in a living virtual 
                            garden, promoting creativity and celebrating their accomplishments.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Through augmented reality technology, children can escape the confines of their hospital 
                            room and create their own magical garden space, providing comfort and joy during 
                            challenging times.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/temikki.jpg"
                                alt="Temikki Garden AR experience"
                                width={700}
                                height={467}
                                className="w-full h-auto"
                                quality={75}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Impact & Purpose</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-teal-100 rounded-lg">
                                    <Heart className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Emotional Support</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Provides comfort and positive distraction for children during extended hospital stays
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-cyan-100 rounded-lg">
                                    <Sparkles className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Creative Expression</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Encourages creativity and self-expression through garden building and customization
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-emerald-100 rounded-lg">
                                    <Smartphone className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">AR Technology</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Leverages mobile AR to create immersive, accessible experiences anywhere in the hospital
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gameplay Video Section */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Gameplay</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">See how children interact with their virtual gardens</p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/MHRfTXn37YM?si=6u1xRlhDsZQ-3a-d" 
                            title="Temikki Garden gameplay video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Making Hospital Stays Brighter</h2>
                    <p className="text-xl leading-relaxed text-teal-100">
                        Temikki Garden represents our commitment to using technology for good, creating 
                        meaningful experiences that bring joy and comfort to children when they need it most. 
                        Every virtual flower planted is a reminder of their strength and resilience.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}