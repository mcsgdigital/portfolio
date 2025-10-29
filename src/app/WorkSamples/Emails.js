import { useEffect, useState } from "react";
import HeaderInfo from "./HeaderInfo";
import styles from "./WorkSamples.module.css";
import Card from "../components/Card";

export default function Emails() {
    const [data, setData] = useState(null);
    const [itemData, setItemData] = useState(null);

    function handleOnClick(selectedItem) {
        setItemData(selectedItem);
    }

    function handleIFrameClick() {
        setItemData(null);
    }

    function GetDATA(){
        fetch("./assets/data_emails.json")
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
        <section id="emails" style={{ padding: "2rem" }} className={styles.section}>
            <article className={styles.article}>
                <h2 className={styles.sectionTitle}>EMAILS</h2>
                <header className={styles.header}>
                    <HeaderInfo 
                        title="Coding:" 
                        description="HTML | CSS" 
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
                                img={"/assets/emails/"+ project.imageUrl}
                                type="email"
                                size={project.size}
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
                    <iframe 
                        className={styles.iframe}
                        src={"./assets/emails/" + itemData.link + "/index.html"} 
                        width={itemData.size}
                        height={"100%"}
                    ></iframe>
                    <button className={styles.btnClose} onClick={handleIFrameClick}>X</button>
                </div>
            }
            
        </section>
    )
}