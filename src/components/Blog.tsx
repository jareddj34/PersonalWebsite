// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";

// const posts = [


//     {
//         title: "Game Jam Win",
//         date: "December 2025",
//         description: (
//             <>
//                 My team and I placed 1st for the Broward XP Boost - Citrus Boost Jam! We spent a weekend creating a 2D platformer called &quot;Get Gator Back&quot;, where you play as a lost alligator trying to get back to their home by traversing through different terrain, obstacles, and enemies. Along the journey, the player learns about imiportant environmental facts and issues, trying to preserve each biome they cross. The game can be played {" "}
//                 <a 
//                     href="https://steinvisionstudios.itch.io/get-gator-back"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                     here.
//                 </a>
//                 {" "} We will continue updating and improving the experience, and we are very excited for the future of the game!
//             </>
//         ),
//         pic: "/images/GetGatorBackHome.png",
//         alt: "Get Gator Back Homepage",
//     },
//     {
//         title: "Games for Good Conference",
//         date: "November 2025",
//         description:
//             "I was lucky enough to be invited to the Games for Good Conference at Clark University! This conference focues on how games can be used for social good, and how they can make a positive impact on the world. I was able to attend various panels and workshops, where I learned from industry experts and met other passionate individuals. I was also able to demo my game that I am currently working on, Swampocalypse, an airboat simulator where you drive through a post-apocalyptic Miami Everglades, killing zombies and saving the environment along the way. A huge thanks to the organizers for making this possible!",
//         pic: "/images/gamesforgood.PNG",
//         alt: "Hackathon Win",
//     },
//     {
//         title: "Animation Demo Reel 2025",
//         date: "2025",
//         description: (
//             <>
//                 Over the past year, I have been learning and improving my skills in 3D animation using both Blender and Maya. I have created a variety of animations, from room transformations to character animations. I have compiled them into a {" "}
//                 <a 
//                     href="https://www.youtube.com/watch?v=wifdeubujKk"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                     demo reel
//                 </a>
//                 , that I am super excited to share with everyone! I am super excited to continue learning and improving my skills in animation!
//             </>
//         ),
//         pic: "/images/blender/DemoReelThumbnail.png",
//         alt: "Hackathon Win",
//     },
//     {
//         title: "Tests for Cognitive Impairment",
//         date: "Spring 2025",
//         description: (
//             <>
//                 I was lucky enough to be a part of a research project at the University of Miami, partnering with Dr. Ubbo Visser. The objective of the project was to create digital tests, to detect whether the user has any signs of minor cognitive impairment or Alzheimer&apos;s disease. Variations of these tests have already been worked on, including a real-world test, and a online test that can be taken on the copmuter. The purpose of this project is to produce another variation of this test, where the users can take it in a VR headest. This will give the exams a more immersive element to it, while also allowing it to be digitalized. It was such a great experience working on this project, allowing me to demonstrate my skills in Unity VR, and collaborate with talented individuals like Dr. Visser and Dr. Lisetti. The documentation for the project can be viewed{" "}
//                 <a 
//                     href="https://docs.google.com/document/d/1cCCPMQl8vztD1VaHMsl3QkHKZ9jIcGALblYXA9DDlik/edit?usp=sharing"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                     here
//                 </a>
//                 . I am excited to continue this project, and refine it as time goes on!
//             </>
//         ),
//         pic: "/images/VisserProjectThumbnail.png",
//         alt: "Tests for Cognitive Impairment",
//     },
//     {
//         title: "My First Hackathon Win",
//         date: "February 2025",
//         description:
//             "My team and I placed 3rd in the University of Miami Horizon AI Hackathon for the Entertainment, Arts & Media track! \nWith the help of my friends Cedric Fine and Odin Andrews, we built AI-powered NPCs for video games, allowing users to have dynamic and real-time conversations with characters. \nI had such an amazing experience at this event, meeting people from all over the country and learning from so many talented experts. A huge thanks to the organizers, and everyone who made this event possible.\nLooking forward to seeing what our future holds in more hackathons and projects!",
//         pic: "/images/hackathonwin.JPEG",
//         alt: "Hackathon Win",
//     },
//     {
//         title: "XR Day",
//         date: "January 2025",
//         description:
//             "XR Day was an amazing experience, where people from all over the world came together in this convention and shared the their passions in the world of XR. I was able to meet so many talented people, and learn from them through demos, panels, and networking. I was also able to showcase my work from the Virtual Experience Simulation Lab, where I am developing a VR game where the user gets to drive an airboat through the Miami Everglades. I had such great reactions, and got a ton a great feedback from the audience. This event was a great experience for me, as I got to improve both my professional and social abilities through being in a community this amazing and passionate. I look forward to the next XR Day!",
//         pic: "/images/xrday.jpg",
//         alt: "XR Day",
//     },
    
