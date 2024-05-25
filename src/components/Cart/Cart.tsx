import './Cart.scss';
import LeftIcon from '../../icons/left.svg';
import { NavLink } from 'react-router-dom';
import { CartItem } from '../CartItem';
import { useCart } from '../../provider/CartProvider';

export const Cart = () => {
  const { cartItems, removeItem, handleAddToCart, decreaseAmount } = useCart();

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

  const handleQuantityChange = (id: number, quantity: number) => {
    const item = cartItems.find(i => i.id === id);

    if (!item) {
      return;
    }

    const currentAmount = item.amount ?? 0;

    if (quantity > currentAmount) {
      handleAddToCart({ ...item });
    } else {
      decreaseAmount(id);
    }
  };

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce(
        (total, item) => total + item.price * (item.amount ?? 0),
        0,
      )
    : 0;

  return (
    <div className="cart">
      <NavLink to="#" className="cart__back-link">
        <img className="cart__icon" src={LeftIcon} alt="left" />
        <span className="cart__back">Back</span>
      </NavLink>
      <h1 className="cart__title">Cart</h1>
      <div className="cart__items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            quantity={item.amount ?? 1}
            onDelete={handleDelete}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="cart__summary">
        <span className="cart__summary-total">${totalPrice}</span>
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
