import { useAppSelector } from '../../app/hooks';
import cartIcon from '../../icons/shopbag-icon.svg';
import './CartIcon.scss';

export const CartIcon = () => {
  const cartItems = useAppSelector(state => state.cart);

  return (
    <div className="icon-wrapper">
      <img src={cartIcon} alt="cart-icon" className="icon-container" />
      {cartItems.length !== 0 && (
        <div
          className={
            cartItems.length <= 99
              ? 'icon-container--amount'
              : 'icon-container--amount tooManyItems'
          }
        >
          {cartItems.length <= 99 ? cartItems.length : '99+'}
        </div>
      )}
    </div>
  );
};
