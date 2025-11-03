"use client";

import Link from "next/link";
import styles from "./SubMenu.module.css";

export default function SubMenu(props) {
    console.log("SubMenu props:", props);
    
    return (
        <div className={styles.subMenu}>
            <Link 
                href={"#banners"} 
                className={styles.link} 
                onClick={props.onSetPageContent}
            >BANNERS
            </Link>
            <Link 
                href="#emails" 
                className={styles.link} 
                onClick={props.onSetPageContent}
            >EMAILS
            </Link>
            <Link 
                href="#popups" 
                className={styles.link} 
                onClick={props.onSetPageContent}
            >POP-UPS
            </Link>
        </div>
    )
}