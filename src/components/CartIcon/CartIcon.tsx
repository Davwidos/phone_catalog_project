import cartIcon from '../../icons/shopbag-icon.svg';
import { api } from '../../services/api';
import './CartIcon.scss';

export const CartIcon = () => {
  const { data: cartItems } = api.useGetCartItemsQuery('1');

  return (
    <div className="icon-wrapper">
      <img src={cartIcon} alt="cart-icon" className="icon-container" />
      {cartItems && cartItems.length !== 0 && (
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
