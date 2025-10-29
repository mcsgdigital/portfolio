import Image from "next/image";
import backgroundImg from "../assets/images/background.jpeg";

export default function Home() {
  return (
    <main>
      <Image 
        src={backgroundImg}
        alt="Home background"
        loading="eager"
        className="homeBackground"
      />
    </main>
  );
}
