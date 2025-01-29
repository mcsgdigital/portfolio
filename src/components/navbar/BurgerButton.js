import icon_burger from '../../_assets/images/burger.png';

function BurgerButton() {
    return (
      <div className="button burger-button">
        <img src={icon_burger} alt="burger open"/>
      </div>
    );
  }
  
  export default BurgerButton;