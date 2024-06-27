import { FC, useCallback, useMemo } from 'react';
import './VariantsSection.scss';
import { ColorSelection } from '../ColorSelection/ColorSelection';
import { ParametrSelection } from '../ParametrSelection';
import { Button } from '../Buttons/Button';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { ItemWithProduct } from '../../types/Product';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
import { toggle as toggleFavorites } from '../../features/favorites/favoritesSlice';
import { toogleItem as toggleCart } from '../../features/cart/cartSlice';

interface Props {
  details?: ItemWithProduct;
}

export const VariantsSection: FC<Props> = ({ details }) => {
  const product = details?.product;
  const cartItems = useAppSelector(store => store.cart);
  const dispatch = useDispatch();
  const favourites = useAppSelector(store => store.favorites);

  const inCart = useMemo(
    () => cartItems.some(p => p.id === product?.id),
    [cartItems, product?.id],
  );

  const inFavorites = useMemo(
    () => favourites.some(p => p.id === product?.id),
    [favourites, product?.id],
  );

  const toggleAddToCart = useCallback(() => {
    if (!product) {
      return;
    }

    dispatch(toggleCart(product));
  }, [dispatch, product]);

  const handleAddToFavourites = useCallback(() => {
    if (product) {
      dispatch(toggleFavorites(product));
    }
  }, [dispatch, product]);

  return (
    <div className="VariantSection">
      {details && <ColorSelection details={details} />}
      <div className="VariantsSection__separator" />
      {details && <ParametrSelection details={details} />}
      <div className="VariantsSection__separator" />
      <div className="price">
        <span className="price__actual">{details?.priceDiscount}</span>
        <span className="price__prev">{details?.priceRegular}</span>
      </div>
      <div className="VariantsSection_buttons buttons">
        <Button
          className="buttons__add"
          primary
          onClick={toggleAddToCart}
          active={inCart}
        >
          Add to cart
        </Button>
        <ButtonHeart
          active={inFavorites}
          onClick={handleAddToFavourites}
          style={{ width: 48, height: 48 }}
        />
      </div>

      <div className="ProdctPage__short-specs short-specs">
        <div className="short-specs__spec">
          <p className="short-specs__title">Screen</p>
          <p className="short-specs__value">{details?.screen}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Resolution</p>
          <p className="short-specs__value">{details?.resolution}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Processor</p>
          <p className="short-specs__value">{details?.processor}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">RAM</p>
          <p className="short-specs__value">{details?.ram}</p>
        </div>
      </div>
    </div>
  );
};
