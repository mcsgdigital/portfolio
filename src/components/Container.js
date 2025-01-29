import { useCallback, useEffect, useMemo, useState } from "react";
import Content from "./content/Content";
import Navbar from "./navbar/Navbar";

function Container(props) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [pageName, setPageName] = useState("home");
  const [pageOptionName, setPageOptionName] = useState("");
  const [fullpath, setFullpath] = useState([]);
  const [data, setData]=useState(null);
    
  
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('data_nav.json');
      const result = await response.json();
      // console.log("[APP] DATA for side navbar:", result[pageName]);
      setData(result[pageName]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [pageName]);

  const themeColoursRange = useMemo[
    {
      text: "#000000",
      background1: "#ffffff",
      background2: "#f8f9fa", // very light grey /blue
      background3: "#dddddd", // very light grey /red
      background4: "#ffffff",
      highlight: "#dddddd"
    },
    {
      text: "#ffffff",
      background1: "#000000",
      background2: "#2f2f2f", // very dark grey /red
      background3: "#555555", // very grey /red
      background4: "#1f1f1f", // even darker grey /red
      highlight: "#3a3a3a" // even darker darker grey /red
    }
  ]

  function updatePath(add, name){
    add ?
    setFullpath([...fullpath, name])
    :
    fullpath.length > 0 && setFullpath((names) => names.filter((_, i) => i !== names.length - 1))
  }


  const changeTheme = useCallback((_value) =>{
    const num = parseInt(_value);
    setThemeIndex(num);

    document.documentElement.style.setProperty('--text-color', themeColoursRange[num].text);
    document.documentElement.style.setProperty('--background-color1', themeColoursRange[num].background1);
    document.documentElement.style.setProperty('--background-color2', themeColoursRange[num].background2);
    document.documentElement.style.setProperty('--background-color3', themeColoursRange[num].background3);
    document.documentElement.style.setProperty('--background-color4', themeColoursRange[num].background4);
    document.documentElement.style.setProperty('--highlight-color', themeColoursRange[num].highlight);
  }, [themeColoursRange])

  function updatePageOptionName(_value){
    setPageOptionName(_value);
  }

  function updatePageName(_value){
    setPageName(_value);
  }

  useEffect(() => {
    changeTheme(0);
  }, [changeTheme])

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  useEffect(() => {
      
  }, [pageOptionName]);



  return (
    <div className="container">
      <Navbar 
          theme={changeTheme} 
          themeIndex={themeIndex}
          updatePageName={updatePageName}
          updatePageOptionName={updatePageOptionName}
      />
      {
        data && 
        <Content 
          data={data} 
          savePath={updatePath}
          updatePageOptionName={updatePageOptionName}
          option={pageOptionName}
        />
      }
    </div>
  );
}

export default Container;