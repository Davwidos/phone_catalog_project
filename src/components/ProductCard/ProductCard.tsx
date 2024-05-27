import './ProductCard.scss';
import img from '../../images/Product.png';
import favorites from '../../images/icons/favorites.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../../provider/CartProvider';
import favoritesRed from '../../icons/favorite-icon-red.svg';
import { useFavourites } from '../../provider/FavouritesProvider';

type Props = {
  id: number;
  price: number;
  width?: number;
};

export const ProductCard: React.FC<Props> = ({ id, price, width }) => {
  const { handleAddToCart } = useCart();
  const { handleAddToFavourites, favouritesIDS } = useFavourites();

  const cardStyles = {
    width: `${width}px`,
  };

  const handleGoToUpPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="productCard" style={cardStyles}>
      {id}
      <img
        className="productCard__img"
        src={img}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
      />

      <h2 className="productCard__title">
        <Link
          to={`/phones/${id}`}
          state={{ id, price }}
          onClick={handleGoToUpPage}
        >
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </Link>
      </h2>

      <div className="productCard__bottom-content">
        <div className="productCard__prices">
          $799
          <div className="productCard__old-price">
            $999
            <span className="productCard__line-through">$999</span>
          </div>
        </div>

        <div className="productCard__divider" />

        <div className="productCard__info">
          <div className="productCard__info-row">
            Screen
            <span className="productCard__info-value">6.1” OLED</span>
          </div>

          <div className="productCard__info-row">
            Capacity
            <span className="productCard__info-value">128 GB</span>
          </div>

          <div className="productCard__info-row">
            RAM
            <span className="productCard__info-value">6 GB</span>
          </div>
        </div>

        <div className="productCard__btns">
          <button
            type="button"
            className="productCard__addToCart productCard__btn"
            onClick={() => handleAddToCart({ id, price })}
          >
            Add to cart
          </button>

          <button
            type="button"
            className="
            productCard__favorites
            productCard__btn"
            onClick={() => handleAddToFavourites(id)}
          >
            <img
              src={favouritesIDS.includes(id) ? favoritesRed : favorites}
              alt="favorites"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
