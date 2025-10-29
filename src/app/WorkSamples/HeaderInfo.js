import styles from './WorkSamples.module.css';

export default function HeaderInfo(props) {
    const description = props.description.split(" | ");

    return (
        <div className={styles.headerLine}>
            <span className={styles.span}>{props.title}</span>
            <h2 className={styles.h2}>
                { 
                    description.map((desc, index) => (
                        <span key={index}>
                            {desc}
                            {index < description.length - 1 && <span className={styles.separator}> | </span>}
                        </span>
                    ))
                }
            </h2>
        </div>
    )
}