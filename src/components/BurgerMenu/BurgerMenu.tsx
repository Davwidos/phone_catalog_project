/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#phones">Phones</a>
            </li>
            <li>
              <a href="#tablets">Tablets</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
          </ul>
          <div className="bottom">
            <button>
              <img
                src={require('../../icons/favorite-icon.svg').default}
                alt=""
              />
            </button>
            <button>
              <img
                src={require('../../icons/shopbag-icon.svg').default}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
