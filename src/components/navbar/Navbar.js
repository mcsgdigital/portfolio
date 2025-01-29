import '../../components/styles/Navbar.css';

import Logo from "./Logo";
import SettingsWrapper from "./settings/SettingsWrapper";


function Navbar(props) {
  return (
    <div className="navbar">
      <Logo updatePageName={props.updatePageName}/>
      <SettingsWrapper 
          theme={props.theme} 
          themeIndex={props.themeIndex}
          updatePageName={props.updatePageName}
          updatePageOptionName={props.updatePageOptionName}
      />
    </div>
  );
}

export default Navbar;