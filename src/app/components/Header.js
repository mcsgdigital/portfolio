"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import SubMenu from "./SubMenu";
import { usePageContent } from "../context/PageContentContext";

const navLinks = [
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/WorkSamples", label: "Work Samples" },
    // { href: "/Contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [theme, setTheme] = useState("dark");
    const { setPageContent } = usePageContent(); // Access the context

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    function handleSetPageContent(event) {
        const content = event.target.textContent.toLowerCase().replace("-", "");
        setPageContent(content); // Update the context value
    }

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.homeLink}>
                <h1 className={styles.h1}>Mark CHANTEL</h1>
            </Link>
            {/* <button 
                className={styles.themeToggle} aria-label="Toggle Dark/Light Theme"
                onClick={toggleTheme}>
                {
                    theme === "light" ?
                    <FaSun className={styles.sunIcon} /> :
                    <FaMoon className={styles.moonIcon} />
                }
            </button> */}
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {
                        navLinks.map(({ href, label }) => (
                            <li key={href} className={styles.li}>
                                <Link 
                                    href={href} 
                                    className={pathname === href ? styles.active : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                {
                    pathname?.toLowerCase() === "/worksamples" && <SubMenu onSetPageContent={handleSetPageContent} />
                }
            </nav>
        </header>
    );
}