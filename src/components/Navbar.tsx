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

    const handleSectionClick = (sectionSelector: string, event: React.MouseEvent) => {
        // If we're not on the home page, navigate back to home (anchor to projects)
        if (typeof window !== "undefined" && window.location.pathname !== "/" && window.location.pathname !== "") {
            // Allow the browser to navigate to the home page anchor; do not prevent default here.
            window.location.href = "/#projects";
            return;
        }

        // If we are on the home page, prevent the default link behaviour and smooth-scroll to the target.
        event.preventDefault();
        const targetElement = document.querySelector(sectionSelector);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div
            className="fixed top-0 inset-x-0 h-15 border-b border-zinc-300 z-[10] py-3 bg-gray-900/5 object-cover shadow-xl"
            style={{ backgroundColor: "#d8d8d8ff" }}
        >
            <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
                {/* Logo (Kappa Theta Pi) */}
                <div className="flex items-center">
                    <Link href="/">
                        <h1
                            className="text-black font-bold px-6"
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
                        className="md:hidden text-black text-xl focus:outline-none px-6"
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="md:hidden absolute top-14 inset-x-0 px-6"
                        style={{
                            backgroundColor: "#d8d8d8ff",
                        }}
                    >
                        <div className="container mx-auto py-4">
                            <Link
                                href="#home"
                                className="block text-black py-2"
                                onClick={() => handleNavClick("home")}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block text-black py-2"
                                onClick={() => handleNavClick("about")}
                            >
                                About
                            </Link>
                            <Link
                                href="#blog"
                                className="block text-black py-2"
                                onClick={() => handleNavClick("blog")}
                            >
                                Blog
                            </Link>
                            <Link
                                href="#experience"
                                className="block text-black py-2"
                                onClick={() => handleNavClick("experience")}
                            >
                                Experience
                            </Link>
                            <Link
                                href="#projects"
                                className="block text-black py-2"
                                onClick={() => handleNavClick("projects")}
                            >
                                Projects
                            </Link>
                        </div>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-right justify-between gap-8 text-black font-medium">
                    <Link
                        href="/#home"
                        onClick={() => handleNavClick("home")}
                        style={{ fontSize: "22px" }}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        onClick={() => handleNavClick("about")}
                        style={{ fontSize: "22px" }}
                    >
                        About
                    </Link>
                    <Link
                        href="/#blog"
                        onClick={() => handleNavClick("blog")}
                        style={{ fontSize: "22px" }}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/#experience"
                        onClick={() => handleNavClick("experience")}
                        style={{ fontSize: "22px" }}
                    >
                        Experience
                    </Link>
                    
                    {/* Projects Dropdown */}
                    <div className="relative group">
                        <Link
                            href="/#projects"
                            onClick={() => handleNavClick("projects")}
                            style={{ fontSize: "22px" }}
                            className="flex items-center hover:text-gray-600 transition-colors"
                        >
                            Projects
                            <svg 
                                className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="py-2">
                                
                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="games"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    Games
                                </a>

                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="websites"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    Websites
                                </a>
                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="animations"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    After Effects
                                </a>
                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="blender"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    3D Models & Animations
                                </a>
                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="figmas"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    Figmas
                                </a>
                                <a
                                    href="/#projects"
                                    onClick={(e) => handleSectionClick('[data-section="photos"]', e)}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    Photoshop
                                </a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
