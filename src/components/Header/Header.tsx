/* eslint-disable no-console */
import Burger from '../../icons/icon_burger.svg';
import Logo from '../../icons/logo.png';
import Close from '../../icons/Close-icon.svg';

import './Header.scss';
import { Link } from 'react-router-dom';
import { CartIcon } from '../CartIcon/CartIcon';
import { FavouritesIcon } from '../FavoruitesIcon/FavouritesIcon';

interface HeaderProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
export const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="header">
      <Link to="/">
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
      <div className="header__menu-items">
        <Link to="/" className="header__menu-items--item">
          HOME
        </Link>
        <Link to="/phones" className="header__menu-items--item">
          PHONES
        </Link>
        <Link to="/tablets" className="header__menu-items--item">
          TABLETS
        </Link>
        <Link to="/accessories" className="header__menu-items--item">
          ACCESSORIES
        </Link>
      </div>
      <div className="header__buttons">
        <div className="header__buttons--desktop">
          <Link to="/favourites">
            <FavouritesIcon />
          </Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </div>
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
