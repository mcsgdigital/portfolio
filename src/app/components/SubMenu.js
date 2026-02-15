import { useEffect, useState } from "react";
import Link from "next/link";

export default function SubMenu({ currentPage, onSetPageContent }) {
    const [activeButton, setActiveButton] = useState(currentPage); // Initialize with currentPage

    useEffect(() => {
        setActiveButton(currentPage); // Update activeButton when currentPage changes
    }, [currentPage]);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        onSetPageContent(buttonName); // Call the parent handler
    };

    return (
        <div className="flex items-center justify-center space-x-6 bg-gray-800 p-2 w-[94%] rounded-md shadow-md">
            <Link
                href="#banners"
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    activeButton === "banners"
                        ? "bg-orange-500 text-black font-bold"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
                onClick={() => handleButtonClick("banners")}
            >
                BANNERS
            </Link>
            <Link
                href="#emails"
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    activeButton === "emails"
                        ? "bg-orange-500 text-black font-bold"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
                onClick={() => handleButtonClick("emails")}
            >
                EMAILS
            </Link>
            <Link
                href="#popups"
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    activeButton === "popups"
                        ? "bg-orange-500 text-black font-bold"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
                onClick={() => handleButtonClick("popups")}
            >
                POP-UPS
            </Link>
        </div>
    );
}