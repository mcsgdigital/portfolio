function ButtonCode(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("codes");
    props.updatePageOptionName("");
  }

  return (
    <div className="button" onClick={handleClick}>
      {
        <div className='button-text' id='btn-codes' >CODES</div>
      }
    </div>
  );
}

export default ButtonCode;