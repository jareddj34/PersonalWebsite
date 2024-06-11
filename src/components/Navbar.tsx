"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className="fixed top-0 inset-x-0 h-15 border-b border-zinc-300 z-[10] py-3 bg-gray-900/5 object-cover shadow-xl"
            style={{ backgroundColor: "#218a39" }}
        >
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* Logo (Kappa Theta Pi) */}
                <div className="flex items-center">
                    <Link href="/">
                        <h1
                            className="text-white font-medium px-6"
                            style={{ fontSize: "25px" }}
                        >
                            Jared de Monteiro
                        </h1>
                    </Link>
                </div>

                {/* Mobile Menu Button (Hamburger or X) */}
                <div className="flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white text-xl focus:outline-none px-6"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="md:hidden absolute top-14 inset-x-0 px-6"
                        style={{
                            backgroundColor: "#218a39",
                        }}
                    >
                        <div className="container mx-auto py-4">
                            <Link
                                href="#home"
                                className="block text-white py-2"
                                onClick={() => handleNavClick("home")}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block text-white py-2"
                                onClick={() => handleNavClick("about")}
                            >
                                About
                            </Link>
                            <Link
                                href="#experience"
                                className="block text-white py-2"
                                onClick={() => handleNavClick("experience")}
                            >
                                Experience
                            </Link>
                            <Link
                                href="#projects"
                                className="block text-white py-2"
                                onClick={() => handleNavClick("projects")}
                            >
                                Projects
                            </Link>
                        </div>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-right justify-between gap-8 text-white">
                    <Link
                        href="#home"
                        onClick={() => handleNavClick("home")}
                        style={{ fontSize: "22px" }}
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => handleNavClick("about")}
                        style={{ fontSize: "22px" }}
                    >
                        About
                    </Link>
                    <Link
                        href="#experience"
                        onClick={() => handleNavClick("experience")}
                        style={{ fontSize: "22px" }}
                    >
                        Experience
                    </Link>
                    <Link
                        href="#projects"
                        onClick={() => handleNavClick("projects")}
                        style={{ fontSize: "22px" }}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
