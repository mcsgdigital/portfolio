import Image from "next/image";
import styles from "./Card.module.css";

export default function Card(props) {

    return (
        <div className={styles.card} onClick={() => props.handleOnClick(props)}>
            <Image 
                src={props.img} 
                alt={props.title} 
                width={300}
                height={250}
                className="card-image"
                loading="lazy"
            />
            <div className={styles["content"]}>
                <h3 className={styles["title"]}>{props.title}</h3>
                {
                    props.description && 
                    <p className={styles["description"]}>{props.description}</p>
                }
            </div>
        </div>
    )
}