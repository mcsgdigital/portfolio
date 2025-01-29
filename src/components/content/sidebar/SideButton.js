import { ReactComponent as ArrowRight } from '../../../_assets/images/caret-right.svg';

function SideButton(props) {
    
    return (
      <div className="sidenav-button" onClick={props.handleClick}>
        {
            props.data.options && 
            <div className="indicator-more"><ArrowRight /></div>
        }
        <div className="copy">
            {props.data.name}
        </div>
      </div>
    );
  }
  
  export default SideButton;