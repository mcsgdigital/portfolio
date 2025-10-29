'use client';

import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardVideo from "../components/CardVideo";
import HeaderInfo from "./HeaderInfo";
import styles from "./WorkSamples.module.css";

export default function Banners() {
    const [dataImage, setDataImage] = useState(null);
    const [dataVideo, setDataVideo] = useState(null);

    function GetImagesDATA(){
        fetch("./assets/data_static.json")
        .then((res) => res.json())
        .then((data) => {
            setDataImage(data);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    function GetVideosDATA(){
        fetch("./assets/data_animated.json")
        .then((res) => res.json())
        .then((data) => {
            setDataVideo(data);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    useEffect(() => {
        GetImagesDATA();
        GetVideosDATA();
    }, []);

    return (
        <section id="banners" style={{ padding: "2rem" }} className={styles.section}>
            <article className={styles.article}>
                <h2 className={styles.sectionTitle}>STATICS</h2>
                <header className={styles.header}>
                        <HeaderInfo 
                            title="Coding:" 
                            description="HTML | Javascript | CSS | SASS" 
                        />
                        <HeaderInfo 
                            title="Servers:" 
                            description="FlashTalking | Mediamind | Google Studio" 
                        />
                        <HeaderInfo 
                            title="Design:" 
                            description="Photoshop | Illustrator | SVG" 
                        />
                </header>
                
                <div className={styles.container}>
                    {
                        dataImage && dataImage.map((project, index) => (
                            <Card 
                                key={index}
                                title={project.title}
                                description={project.description}
                                img={project.imageUrl}
                                handleOnClick={() => {}}
                            />
                        ))
                    }
                </div>
            </article>
            <article className={styles.article}>
                <h2 className={styles.sectionTitle}>DYNAMICS & ANIMATED</h2>
                <header className={styles.header}>
                        <HeaderInfo 
                            title="Coding:" 
                            description="HTML | Javascript | CSS | SASS | GSAP" 
                        />
                        <HeaderInfo 
                            title="Servers:" 
                            description="FlashTalking | Mediamind | Google Studio" 
                        />
                        <HeaderInfo 
                            title="Design:" 
                            description="Photoshop | Illustrator | SVG | After Effects | Media Encoder | Premiere" 
                        />
                </header>
                
                <div className={styles.container}>
                    {
                        dataVideo && dataVideo.map((project, index) => (
                            <CardVideo 
                                key={index}
                                title={project.title}
                                url={project.url}
                                poster={project.poster}
                            />
                        ))
                    }
                </div>
            </article>
        </section>
    )
}