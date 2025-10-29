import { useEffect, useState } from "react";
import HeaderInfo from "./HeaderInfo";
import styles from "./WorkSamples.module.css";
import Card from "../components/Card";
import Image from "next/image";

export default function Popups() {
    const [data, setData] = useState(null);
    const [itemData, setItemData] = useState(null);

    function handleOnClick(selectedItem) {
        setItemData(selectedItem);
    }

    function handleIFrameClick() {
        setItemData(null);
    }

    function GetDATA(){
        fetch("./assets/data_popups.json")
        .then((res) => res.json())
        .then((newData) => {
            setData(newData);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    useEffect(() => {
        GetDATA();
    }, []);

    return (
        <section id="popups" style={{ padding: "2rem" }} className={styles.section}>
            <article className={styles.article}>
                <h2 className={styles.sectionTitle}>EMAILS</h2>
                <header className={styles.header}>
                    <HeaderInfo 
                        title="Coding:" 
                        description="HTML | CSS | Javascript | JQuery" 
                    />
                    <HeaderInfo 
                        title="Design:" 
                        description="Photoshop | Illustrator" 
                    />
                </header>
                
                <div className={styles.container}>
                    {
                        data && data.map((project, index) => (
                            <Card 
                                key={index}
                                title={project.title}
                                description={null}
                                img={"/assets/popups/"+ project.imageUrl +"/thumb.png"}
                                type="popup"
                                link={project.linkUrl}
                                handleOnClick={handleOnClick}
                            />
                        ))
                    }
                </div>
            </article>
            {
                itemData && 
                <div className={styles.iFrameOverlay} onClick={handleIFrameClick}>
                    <Image 
                        src={"/assets/popups/" + itemData.link} 
                        alt="Popup"
                        width={600}
                        height={400}
                    ></Image>
                </div>
            }
        </section>
    )
}