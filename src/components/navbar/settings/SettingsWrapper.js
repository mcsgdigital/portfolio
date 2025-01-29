import ButtonCode from "./Button_code";
import ButtonCreatives from "./Button_creatives";
import ButtonEmails from "./Button_emails";
import Settings from "./Settings";
import ButtonAbout from "./Button_about";

function SettingsWrapper(props) {

    return (
      <div className="settings-wrapper">
        <ButtonCreatives 
          updatePageName={props.updatePageName}
          updatePageOptionName={props.updatePageOptionName}
        />
        <ButtonEmails 
          updatePageName={props.updatePageName}
          updatePageOptionName={props.updatePageOptionName}
        />
        <ButtonCode 
          updatePageName={props.updatePageName}
          updatePageOptionName={props.updatePageOptionName}
        />
        <ButtonAbout
          updatePageName={props.updatePageName}
          updatePageOptionName={props.updatePageOptionName}
        />
        <Settings theme={props.theme} themeIndex={props.themeIndex}/>
      </div>
    );
  }
  
  export default SettingsWrapper;