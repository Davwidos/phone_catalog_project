import favouritesIcon from '../../icons/favorite-icon.svg';
import './FavouritesIcon.scss';

export const FavouritesIcon = () => {
  return (
    <img src={favouritesIcon} alt="cart-icon" className="icon-container" />
  );
};