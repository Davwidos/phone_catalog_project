/* eslint-disable no-console */
import { FC, useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export const Page: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      if (isOpen) {
        body.classList.add('no-scroll');
        if (menuRef.current) {
          menuRef.current.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
        }
      } else {
        body.classList.remove('no-scroll');
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="page">
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      {isOpen && (
        <div ref={menuRef}>
          <BurgerMenu toggleMenu={toggleMenu} />
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};
