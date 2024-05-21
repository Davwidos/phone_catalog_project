import './Cart.scss';
import LeftIcon from '../../icons/left.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
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
        <NavLink to="#">
          <img className="cart__icon" src={LeftIcon} alt="left" />
        </NavLink>
        <a className="cart__back">Back</a>
        <h1 className="cart__title">Cart</h1>
        <div className="cart__items">
          <div className="cart__item"></div>
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
