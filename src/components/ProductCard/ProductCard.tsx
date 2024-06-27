import './ProductCard.scss';
import favorites from '../../images/icons/favorites.svg';
import { Link } from 'react-router-dom';
import favoritesRed from '../../icons/favorite-icon-red.svg';
import { Product } from '../../types/Product';
// import { useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
// import { toggle as toggleFavorites } from '../../features/favorites/favoritesSlice';
// import { toogleItem as toggleCart } from '../../features/cart/cartSlice';
import { useAppSelector } from '../../app/hooks';
import { api } from '../../services/api';

type Props = {
  product: Product;
  width?: number;
};

export const ProductCard: React.FC<Props> = ({ product, width }) => {
  const favourites = useAppSelector(store => store.favorites);
  const cartItems = useAppSelector(store => store.cart);
  const [addToCart] = api.usePostQueryCartMutation();
  const [addToFavs] = api.usePostQueryFavoritesMutation();

  const cardStyles = {
    width: `${width}px`,
  };

  const handleGoToUpPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="productCard" style={cardStyles}>
      <img
        className="productCard__img"
        src={product.image}
        alt={product.name}
      />

      <h2 className="productCard__title">
        <Link
          className="productCard__title-link"
          to={`/${product.category}/${product.itemId}`}
          state={{ product }}
          onClick={handleGoToUpPage}
        >
          {product.name}
        </Link>
      </h2>

      <div className="productCard__prices">
        ${product.price}
        <div className="productCard__old-price">
          ${product.fullPrice}
          <span className="productCard__line-through">{product.fullPrice}</span>
        </div>
      </div>

      <div className="productCard__info-row">
        Screen
        <span className="productCard__info-value">{product.screen}</span>
      </div>

      <div className="productCard__info-row">
        Capacity
        <span className="productCard__info-value">{product.capacity}</span>
      </div>

      <div className="productCard__info-row">
        RAM
        <span className="productCard__info-value">{product.ram}</span>
      </div>

      <div className="productCard__btns">
        <button
          type="button"
          className={`productCard__addToCart productCard__btn + ${
            cartItems.some(i => i.id === product.id)
              ? 'Button--primary active'
              : ''
          }`}
          onClick={() => addToCart({ userId: 1, productId: product.id })}
        >
          {cartItems.some(i => i.id === product.id)
            ? 'Added to cart'
            : 'Add to cart'}
        </button>

        <button
          type="button"
          className="
             productCard__favorites
             productCard__btn"
          onClick={() => addToFavs({ userId: 1, productId: product.id })}
        >
          <img
            src={
              favourites.some(p => p.id === product.id)
                ? favoritesRed
                : favorites
            }
            alt="favorites"
          />
        </button>
      </div>
    </div>
  );
};
