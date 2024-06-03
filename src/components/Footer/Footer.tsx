import { useEffect } from 'react';
import Logo from '../../icons/logo.png';
import Slider from '../../icons/slider-button-up.svg';
import SliderHover from '../../icons/slider-button-up_hover.svg';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  useEffect(() => {
    const imageContainer = document.querySelector('.footer__scrollup');
    const hoverImage = document.querySelector<HTMLImageElement>('.slider-icon');

    const originalImageUrl = Slider;
    const hoverImageUrl = SliderHover;

    const handleMouseEnter = () => {
      if (hoverImage) {
        hoverImage.src = hoverImageUrl;
        hoverImage.style.transform = 'rotate(-90deg)';
      }
    };

    const handleMouseLeave = () => {
      if (hoverImage) {
        hoverImage.src = originalImageUrl;
        hoverImage.style.transform = 'rotate(0deg)';
      }
    };

    if (imageContainer) {
      imageContainer.addEventListener('mouseenter', handleMouseEnter);
      imageContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener('mouseenter', handleMouseEnter);
        imageContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <NavLink to="/" className="footer__link link" onClick={scrollToTop}>
        <img src={Logo} alt="Logo" className="footer__logo logo" />
      </NavLink>

      <div className="footer__links">
        <a
          href="https://github.com/NoPainNoMain/phone_catalog_project"
          className="footer__link footer__links--link link"
        >
          GITHUB
        </a>
        <a href="" className="footer__link footer__links--link link">
          CONTACTS
        </a>
        <a href="" className="footer__link footer__links--link link">
          RIGHTS
        </a>
      </div>

      <div className="footer__scrollup" id="scrollup" onClick={scrollToTop}>
        <p className="footer__text text">Back to top</p>

        <a className="footer__link link">
          <img
            src={Slider}
            alt="slider-icon"
            className="footer__icon icon slider-icon"
          />
        </a>
      </div>
    </div>
  );
};
