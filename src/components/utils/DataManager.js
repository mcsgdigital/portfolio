import { useEffect, useState } from "react";


export function GetData() {
    // console.log("yo");

    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
        const response = await fetch('data_accounts.json');
        const result = await response.json();
        console.log("[DataManager] DATA:", result.data);
        setData(result.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
        fetchData();
    // }, []);
}