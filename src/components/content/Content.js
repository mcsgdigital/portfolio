import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import '../styles/Content.css';

import Sidebar from "./sidebar/Sidebar";
import Header from "./Header";
import Page from "./Page";
import Home from './pages/Home';
import About from './pages/About';


function Content(props) {
    const [currentData, setCurrentData] = useState();

    const OnSelect = (obj) => {
      props.updatePageOptionName(obj);
    }
    
    return (
      <>
        <div className="content-wrapper">
          {
            props.data.showSidebar && 
            <Sidebar 
              data={props.data} 
              selected={OnSelect} 
              updateData={setCurrentData} 
              savePath={props.savePath}
              updatePageOptionName={props.updatePageOptionName}
            />
          }
          <div className="content">
            {
              props.data.showSidebar && <Header title={props.option}/>
            }
            {
              (() => {
                switch (props.data.page) {
                  case 'home':
                    return <Home />
                  case 'about':
                    return <About data={props}/>
                  default:
                    return <Routes>
                    {
                      currentData && currentData.options.map((obj) => {
                        let linkURL = obj.name.replace(/ /g, '').toLowerCase();

                        return !obj.options ? 
                          <Route key={uuidv4()} path={"/"+ linkURL} element={<Page name={linkURL} option={props.option}/>} />
                          :
                          <Route key={uuidv4()} path="*" element={null} />
                      })
                    }
                    <Route path="*" element={null} />
                  </Routes>
                }
              })()
            }
          </div>
        </div>
      </>
      
    );
  }
  
  export default Content;