"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
    { href: "/About", label: "About" },
    { href: "/Projects", label: "Projects" },
    { href: "/WorkSamples", label: "Work Samples" }
];

export default function Navigation() {
    const pathname = usePathname();

    function CheckButtonStyles(currentPath, linkPath) {
        if (currentPath === linkPath && linkPath?.toLowerCase() === "/worksamples") {
            return {
                fontWeight: "bold",
                borderBottom: "5px solid #fff",
            };
        }
        return {};
    }

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {
                    navLinks.map(({ href, label }) => (
                        <Link 
                            key={href} 
                            href={href} 
                            className={pathname.toLowerCase().replace("-", "") === href ? styles.active : undefined}
                            style={
                                CheckButtonStyles(pathname, href)
                            }
                        >
                            <li className={styles.li}>
                                {label}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </nav>
    );
}