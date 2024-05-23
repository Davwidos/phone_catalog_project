import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';
import FavouritesProvider, {
  useFavourites,
} from '../../provider/FavouritesProvider';

export const FavouritesPage = () => {
  const { favouritesIDS } = useFavourites();

  return (
    <FavouritesProvider>
      <div className="favouritesPage">
        {/* <Breadcrumbs /> */} breadcrumbsplaceholder
        <h1 className="favouritesPage__title">Favourites</h1>
        <p className="favouritesPage__text"> *placeholder* items</p>
        <div className="favouritesPage__products">
          {favouritesIDS.map(id => (
            <ProductCard key={id} />
            // productId={id}
          ))}
        </div>
      </div>
    </FavouritesProvider>
  );
};
