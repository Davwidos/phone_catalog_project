import { useEffect } from 'react';
import Logo from '../../images/Logo.svg';
import Slider from '../../images/slider-button-up.svg';
import SliderHover from '../../images/slider-button-up_hover.svg';

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

  return (
    <div className="footer">
      <a href="" className="footer__link link">
        <img src={Logo} alt="Logo" className="footer__logo logo" />
      </a>

      <div className="footer__links">
        <a href="" className="footer__link footer__links--link link">
          GITHUB
        </a>
        <a href="" className="footer__link footer__links--link link">
          CONTACTS
        </a>
        <a href="" className="footer__link footer__links--link link">
          RIGHTS
        </a>
      </div>

      <div className="footer__scrollup">
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