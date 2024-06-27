import { useAppSelector } from '../../app/hooks';
import favouritesIcon from '../../icons/favorite-icon.svg';

export const FavouritesIcon = () => {
  const favourites = useAppSelector(store => store.favorites);

  return (
    <div className="icon-wrapper">
      <img src={favouritesIcon} alt="cart-icon" className="icon-container" />
      {favourites.length !== 0 && (
        <div
          className={
            favourites.length <= 99
              ? 'icon-container--amount'
              : 'icon-container--amount tooManyItems'
          }
        >
          {favourites.length <= 99 ? favourites.length : '99+'}
        </div>
      )}
    </div>
  );
};
