import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useAppSelector } from '../../app/hooks';

export const FavouritesPage = () => {
  // const { favourites } = useFavourites();
  const favorites = useAppSelector(store => store.favorites);

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
