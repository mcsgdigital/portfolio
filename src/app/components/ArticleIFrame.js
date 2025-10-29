import Card from "./Card";
import styles from "../Projects/Projects.module.css";

export default function ArticleIFrame(props) {

    return (
        <>
            <article className={styles.article}>
                <h2 className={styles.sectionTitle}>INTERACTIVE APPS</h2>
                <hr className={styles.divider}/>
                <br/>
                <div className={styles.container}>
                    {
                        props.data && props.data.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                img={"/assets/projects/apps/"+ project.imageUrl +".png"}
                                type="project"
                                link={project.linkUrl}
                                size={project.size}
                                handleOnClick={props.handleOnClick}
                            />
                        ))
                    }
                </div>
            </article>
            {
                props.itemData && 
                <div className={styles.iFrameOverlay} onClick={props.handleItemClick}>
                    <iframe
                        className={styles.iframe}
                        src={props.itemData.link} 
                        title="Assembly"
                        width={props.itemData.size[0]}
                        height={props.itemData.size[1]}
                    >
                    </iframe>
                </div>
            }
        </>
    )
}