import styles from "./Card.module.css";

export default function CardVideo( props) {
    function handleMouseEnter(event) {
        event.target.setAttribute('preload','metadata');
    }
    
    return (
        <div className={styles.card}>
            <video
                src={"/assets/videos/"+ props.url}
                controls
                muted
                width="320"
                height="240"
                preload="none"
                onMouseEnter={handleMouseEnter}
                poster={"/assets/videos/thumbs/"+ props.poster}
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{props.title}</h3>
            </div> 
        </div>
    )
}