// ];

// export default function Blog() {
//     return (
//         <section id="blog" className="md:pb-48">
//             <h1 className="text-center font-bold text-4xl mb-6">
//                 Blog
//                 <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
//             </h1>

//             <Carousel>
//                 <CarouselContent>
//                     {posts.map((post, index) => {
//                         return (
//                             <CarouselItem key={index}>
//                                 <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
//                                     <div className="w-full md:w-1/4 flex items-center justify-center pt-10">
//                                         {post.pic ? (
//                                             <img
//                                                 src={`${post.pic}`}
//                                                 alt={post.alt}
//                                                 className="w-full h-auto max-w-xs md:max-w-full rounded-lg"
//                                             />
//                                         ) : (
//                                             <div className="bg-gray-200 w-48 h-48"></div>
//                                         )}
//                                     </div>
//                                     <div className="w-3/4 pt-10">
//                                         <h2 className="font-bold text-2xl">
//                                             {post.title}
//                                         </h2>
//                                         <h3 className="text-xl">{post.date}</h3>
//                                         <p className="mt-4">
//                                             {post.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </CarouselItem>
//                         );
//                     })}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </section>
//     );
// }

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "lucide-react";

const posts = [
    {
        title: "GDC Festival of Gaming",
        date: "March 2025",
        description: (
            <>
                I had the amazing opportunity to attend the GDC Festival of Gaming in San Francisco, the largest annual conference for video game developers! 

Throughout the week, I was able to go to several keynote talks, panels, and networking events where I learned more about the creative and technical sides of the gaming industry, while also connecting with amazing developers, artists, and industry leaders.

Some notable events/places I went to: Leadership Summit powered by AWS for Games, Get in the Game Mentorship Workshops with teams from Discord, Meta Oculus, Sony Interactive Entertainment, Netflix Games, and Double Fine Productions, Nite to Unite: ESA Foundation Gala & Networking Reception, The Game Developers Choice Awards

These experiences gave me valuable insights into the future of the industry and what it takes to build impactful games.
            </>
        ),
        pic: "/images/GDC.JPEG",
        alt: "GDC Picture",
    },
    {
        title: "Game Jam Win",
        date: "December 2025",
        description: (
            <>
                My team and I placed 1st for the Broward XP Boost - Citrus Boost Jam! We spent a weekend creating a 2D platformer called &quot;Get Gator Back&quot;, where you play as a lost alligator trying to get back to their home by traversing through different terrain, obstacles, and enemies. Along the journey, the player learns about important environmental facts and issues, trying to preserve each biome they cross. The game can be played {" "}
                <a 
                    href="https://steinvisionstudios.itch.io/get-gator-back"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 underline font-semibold"
                >
                    here.
                </a>
                {" "} We will continue updating and improving the experience, and we are very excited for the future of the game!
            </>
        ),
        pic: "/images/GetGatorBackHome.png",
        alt: "Get Gator Back Homepage",
    },
    {
        title: "Games for Good Conference",
        date: "November 2025",
        description:
            "I was lucky enough to be invited to the Games for Good Conference at Clark University! This conference focuses on how games can be used for social good, and how they can make a positive impact on the world. I was able to attend various panels and workshops, where I learned from industry experts and met other passionate individuals. I was also able to demo my game that I am currently working on, Swampocalypse, an airboat simulator where you drive through a post-apocalyptic Miami Everglades, killing zombies and saving the environment along the way. A huge thanks to the organizers for making this possible!",
        pic: "/images/gamesforgood.PNG",
        alt: "Games for Good Conference",
    },
    {
        title: "Animation Demo Reel 2025",
        date: "2025",
        description: (
            <>
                Over the past year, I have been learning and improving my skills in 3D animation using both Blender and Maya. I have created a variety of animations, from room transformations to character animations. I have compiled them into a {" "}
                <a 
                    href="https://www.youtube.com/watch?v=wifdeubujKk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 underline font-semibold"
                >
                    demo reel
                </a>
                , that I am super excited to share with everyone! I am super excited to continue learning and improving my skills in animation!
            </>
        ),
        pic: "/images/blender/DemoReelThumbnail.png",
        alt: "Animation Demo Reel",
    },
    {
        title: "Tests for Cognitive Impairment",
        date: "Spring 2025",
        description: (
            <>
                I was lucky enough to be a part of a research project at the University of Miami, partnering with Dr. Ubbo Visser. The objective of the project was to create digital tests, to detect whether the user has any signs of minor cognitive impairment or Alzheimer&apos;s disease. Variations of these tests have already been worked on, including a real-world test, and an online test that can be taken on the computer. The purpose of this project is to produce another variation of this test, where the users can take it in a VR headset. This will give the exams a more immersive element to it, while also allowing it to be digitalized. It was such a great experience working on this project, allowing me to demonstrate my skills in Unity VR, and collaborate with talented individuals like Dr. Visser and Dr. Lisetti. The documentation for the project can be viewed{" "}
                <a 
                    href="https://docs.google.com/document/d/1cCCPMQl8vztD1VaHMsl3QkHKZ9jIcGALblYXA9DDlik/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 underline font-semibold"
                >
                    here
                </a>
                . I am excited to continue this project, and refine it as time goes on!
            </>
        ),
        pic: "/images/VisserProjectThumbnail.png",
        alt: "Tests for Cognitive Impairment",
    },
    {
        title: "My First Hackathon Win",
        date: "February 2025",
        description:
            "My team and I placed 3rd in the University of Miami Horizon AI Hackathon for the Entertainment, Arts & Media track! With the help of my friends Cedric Fine and Odin Andrews, we built AI-powered NPCs for video games, allowing users to have dynamic and real-time conversations with characters. I had such an amazing experience at this event, meeting people from all over the country and learning from so many talented experts. A huge thanks to the organizers, and everyone who made this event possible. Looking forward to seeing what our future holds in more hackathons and projects!",
        pic: "/images/hackathonwin.JPEG",
        alt: "Hackathon Win",
    },
    {
        title: "XR Day",
        date: "January 2025",
        description:
            "XR Day was an amazing experience, where people from all over the world came together in this convention and shared their passions in the world of XR. I was able to meet so many talented people, and learn from them through demos, panels, and networking. I was also able to showcase my work from the Virtual Experience Simulation Lab, where I am developing a VR game where the user gets to drive an airboat through the Miami Everglades. I had such great reactions, and got a ton of great feedback from the audience. This event was a great experience for me, as I got to improve both my professional and social abilities through being in a community this amazing and passionate. I look forward to the next XR Day!",
        pic: "/images/xrday.jpg",
        alt: "XR Day",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Blog & Updates
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-4 text-lg">Recent highlights and achievements</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {posts.map((post, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-2">
                                        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                                            <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                                                {/* Image */}
                                                {post.pic && (
                                                    <div className="md:col-span-2">
                                                        <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-md">
                                                            <Image
                                                                src={post.pic}
                                                                alt={post.alt}
                                                                fill
                                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                                                quality={75}
                                                                loading="lazy"
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Content */}
                                                <div className={`${post.pic ? 'md:col-span-3' : 'md:col-span-5'} flex flex-col justify-center`}>
                                                    <div className="space-y-4">
                                                        {/* Date Badge */}
                                                        <div className="flex items-center gap-2 text-emerald-600">
                                                            <Calendar className="w-4 h-4" />
                                                            <span className="text-sm font-semibold">{post.date}</span>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="text-3xl font-bold text-slate-900">
                                                            {post.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <div className="text-slate-700 leading-relaxed">
                                                            {post.description}
                                                        </div>

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4">
                            <CarouselPrevious className="static transform-none bg-white hover:bg-emerald-50 border-emerald-200" />
                            <CarouselNext className="static transform-none bg-white hover:bg-emerald-50 border-emerald-200" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
