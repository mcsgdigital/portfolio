import '../styles/Logo.css';

function Logo(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("home");
  }

  return (
    <div className="button logo" onClick={handleClick}>
      <div className='copy'>MARK CHANTEL</div>
    </div>
  );
}

export default Logo;