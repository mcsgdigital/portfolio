import Image from "next/image";
import backgroundImg from "../assets/images/background.jpeg";

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
