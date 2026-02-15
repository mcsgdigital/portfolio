"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { PageContentProvider } from "./context/PageContentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en" className="dark:bg-neutral-600 bg-white min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white text-black min-h-screen`}
      >
        <PageContentProvider>
          <Header />
          {/* Conditionally apply max-w-[1200px] */}
          {pathname === "/" ? (
            <div>{children}</div> // No container for Home page
          ) : (
            <div className="max-w-[1200px] mx-auto px-4">{children}</div>
          )}
        </PageContentProvider>
      </body>
    </html>
  );
}

export function usePageContent() {
  return useContext(PageContentContext);
}