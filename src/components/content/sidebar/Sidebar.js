import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../../styles/Sidebar.css';

import SidebarMenu from './SidebarMenu';
import SideButton from "./SideButton";


function Sidebar(props) {
    const [dataCopy, setDataCopy] = useState(null);
    const [path, setPath] = useState([props.data]);
    const [level, setLevel] = useState(0);


    const OnHandleClick = (e) => {
        const buttonName = e.target.querySelector('.copy').innerText;
        props.selected(buttonName);

        const menuObject = dataCopy.options.filter(obj => obj.name === buttonName);

        if (menuObject[0].options) {
            setDataCopy(menuObject[0]);
            props.updateData(menuObject[0]);
            setPath([...path, menuObject[0]]);
            setLevel(level +1);

            menuObject[0].name && props.savePath(true, menuObject[0].name);
            // console.log("SideBar CLICK:", menuObject[0]);
        }
    }

    const OnHandleGoBack = () => {
        props.selected(path[level -1].name);

        if (path.length > 1) {
            setDataCopy(path[level -1]);
            props.updateData(path[level -1]);
            // console.log("SideBar BACK:", path[level -1]);
            setPath(path.slice(0, path.length -1));
            setLevel(level -1);
            props.savePath(false)
        }
    }

    useEffect(() => {
        setDataCopy(props.data);
        setPath([props.data]);
        props.updateData(props.data);
    }, [props])


    return (
        <div className="sidebar">
            <SidebarMenu goBack={OnHandleGoBack} path={path}/>
            <div className='sideButtons-wrapper'>
                {
                    dataCopy && dataCopy.options.map((obj) => {
                        let linkURL = "/"+ obj.name.replace(/ /g, '').toLowerCase();
                        
                        return  <Link key={uuidv4()} to={linkURL}>
                                    <SideButton
                                            data={obj} 
                                            handleClick={OnHandleClick}
                                            />
                                </Link>
                        })
                }
            </div>
        </div>
    );
}

export default Sidebar;