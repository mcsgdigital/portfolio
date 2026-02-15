import Image from "next/image";
import backgroundImg from "../assets/images/background.jpeg";

export const metadata = {
  title: "Mark CHANTEL's Portfolio",
  description: "Web developer portfolio showcasing React, Next.js, and modern web development projects.",
};

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      <Image
        src={backgroundImg}
        alt="Home background"
        loading="eager"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </main>
  );
}
