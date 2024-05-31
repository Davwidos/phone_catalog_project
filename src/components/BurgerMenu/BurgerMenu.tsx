/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';
import { FavouritesIcon } from '../FavoruitesIcon/FavouritesIcon';
import { CartIcon } from '../CartIcon/CartIcon';

interface BurgerProps {
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerProps> = ({ toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu();
    window.scrollTo(0, 0);
  };

  return (
    <div className="burger-menu-container">
      <div className="menu">
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/phones" onClick={handleLinkClick}>
              Phones
            </Link>
          </li>
          <li>
            <Link to="/tablets" onClick={handleLinkClick}>
              Tablets
            </Link>
          </li>
          <li>
            <Link to="/accessories" onClick={handleLinkClick}>
              Accessories
            </Link>
          </li>
        </ul>
        <div className="bottom">
          <Link to="/favourites" onClick={handleLinkClick}>
            <FavouritesIcon />
          </Link>

          <Link to="/cart" onClick={handleLinkClick}>
            <button>
              <CartIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
