import cartIcon from '../../icons/shopbag-icon.svg';
import { useCart } from '../../provider/CartProvider';
import './CartIcon.scss';

export const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <div className="icon-wrapper">
      <img src={cartIcon} alt="cart-icon" className="icon-container" />
      {cartItems.length !== 0 && (
        <div className="icon-container--amount">
          {cartItems.length <= 99 ? cartItems.length : '99+'}
        </div>
      )}
    </div>
  );
};
