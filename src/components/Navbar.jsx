import React, { useState } from 'react';
import { Phone, Menu, X, Plane, Globe, Users, Briefcase, Bookmark } from 'lucide-react';

// Define your navigation links
const navLinks = [
    { name: "Home", href: "/", icon: <Plane className="w-5 h-5" /> },
    { name: "Destinations", href: "/destinations", icon: <Globe className="w-5 h-5" /> },
    { name: "Tour Packages", href: "/packages", icon: <Briefcase className="w-5 h-5" /> },
    { name: "About Us", href: "/about", icon: <Users className="w-5 h-5" /> },
    { name: "Blog", href: "/blog", icon: <Bookmark className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-5 h-5" /> },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed w-full z-50 transition-all duration-300 shadow-lg bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between py-4">

                    {/* 1. Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            {/* Assuming the logo URL is correct and h-12 is a good size */}
                            <img
                                className='h-12 md:h-14'
                                src="https://i.postimg.cc/TP6w89Pc/ATB-LOGO-PNG.png"
                                alt="Air Travel Booking Logo"
                            />
                        </a>
                    </div>

                    {/* 2. Primary Navigation (Desktop) */}
                    <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium text-base hover:text-teal-600 transition-colors relative group"
                            >
                                {link.name}
                                {/* Underline hover effect */}
                                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* 3. Call to Action & Mobile Button */}
                    <div className="flex items-center gap-4">
                        {/* Premium Call to Action (Desktop/Tablet) */}
                        <a
                            href="tel:+1-844-821-5950"
                            className="hidden sm:flex items-center gap-2 bg-teal-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-teal-700 hover:shadow-xl"
                            aria-label="Call for urgent booking assistance"
                        >
                            <Phone className='h-5 w-5 animate-pulse' />
                            <span className='hidden md:inline text-sm'>+1-844-821-5950</span>
                            <span className='inline md:hidden text-sm'>Call Us</span>
                        </a>

                        {/* Mobile Menu Button (Tablet/Mobile) */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* 4. Mobile Menu Overlay */}
            {/* The hidden/block is based on the 'isMenuOpen' state */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="bg-gray-50 border-t border-gray-100 px-4 pb-4">
                    <ul className="space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={toggleMenu} // Close menu on link click
                                    className="flex items-center gap-3 w-full p-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-teal-100 hover:text-teal-700 transition-colors"
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}