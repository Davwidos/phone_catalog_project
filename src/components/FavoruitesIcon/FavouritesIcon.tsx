import favouritesIcon from '../../icons/favorite-icon.svg';
import { useFavourites } from '../../provider/FavouritesProvider';

export const FavouritesIcon = () => {
  const { favouritesIDS } = useFavourites();
  return (
    <div className="icon-wrapper">
      <img src={favouritesIcon} alt="cart-icon" className="icon-container" />
      {favouritesIDS.length !== 0 && (
        <div className="icon-container--amount">
          {favouritesIDS.length <= 99 ? favouritesIDS.length : '99+'}
        </div>
      )}
    </div>
  );
};
