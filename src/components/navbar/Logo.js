import img_logo from '../../_assets/images/logo.png';
import '../styles/Logo.css';

function Logo(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("home");
  }

  return (
    <div className="button logo" onClick={handleClick}>
      {/* <img src={img_logo} alt="logo"/> */}
      <div className='copy'>MARK CHANTEL</div>
    </div>
  );
}

export default Logo;