import { ProductCard } from '../ProductCard/ProductCard';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import './FavouritesPage.scss';
import { useFavourites } from '../../provider/FavouritesProvider';

export const FavouritesPage = () => {
  const { favouritesIDS } = useFavourites();

  return (
    <div className="favouritesPage">
      <Breadcrumbs path="Favourites" />
      <h1 className="favouritesPage__title">Favourites</h1>
      <p className="favouritesPage__text"> {favouritesIDS.length} items</p>
      <div className="favouritesPage__products">
        {favouritesIDS?.map(id => <ProductCard key={id} id={id} price={10} />)}
      </div>
    </div>
  );
};
