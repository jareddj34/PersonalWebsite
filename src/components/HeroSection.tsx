"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import "animate.css";

const HeroSection = () => {
    const downloadFile = (url: any) => {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", "Jared_deMonteiro_Resume_3_24.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div>
                    <Image
                        src="/images/JaredPic.JPG"
                        alt=""
                        height={300}
                        width={300}
                        className="rounded-full"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
                        Hello, I&#39;m Jared!
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a Computer Scientist with a passion for web
                        development, game development, software engineering, and
                        much more!
                    </p>
                    <div className="flex items-center">
                        <Button
                            className="bg-green-600 hover:bg-green-500"
                            onClick={() => {
                                downloadFile(
                                    "https://jareddemonteiro.vercel.app/Jared_deMonteiro_Resume_3_24.pdf"
                                );
                            }}
                        >
                            Resume{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="ml-2"
                            >
                                <path
                                    d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                                    fill="#ffffff"
                                />
                                <path
                                    d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                                    fill="#ffffff"
                                />
                            </svg>
                        </Button>
                        <div className="ml-4">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/jareddemonteiro/"
                            >
                                <div className="hover-path">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 50 50"
                                    >
                                        <path
                                            fill="#0288D1"
                                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                                        ></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
