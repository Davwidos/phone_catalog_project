import { FC, useCallback, useMemo } from 'react';
import './VariantsSection.scss';
import { ColorSelection } from '../ColorSelection/ColorSelection';
import { ParametrSelection } from '../ParametrSelection';
import { Button } from '../Buttons/Button';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { useProductDetails } from '../../provider/ProductDetailsProvider';
import { useCart } from '../../provider/CartProvider';
import { Product } from '../../types/Product';
import { useFavourites } from '../../provider/FavouritesProvider';

interface Props {
  product?: Product;
}

export const VariantsSection: FC<Props> = ({ product }) => {
  const { details } = useProductDetails();
  const { handleAddToCart: addToCart, cartItems, removeItem } = useCart();
  const { favourites, handleAddToFavourites: addToFavorites } = useFavourites();

  const inCart = useMemo(
    () => cartItems.some(p => p.id === product?.id),
    [cartItems, product?.id],
  );

  const inFavorites = useMemo(
    () => favourites.some(p => p.id === product?.id),
    [favourites, product?.id],
  );

  const handleAddToCart = useCallback(() => {
    if (!product) {
      return;
    }

    if (!inCart) {
      addToCart(product);
    } else {
      removeItem(product.id);
    }
  }, [addToCart, inCart, product, removeItem]);

  const handleAddToFavourites = useCallback(() => {
    if (product) {
      addToFavorites(product);
    }
  }, [addToFavorites, product]);

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
          onClick={handleAddToCart}
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
