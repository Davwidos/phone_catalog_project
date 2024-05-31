import { FC, useCallback, useMemo } from 'react';
import './VariantsSection.scss';
import { ColorSelection } from '../ColorSelection/ColorSelection';
import { ParametrSelection } from '../ParametrSelection';
import { Button } from '../Buttons/Button';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { Product } from '../../types/Product';
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line max-len
import { toggle as toggleFavorites } from '../../features/favorites/favoritesSlice';
import { toogleItem as toggleCart } from '../../features/cart/cartSlice';

interface Props {
  product?: Product;
}

export const VariantsSection: FC<Props> = ({ product }) => {
  const details = product?.item;
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
      <ColorSelection colors={details?.colorsAvailable || []} />
      <div className="VariantsSection__separator" />
      <ParametrSelection parametrs={details?.capacityAvailable || []} />
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
    </div>
  );
};
