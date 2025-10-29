'use client';

import Banners from "./Banners";
import Emails from "./Emails";
import Popups from "./Popups";
import { usePageContent } from "../context/PageContentContext";

export default function WorkSamples() {
    const { pageContent } = usePageContent(); // Access the shared state

    return (
        <>
            <div className="paddingTop">
                {
                    pageContent === "banners" ? <Banners /> :
                    pageContent === "emails" ? <Emails /> :
                    pageContent === "popups" ? <Popups /> :
                    null
                }
            </div>
        </>
    )
}