'use client';

import { useEffect } from "react";
import Banners from "./Banners";
import Emails from "./Emails";
import Popups from "./Popups";
import { usePageContent } from "../context/PageContentContext";

export default function WorkSamples() {
    const { pageContent } = usePageContent(); // Access the shared state

    useEffect(() => {
        // Reset scroll position to ensure content starts below the header
        const workSamplesElement = document.getElementById("work-samples");
        if (workSamplesElement) {
            workSamplesElement.scrollTop = 0; // Reset scroll position for the container
        }
        window.scrollTo({ top: 0, behavior: "smooth" }); // Reset scroll position for the page
    }, [pageContent]); // Run this effect whenever the submenu changes

    return (
        <>
            <div id="work-samples" className="pt-[10rem] min-h-screen">
                {
                    pageContent === "banners" ? <Banners /> :
                    pageContent === "emails" ? <Emails /> :
                    pageContent === "popups" ? <Popups /> :
                    null
                }
            </div>
        </>
    );
}