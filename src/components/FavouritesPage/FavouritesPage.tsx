import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';
import { useFavourites } from '../../provider/FavouritesProvider';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <div className="favouritesPage">
      <Breadcrumbs path="Favourites" />
      <h1 className="favouritesPage__title">Favourites</h1>
      <p className="favouritesPage__text"> {favourites.length} items</p>
      <div className="favouritesPage__products">
        {favourites.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
