"use client";

import Link from "next/link";
import styles from "./SubMenu.module.css";

export default function SubMenu(props) {
    const navLinks = [
        { href: "#banners", label: "BANNERS" },
        { href: "#emails", label: "EMAILS" },
        { href: "#popups", label: "POP-UPS" },
    ];

    function GetStyle(buttonName){
        if (buttonName === props.subPath) {
            return styles.active;
        } else {
            return styles.link;
        }
    }

    function handleSetPageContent(event) {
        props.handleSubPath(event);
        props.onSetPageContent(event); // Update the context value
    }
    
    
    return (
        <div className={styles.subMenu}>
            {
                navLinks.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        // className={styles.link} 
                        className={GetStyle(link.href)}
                        onClick={handleSetPageContent}
                    >
                        {link.label}
                    </Link>
                ))
            }
        </div>
    )
}