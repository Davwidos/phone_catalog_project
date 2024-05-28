import cartIcon from '../../icons/shopbag-icon.svg';
import './CartIcon.scss';

export const CartIcon = () => {
  return (
    <img src={cartIcon} alt="favourites-icon" className="icon-container" />
  );
};
