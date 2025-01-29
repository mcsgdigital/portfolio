function ButtonAbout(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("about");
    props.updatePageOptionName("");
  }

  return (
    <div className="button" onClick={handleClick}>
      {
        <div className='button-text' id='btn-about' >ABOUT</div>
      }
    </div>
  );
}

export default ButtonAbout;