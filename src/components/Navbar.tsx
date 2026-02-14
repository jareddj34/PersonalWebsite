// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const Navbar: React.FC = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const handleNavClick = (targetId: string) => {
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     const handleSectionClick = (sectionSelector: string, event: React.MouseEvent) => {
//         // If we're not on the home page, navigate back to home (anchor to projects)
//         if (typeof window !== "undefined" && window.location.pathname !== "/" && window.location.pathname !== "") {
//             // Allow the browser to navigate to the home page anchor; do not prevent default here.
//             window.location.href = "/#projects";
//             return;
//         }

//         // If we are on the home page, prevent the default link behaviour and smooth-scroll to the target.
//         event.preventDefault();
//         const targetElement = document.querySelector(sectionSelector);
//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//     };

//     return (
//         <div
//             className="fixed top-0 inset-x-0 h-15 border-b border-zinc-300 z-[10] py-3 bg-gray-900/5 object-cover shadow-xl"
//             style={{ backgroundColor: "#d8d8d8ff" }}
//         >
//             <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
//                 {/* Logo (Kappa Theta Pi) */}
//                 <div className="flex items-center">
//                     <Link href="/">
//                         <h1
//                             className="text-black font-bold px-6"
//                             style={{ fontSize: "25px" }}
//                         >
//                             Jared de Monteiro
//                         </h1>
//                     </Link>
//                 </div>

//                 {/* Mobile Menu Button (Hamburger or X) */}
//                 <div className="flex items-center">
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="md:hidden text-black text-xl focus:outline-none px-6"
//                     >
//                         {isMobileMenuOpen ? "✕" : "☰"}
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="md:hidden absolute top-14 inset-x-0 px-6"
//                         style={{
//                             backgroundColor: "#d8d8d8ff",
//                         }}
//                     >
//                         <div className="container mx-auto py-4">
//                             <Link
//                                 href="#home"
//                                 className="block text-black py-2"
//                                 onClick={() => handleNavClick("home")}
//                             >
//                                 Home
//                             </Link>
//                             <Link
//                                 href="#about"
//                                 className="block text-black py-2"
//                                 onClick={() => handleNavClick("about")}
//                             >
//                                 About
//                             </Link>
//                             <Link
//                                 href="#blog"
//                                 className="block text-black py-2"
//                                 onClick={() => handleNavClick("blog")}
//                             >
//                                 Blog
//                             </Link>
//                             <Link
//                                 href="#experience"
//                                 className="block text-black py-2"
//                                 onClick={() => handleNavClick("experience")}
//                             >
//                                 Experience
//                             </Link>
//                             <Link
//                                 href="#projects"
//                                 className="block text-black py-2"
//                                 onClick={() => handleNavClick("projects")}
//                             >
//                                 Projects
//                             </Link>
//                         </div>
//                     </div>
//                 )}

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-right justify-between gap-8 text-black font-medium">
//                     <Link
//                         href="/#home"
//                         onClick={() => handleNavClick("home")}
//                         style={{ fontSize: "22px" }}
//                     >
//                         Home
//                     </Link>
//                     <Link
//                         href="/#about"
//                         onClick={() => handleNavClick("about")}
//                         style={{ fontSize: "22px" }}
//                     >
//                         About
//                     </Link>
//                     <Link
//                         href="/#blog"
//                         onClick={() => handleNavClick("blog")}
//                         style={{ fontSize: "22px" }}
//                     >
//                         Blog
//                     </Link>
//                     <Link
//                         href="/#experience"
//                         onClick={() => handleNavClick("experience")}
//                         style={{ fontSize: "22px" }}
//                     >
//                         Experience
//                     </Link>
                    
//                     {/* Projects Dropdown */}
//                     <div className="relative group">
//                         <Link
//                             href="/#projects"
//                             onClick={() => handleNavClick("projects")}
//                             style={{ fontSize: "22px" }}
//                             className="flex items-center hover:text-gray-600 transition-colors"
//                         >
//                             Projects
//                             <svg 
//                                 className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" 
//                                 fill="none" 
//                                 stroke="currentColor" 
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                         </Link>
                        
//                         {/* Dropdown Menu */}
//                         <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                             <div className="py-2">
                                
//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="games"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     Games
//                                 </a>

//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="websites"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     Websites
//                                 </a>
//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="animations"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     After Effects
//                                 </a>
//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="blender"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     3D Models & Animations
//                                 </a>
//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="figmas"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     Figmas
//                                 </a>
//                                 <a
//                                     href="/#projects"
//                                     onClick={(e) => handleSectionClick('[data-section="photos"]', e)}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
//                                 >
//                                     Photoshop
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    const handleSectionClick = (sectionSelector: string, event: React.MouseEvent) => {
        if (typeof window !== "undefined" && window.location.pathname !== "/" && window.location.pathname !== "") {
            window.location.href = "/#projects";
            return;
        }
        event.preventDefault();
        const targetElement = document.querySelector(sectionSelector);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50"
                    : "bg-white/60 backdrop-blur-sm border-b border-slate-200/30"
            }`}
        >
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-green-700 transition-all">
                            Jared de Monteiro
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/#home"
                            onClick={() => handleNavClick("home")}
                            className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#about"
                            onClick={() => handleNavClick("about")}
                            className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/#blog"
                            onClick={() => handleNavClick("blog")}
                            className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/#experience"
                            onClick={() => handleNavClick("experience")}
                            className="text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Experience
                        </Link>

                        {/* Projects Dropdown */}
                        <div className="relative group">
                            <Link
                                href="/#projects"
                                onClick={() => handleNavClick("projects")}
                                className="flex items-center gap-1 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                            >
                                Projects
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    <a
                                        href="/#games"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        Games
                                    </a>
                                    <a
                                        href="/#websites"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        Websites
                                    </a>
                                    <a
                                        href="/#animations"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        3D Models & Animations
                                    </a>
                                    <a
                                        href="/#aftereffects"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        After Effects
                                    </a>
                                    
                                    <a
                                        href="/#figmas"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        Figmas
                                    </a>
                                    <a
                                        href="/#photos"
                                        onClick={() => {
                                            setTimeout(() => {
                                                const element = document.getElementById('projects');
                                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }}
                                        className="block px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        Photoshop
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-200">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/#home"
                                onClick={() => handleNavClick("home")}
                                className="px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/#about"
                                onClick={() => handleNavClick("about")}
                                className="px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="/#blog"
                                onClick={() => handleNavClick("blog")}
                                className="px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/#experience"
                                onClick={() => handleNavClick("experience")}
                                className="px-4 py-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Experience
                            </Link>
                            
                            <div className="px-4 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                Projects
                            </div>
                            <a
                                href="/#games"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Games
                            </a>
                            <a
                                href="/#websites"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Websites
                            </a>
                            <a
                                href="/#animations"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                3D Models & Animations
                            </a>
                            <a
                                href="/#aftereffects"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                After Effects
                            </a>
                            
                            <a
                                href="/#figmas"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Figmas
                            </a>
                            <a
                                href="/#photos"
                                className="pl-8 pr-4 py-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                Photoshop
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;