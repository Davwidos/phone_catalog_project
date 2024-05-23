/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="burger-menu-container">
        <div className="logo">
          <img src={require('../../icons/Logo.svg').default} alt="" />
        </div>
        {!isOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            <img src={require('../../icons/burgerIcon.svg').default} alt="" />
          </div>
        )}
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          {isOpen && (
            <div className="close-icon" onClick={toggleMenu}>
              <img src={require('../../icons/Close-icon.svg').default} alt="" />
            </div>
          )}
          <div className="logo">
            <img src={require('../../icons/Logo.svg').default} alt="" />
          </div>
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
