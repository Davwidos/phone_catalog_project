/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

interface BurgerProps {
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerProps> = ({ toggleMenu }) => {
  return (
    <>
      <div className="burger-menu-container">
        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/phones" onClick={toggleMenu}>
                Phones
              </Link>
            </li>
            <li>
              <Link to="/tablets" onClick={toggleMenu}>
                Tablets
              </Link>
            </li>
            <li>
              <Link to="/accessories" onClick={toggleMenu}>
                Accessories
              </Link>
            </li>
          </ul>
          <div className="bottom">
            <Link to="/favorite" onClick={toggleMenu}>
              <button>
                <img
                  src={require('../../icons/favorite-icon.svg').default}
                  alt=""
                />
              </button>
            </Link>

            <Link to="/cart" onClick={toggleMenu}>
              <button>
                <img
                  src={require('../../icons/shopbag-icon.svg').default}
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
