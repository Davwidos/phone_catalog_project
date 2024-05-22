import './Cart.scss';
import LeftIcon from '../../icons/left.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CartItem } from '../CartItem';

export const Cart = () => {
  // const { addedIDS } = useContext<ContextValueType>(MyContext);
  const [cartItems, setCartItems] = useState([1, 2, 3]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const userConfirmed = confirm(
      'Checkout is not implemented yet. Do you want to clear the Cart?',
    );

    if (userConfirmed) {
      setCartItems([]);
      navigate('/phones');
    }
  };

  return (
    <>
      <div className="cart">
        <NavLink to="#" className="cart__back-link">
          <img className="cart__icon" src={LeftIcon} alt="left" />
          <span className="cart__back">Back</span>
        </NavLink>
        <h1 className="cart__title">Cart</h1>
        <div className="cart__items">
          {cartItems.map(id => (
            <CartItem id={id} key={id} />
          ))}
        </div>
        <div className="cart__summary">
          <span className="cart__summary-total">
            ${cartItems.reduce((total, item) => total + item, 0)}
          </span>
          <span className="cart__summary-label">
            Total for {cartItems.length} items
          </span>
          <div className="cart__summary-diveder"></div>
          <button className="cart__checkout" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
