import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const posts = [
    {
        title: "My First Hackathon Win",
        date: "February 2025",
        description:
            "My team and I placed 3rd in the University of Miami Horizon AI Hackathon for the Entertainment, Arts & Media track! \nWith the help of my friends Cedric Fine and Odin Andrews, we built AI-powered NPCs for video games, allowing users to have dynamic and real-time conversations with characters. \nI had such an amazing experience at this event, meeting people from all over the country and learning from so many talented experts. A huge thanks to the organizers, and everyone who made this event possible.\nLooking forward to seeing what our future holds in more hackathons and projects!",
        pic: "/images/hackathonwin.JPEG",
        alt: "Hackathon Win",
    },
    {
        title: "XR Day",
        date: "January 2025",
        description:
            "XR Day was an amazing experience, where people from all over the world came together in this convention and shared the their passions in the world of XR. I was able to meet so many talented people, and learn from them through demos, panels, and networking. I was also able to showcase my work from the Virtual Experience Simulation Lab, where I am developing a VR game where the user gets to drive an airboat through the Miami Everglades. I had such great reactions, and got a ton a great feedback from the audience. This event was a great experience for me, as I got to improve both my professional and social abilities through being in a community this amazing and passionate. I look forward to the next XR Day!",
        pic: "/images/xrday.jpg",
        alt: "XR Day",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="md:pb-48">
            <h1 className="text-center font-bold text-4xl mb-6">
                Blog
                <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
            </h1>

            <Carousel>
                <CarouselContent>
                    {posts.map((post, index) => {
                        return (
                            <CarouselItem key={index}>
                                <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/4 flex items-center justify-center">
                                        {post.pic ? (
                                            <img
                                                src={`${post.pic}`}
                                                alt={post.alt}
                                                className="w-full h-auto max-w-xs md:max-w-full"
                                            />
                                        ) : (
                                            <div className="bg-gray-200 w-48 h-48"></div>
                                        )}
                                    </div>
                                    <div className="w-3/4 pt-10">
                                        <h2 className="font-bold text-2xl">
                                            {post.title}
                                        </h2>
                                        <h3 className="text-xl">{post.date}</h3>
                                        <p className="mt-4">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
