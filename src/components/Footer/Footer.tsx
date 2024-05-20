import Logo from '../../images/Logo.svg';
import Slider from '../../images/slider-button-up.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <a href="" className="footer__link link">
        <img src={Logo} alt="" className="footer__logo logo" />
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
