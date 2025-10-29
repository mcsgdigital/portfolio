"use client";

import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import ArticleIFrame from "../components/ArticleIFrame";
import ArticleVideo from "../components/ArticleVideo";

export default function Projects() {
    const [dataAPPS, setDataAPPS] = useState(null);
    const [dataGAMES, setDataGAMES] = useState(null);
    const [itemDataAPPS, setItemDataAPPS] = useState(null);
    const [itemDataGAMES, setItemDataGAMES] = useState(null);

    function handleOnClickAPPS(selectedItem) {
        setItemDataAPPS(selectedItem);
    }

    function handleAppsClick() {
        setItemDataAPPS(null);
    }

    function handleOnClickGAMES(selectedItem) {
        setItemDataGAMES(selectedItem);
    }

    function handleGamesClick() {
        setItemDataGAMES(null);
    }

    function GetDATA_apps(){
        fetch("./assets/data_projects_apps.json")
        .then((res) => res.json())
        .then((newData) => {
            setDataAPPS(newData);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    function GetDATA_games(){
        fetch("./assets/data_projects_games.json")
        .then((res) => res.json())
        .then((newData) => {
            setDataGAMES(newData);
        })
        .catch((error) => {
            console.error("Error fetching projects data:", error);
        });
    }

    useEffect(() => {
        GetDATA_apps();
        GetDATA_games();
    }, []);

    return (
        <section id="projects" style={{ padding: "2rem" }} className={styles.section}>
            <ArticleIFrame
                data={dataAPPS}
                handleOnClick={handleOnClickAPPS}
                itemData={itemDataAPPS}
                handleItemClick={handleAppsClick}
            />
            <ArticleVideo
                data={dataGAMES}
                handleOnClick={handleOnClickGAMES}
                itemData={itemDataGAMES}
                handleItemClick={handleGamesClick}
            />
        </section>
    )
}