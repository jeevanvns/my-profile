"use client";

import { useState, useEffect } from "react";
import Logo from "../logo";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDownloadPDF = () => {
        window.print();
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Education", id: "education" },
        { label: "Skills", id: "skills" },
        { label: "Works", id: "works" },
        { label: "Gallery", id: "gallery" },
        { label: "Certifications", id: "certifications" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <header className={`navbar top-0 left-0 z-50 w-full fixed transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container">
                <nav className="py-4 md:py-7">
                    <div className="flex items-center justify-between gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="nav-link text-base xl:text-lg font-normal text-black hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden flex flex-col gap-1.5 p-2"
                                aria-label="Toggle menu"
                            >
                                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>

                            <button
                                onClick={handleDownloadPDF}
                                className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                            >
                                <span className="relative z-10 text-sm md:text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                                    <span className="hidden md:inline">Download PDF Resume</span>
                                    <span className="md:hidden">PDF</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 border-t border-softGray pt-4">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="nav-link text-left text-base font-normal text-black hover:text-primary transition-colors duration-300 py-2"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
