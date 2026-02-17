"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import { usePageContent } from "../context/PageContentContext";

const navLinks = [
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/WorkSamples", label: "Professional Samples" },
];

export default function Header() {
    const pathname = usePathname();
    const { pageContent, setPageContent } = usePageContent(); // Access the context
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the burger menu

    const handleSetPageContent = (buttonName) => {
        const content = buttonName.toLowerCase().replace("-", "");
        setPageContent(content); // Update the context value
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-black z-[1000] shadow-md py-4">
            <div className="container mx-auto flex flex-col items-center space-y-4 px-4 max-w-[1200px]">
                {/* Title */}
                <Link href="/" className="text-center absolute">
                    <h1 className="text-3xl font-bold text-white">
                        Mark CHANTEL
                    </h1>
                </Link>

                {/* Burger Menu for Mobile */}
                <div className="flex justify-between items-center w-full md:hidden">
                    <button
                        className="text-white text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? "✕" : "☰"} {/* Change icon based on isMenuOpen */}
                    </button>
                </div>

                {/* Navbar */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:space-x-4 w-full`}
                >
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="list-none">
                                <Link
                                    href={href}
                                    className={`px-3 py-1 rounded-md transition-colors ${
                                        pathname === href
                                            ? "bg-gray-700 text-white font-semibold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Submenu for Work Samples */}
                {pathname === "/WorkSamples" && (
                    <SubMenu currentPage={pageContent} onSetPageContent={handleSetPageContent} />
                )}
            </div>
        </header>
    );
}