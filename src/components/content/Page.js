import { useEffect, useState } from "react";
import Gallery from "./pages/Gallery";

function Page(props) {
    const [data, setData] = useState(null);
    const options = ["static","animated","emails","pop-ups","javascript","react","csharp","sass"];

    const fetchData = async () => {
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
    };

    useEffect(() => { props.option && fetchData(); }, [props.option]);
    

    return (
        <div className="page">
          {
            data && <Gallery data={data}/>
          }
        </div>
    );
}

export default Page;