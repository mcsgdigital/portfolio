import styles from './About.module.css';

export default function Skill(props) {
    const barWidth = 200;
    const maxLevel = 5;
    const level = (barWidth * (props.level / maxLevel));

    return (
        <div className={styles.skillContainer}>
            <h3>{props.title}</h3>
            <div className={styles.bar}>
                <div 
                    className={styles.fill} 
                    style={{ 
                        width: level + 'px', 
                        "--fill-width": level  }}
                ></div>
            </div>
        </div>
    );
}