import './Cart.scss';
import LeftIcon from '../../icons/left.svg';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { useCart } from '../../provider/CartProvider';

export const Cart = () => {
  const { cartItems, removeItem } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const userConfirmed = confirm(
      'Checkout is not implemented yet. Do you want to clear the Cart?',
    );

    if (userConfirmed) {
      cartItems.forEach(item => removeItem(item.id));
    }
  };

  const handleDelete = (id: number) => {
    removeItem(id);
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
      <div className="cart__items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="cart__summary">
        <span className="cart__summary-total">
          ${cartItems.reduce((total, item) => total + item.price, 0)}
        </span>
        <span className="cart__summary-label">
          Total for {cartItems.length} items
        </span>
        <div className="cart__summary-divider"></div>
        <button className="cart__checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};
