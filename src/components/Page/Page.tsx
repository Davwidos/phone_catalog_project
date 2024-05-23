import { FC, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Slider from '../Slider/Slider';

export const Page: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      if (isOpen) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page">
      <Header toggleMenu={toggleMenu} />
      {isOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      <Outlet />
      <Slider />
      <Footer />
    </div>
  );
};
