import { ReactComponent as ArrowLeft } from '../../../_assets/images/caret-left.svg';

function SidebarMenu(props){

    return (
        <div className="sidebar-menu-wrapper">
            {
                props.path.length > 1 && 
                <div className="button-back" onClick={props.goBack}>
                    <ArrowLeft />
                </div>
            }
        </div>
      );
}

export default SidebarMenu;