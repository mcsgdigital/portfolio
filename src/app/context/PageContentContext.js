"use client";

import { createContext, useContext, useState } from "react";

// Create the context
const PageContentContext = createContext();

// Create a provider component
export function PageContentProvider({ children }) {
    const [pageContent, setPageContent] = useState("banners");

    return (
        <PageContentContext.Provider value={{ pageContent, setPageContent }}>
            {children}
        </PageContentContext.Provider>
    );
}

// Custom hook to use the context
export function usePageContent() {
    const context = useContext(PageContentContext);
    if (!context) {
        throw new Error("usePageContent must be used within a PageContentProvider");
    }
    return context;
}