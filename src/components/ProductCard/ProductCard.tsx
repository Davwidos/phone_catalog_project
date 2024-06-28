import './ProductCard.scss';
import favIcon from '../../images/icons/favorites.svg';
import { Link } from 'react-router-dom';
import favoritesRed from '../../icons/favorite-icon-red.svg';
import { Product } from '../../types/Product';
import { api } from '../../services/api';
import { useMemo } from 'react';

type Props = {
  product: Product;
  width?: number;
};

export const ProductCard: React.FC<Props> = ({ product, width }) => {
  const [addToCart] = api.usePostQueryCartMutation();
  const [addToFavs] = api.usePostQueryFavoritesMutation();
  const [deleteFromCart] = api.useDeleteFromCartMutation();
  const [deleteFromFavorites] = api.useDeleteFromFavouritesMutation();

  const { data: cartItems } = api.useGetCartItemsQuery('1');
  const { data: favorites } = api.useGetFavoritesQuery('1');

  const cartItem = useMemo(() => {
    return cartItems?.find(el => el.productId === product.id);
  }, [cartItems]);

  const favItem = useMemo(() => {
    return favorites?.find(el => el.productId === product.id);
  }, [favorites]);

  const handleToggleCart = () => {
    if (!cartItems) {
      return;
    }

    if (cartItem) {
      deleteFromCart(cartItem.id);
    } else {
      addToCart({ userId: 1, productId: product.id });
    }
  };

  const handleToggleFavs = () => {
    if (!favorites) {
      return;
    }

    if (favItem) {
      deleteFromFavorites(favItem.id);
    } else {
      addToFavs({ userId: 1, productId: product.id });
    }
  };

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
            cartItem ? 'Button--primary active' : ''
          }`}
          onClick={handleToggleCart}
        >
          {cartItem ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          type="button"
          className="
             productCard__favorites
             productCard__btn"
          onClick={handleToggleFavs}
        >
          <img src={favItem ? favoritesRed : favIcon} alt="favorites" />
        </button>
      </div>
    </div>
  );
};
