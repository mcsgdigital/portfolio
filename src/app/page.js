import Image from "next/image";
import backgroundImg from "../assets/images/background.jpeg";
import Navigation from "./components/Navigation";

export default function Home() {

  return (
    <main>
      <Image 
        src={backgroundImg}
        alt="Home background"
        loading="eager"
        className="homeBackground"
      />
      <Navigation/>
    </main>
  );
}
