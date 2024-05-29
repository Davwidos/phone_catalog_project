import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { updateLocalStorage } from '../../features/favorites/favoritesSlice';
import { Action } from '@reduxjs/toolkit';

export const FavouritesPage = () => {
  // const { favourites } = useFavourites();
  const favorites = useSelector((store: RootState) => store.favorites);
  const dispatch = useDispatch();

  dispatch(updateLocalStorage() as unknown as Action);

  return (
    <div className="favouritesPage">
      <Breadcrumbs path="Favourites" />
      <h1 className="favouritesPage__title">Favourites</h1>
      <p className="favouritesPage__text"> {favorites.length} items</p>
      <div className="favouritesPage__products">
        {favorites.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
