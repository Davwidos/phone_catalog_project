import { ProductCard } from '../ProductCard/ProductCard';
import './FavouritesPage.scss';

export const FavouritesPage = () => {
  return (
    <div className="favouritesPage">
      {/* <Breadcrumbs /> */} breadcrumbsplaceholder
      <h1 className="favouritesPage__title">Favourites</h1>
      <p className="favouritesPage__text"> *placeholder* items</p>
      <div className="favouritesPage__products">
        <ProductCard id={0} price={10} />
        <ProductCard id={0} price={10} />
        <ProductCard id={0} price={10} />
      </div>
    </div>
  );
};
