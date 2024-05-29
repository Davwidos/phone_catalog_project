import './Cart.scss';
import LeftIcon from '../../icons/left.svg';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { useAppSelector } from '../../app/hooks';
import { selectCartValue } from '../../features/cart/selectCartValue';
import { useDispatch } from 'react-redux';
import { clear } from '../../features/cart/cartSlice';

export const Cart = () => {
  // const { cartItems, removeItem, cartValue } = useCart();
  const cartItems = useAppSelector(state => state.cart);
  const cartValue = useAppSelector(state => selectCartValue(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const userConfirmed = confirm(
      'Checkout is not implemented yet. Do you want to clear the Cart?',
    );

    if (userConfirmed) {
      dispatch(clear());
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="cart">
      <button onClick={handleBack} className="cart__back-link">
        <img className="cart__icon" src={LeftIcon} alt="left" />
        <span className="cart__back">Back</span>
      </button>
      <h1 className="cart__title">Cart</h1>
      <div className="cart__container">
        <div className="cart__items">
          {cartItems.map(item => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className="cart__summary">
          <span className="cart__summary-total">${cartValue}</span>
          <span className="cart__summary-label">
            Total for {cartItems.length} items
          </span>
          <div className="cart__summary-divider"></div>
          <button className="cart__checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
