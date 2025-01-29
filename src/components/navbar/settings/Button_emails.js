function ButtonEmails(props) {

  function handleClick(e){
    e.preventDefault();
    props.updatePageName("emails");
    props.updatePageOptionName("");
  }

  return (
    <div className="button" onClick={handleClick}>
      {
        <div className='button-text' id='btn-creatives' >EMAILS & POPUPS</div>
      }
    </div>
  );
}

export default ButtonEmails;