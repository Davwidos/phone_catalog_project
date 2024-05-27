/* eslint-disable no-console */
import Burger from '../../icons/icon_burger.svg';
import Logo from '../../icons/logo.png';
import Close from '../../icons/Close-icon.svg';

import './Header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
export const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  const handleGoToUpPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <Link to="/" onClick={handleGoToUpPage}>
        <img
          src={Logo}
          alt="nice-gadgets-logo"
          className="header__logo logo"
          onClick={() => {
            if (isOpen) {
              toggleMenu();
            }
          }}
        />
      </Link>

      <div className="header__buttons">
        <div className="header__burger-container">
          <button onClick={toggleMenu} className="burger">
            {!isOpen ? (
              <img
                src={Burger}
                alt="burger-icon"
                className="header__burger burger"
              />
            ) : (
              <img
                src={Close}
                alt="burger-icon"
                className="header__burger burger"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
