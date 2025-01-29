function ButtonCreatives(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("creatives");
    props.updatePageOptionName("");
  }

  return (
    <div className="button" onClick={handleClick}>
      {
        <div className='button-text' id='btn-creatives' >CREATIVES</div>
      }
    </div>
  );
}

export default ButtonCreatives;