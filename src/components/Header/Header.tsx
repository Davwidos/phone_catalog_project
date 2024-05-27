/* eslint-disable no-console */
import Burger from '../../icons/icon_burger.svg';
import Logo from '../../icons/logo.png';
import Close from '../../icons/Close-icon.svg';

import './Header.scss';
import { NavLink } from 'react-router-dom';
import { CartIcon } from '../CartIcon/CartIcon';
import { FavouritesIcon } from '../FavoruitesIcon/FavouritesIcon';

interface HeaderProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
export const Header: React.FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="header">
      <NavLink to="/">
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
      </NavLink>
      <div className="header__menu-items">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'header__menu-items--item link-is-active--nav'
              : 'header__menu-items--item'
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            isActive
              ? 'header__menu-items--item link-is-active--nav'
              : 'header__menu-items--item'
          }
        >
          PHONES
        </NavLink>
        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            isActive
              ? 'header__menu-items--item link-is-active--nav'
              : 'header__menu-items--item'
          }
        >
          TABLETS
        </NavLink>
        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            isActive
              ? 'header__menu-items--item link-is-active--nav'
              : 'header__menu-items--item'
          }
        >
          ACCESSORIES
        </NavLink>
      </div>
      <div className="header__buttons">
        <div className="header__buttons--desktop">
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? 'header__buttons--link link-is-active'
                : 'header__buttons--link'
            }
          >
            <FavouritesIcon />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'header__buttons--link link-is-active'
                : 'header__buttons--link'
            }
          >
            <CartIcon />
          </NavLink>
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
