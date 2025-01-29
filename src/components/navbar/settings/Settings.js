import { useRef, useState } from 'react';
import icon from '../../../_assets/images/settings.svg';

function Settings(props) {
  const [showPanel, setShowPanel] = useState(false);

  const componentRef = useRef();
  
  function displayPanel(){
    setShowPanel(!showPanel);
  }

  function changeTheme(e){
    props.theme(e.target.value);
  }
  

  return (
    <>
      <div className="button settings" ref={componentRef}>
          <img src={icon} alt="settings"/>
          {
            showPanel && 
            <div className='panel panel-settings'>
              <div className='content'>
                <div className='title'>Theme</div>
                <div className='input-wrapper'>
                  <input 
                    type="radio" 
                    id="settings-content-light" 
                    name="content_colours" 
                    value={0} 
                    onChange={changeTheme}
                    checked={props.themeIndex === 0}
                  />
                  <label htmlFor="html">Light</label>
                </div>
                <div className='input-wrapper'>
                  <input 
                      type="radio" 
                      id="settings-content-dark" 
                      name="content_colours" 
                      value={1} 
                      onChange={changeTheme}
                      checked={props.themeIndex === 1}
                  />
                  <label htmlFor="html">Dark</label>
                </div>
              </div>
            </div>
          }
          <div className='click-area' onClick={displayPanel}></div>
      </div>
    </>
    
  );
}

export default Settings;