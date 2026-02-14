"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import { usePageContent } from "../context/PageContentContext";

const navLinks = [
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/WorkSamples", label: "Work Samples" },
];

export default function Header() {
    const pathname = usePathname();
    const { setPageContent } = usePageContent(); // Access the context

    const handleSetPageContent = (buttonName) => {
        const content = buttonName.toLowerCase().replace("-", "");
        setPageContent(buttonName); // Update the context value
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-black z-[1000] shadow-md py-4">
            <div className="container mx-auto flex flex-col items-center space-y-4 px-4">
                {/* Title */}
                <Link href="/" className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Mark CHANTEL
                    </h1>
                </Link>

                {/* Navbar */}
                <nav>
                    <ul className="flex space-x-4">
                        {navLinks.map(({ href, label }) => (
                            <li key={href} className="list-none">
                                <Link
                                    href={href}
                                    className={`px-3 py-1 rounded-md transition-colors ${
                                        pathname === href
                                            ? "bg-gray-700 text-white font-semibold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Submenu for Work Samples */}
                {pathname === "/WorkSamples" && (
                    <SubMenu onSetPageContent={handleSetPageContent} />
                )}
            </div>
        </header>
    );
}