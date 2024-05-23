import { useState } from 'react';
import Burger from '../../icons/icon_burger.svg';
import Logo from '../../icons/logo.png';
import Close from '../../icons/Close-icon.svg';

import './Header.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleMenu: () => void;
}
export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src={Logo}
          alt="nice-gadgets-logo"
          className="header__logo logo"
          onClick={toggleMenu}
        />
      </Link>

      <div className="header__buttons">
        <div className="header__burger-container">
          <button onClick={handleIcon}>
            {!isOpen ? (
              <img
                src={Burger}
                alt="burger-icon"
                className="header__burger burger"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src={Close}
                alt="burger-icon"
                className="header__burger burger"
                onClick={toggleMenu}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
