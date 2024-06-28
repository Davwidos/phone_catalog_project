// import { useAppSelector } from '../../app/hooks';
import favouritesIcon from '../../icons/favorite-icon.svg';
import { api } from '../../services/api';

export const FavouritesIcon = () => {
  const { data: favorites } = api.useGetFavoritesQuery('1');

  return (
    <div className="icon-wrapper">
      <img src={favouritesIcon} alt="cart-icon" className="icon-container" />
      {favorites && favorites.length !== 0 && (
        <div
          className={
            favorites?.length <= 99
              ? 'icon-container--amount'
              : 'icon-container--amount tooManyItems'
          }
        >
          {favorites?.length <= 99 ? favorites?.length : '99+'}
        </div>
      )}
    </div>
  );
};
