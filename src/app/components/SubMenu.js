"use client";

import Link from "next/link";
import styles from "./SubMenu.module.css";
import { useState } from "react";

export default function SubMenu(props) {
    const [selectedPath, setSelectedPath] = useState("#banners");
    const navLinks = [
        { href: "#banners", label: "BANNERS" },
        { href: "#emails", label: "EMAILS" },
        { href: "#popups", label: "POP-UPS" },
    ];
    

    function GetStyle(buttonName){
        if (buttonName === selectedPath) {
            return styles.active;
        } else {
            return styles.link;
        }
    }

    function handleSetPageContent(event) {
        setSelectedPath("#"+ event.target.textContent.toLowerCase().replace("-", ""));
        props.onSetPageContent(event); // Update the context value
        console.log("SubMenu clicked:", selectedPath);
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