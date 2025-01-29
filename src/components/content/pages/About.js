import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import AboutSkill from "./AboutSkill";
import '../../styles/About.css';

function About(props) {
  const [json, setJson] = useState(null);
  
  const fetchData = async () => {
    try {
        const response = await fetch('pages/data_about.json');
        const result = await response.json();
        // console.log("[ABOUT] Data:", result);
        setJson(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="about">
      {
        json && json.data.map((obj) => {
          return <AboutSkill key={uuidv4()} data={obj} />
        })
      }
    </div>
  );
}

export default About;