"use client";

import styles from './About.module.css';
import { useEffect, useState } from "react";
import Skill from './Skill';

export default function About() {
    const [data, setData] = useState(null);

    function GetDATA(){
        fetch("./assets/data_about.json")
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
        <div className="paddingTop">
            <section id="about" className={styles.about} style={{ padding: "2rem" }}>
                <div className={styles.title}>
                    <h1>FRONT END</h1>
                    <h2>WEB DEVELOPER</h2>
                </div>
                <p>
                    Expertise in front end web development for banners, emails and webpage using HTML5 and Adobe suite tools applications. Studied Computer Science at the University of Westminster in Harrow. DoubleClick certified. Well versed in all major ad servers. Delivering compatibility to high standard and within requirements meeting tight deadlines. Cover creative stages from beginning to end through a wide variety of applications. Fluent in both French and English written and spoken.
                </p>
            </section>
            <section id="skills" className={styles.skills}>
                {
                    data && data.map((skill, index) => 
                        <Skill 
                            key={index} 
                            title={skill.title} 
                            level={skill.level}
                        />
                    )
                }
            </section>
        </div>
    )
}