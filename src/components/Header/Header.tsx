import Burger from '../../images/icon_burger.svg';
import Logo from '../../images/Logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <a href="*">
        <img src={Logo} alt="nice-gadgets-logo" className="header__logo logo" />
      </a>

      <div className="header__buttons">
        <div className="header__burger-container">
          <img
            src={Burger}
            alt="burger-icon"
            className="header__burger burger"
          />
        </div>
      </div>
    </div>
  );
};
