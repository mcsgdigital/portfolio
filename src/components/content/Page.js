import { useCallback, useEffect, useState } from "react";
import Gallery from "./pages/Gallery";

function Page(props) {
    const [data, setData] = useState(null);

    const fetchData = useCallback(async () => {
        const options = ["static","animated","emails","pop-ups","javascript","react","csharp","sass","games"];
        
        if (options.includes(props.option.toLowerCase())) {
            try {
                const response = await fetch('pages/data_'+ props.option.toLowerCase() +'.json');
                const result = await response.json();
                // console.log("[PAGE] Data:", result);
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else{
            setData(null);
        }
    }, [props.option]);

    useEffect(() => { 
        props.option && fetchData(); 
    }, [fetchData, props.option]);
    

    return (
        <div className="page">
          {
            data && <Gallery data={data}/>
          }
        </div>
    );
}

export default Page;