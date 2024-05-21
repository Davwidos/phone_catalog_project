import './Cart.scss';
import LeftIcon from '../../icons/left.svg';

export const Cart = () => {
  return (
    <>
      <div className="cart">
        <a href="#">
          <img className="cart__icon" src={LeftIcon} alt="left" />
        </a>
        <a className="cart__back">Back</a>
        <h1 className="cart__title">Cart</h1>
        <div className="cart__items">
          <div className="cart__item"></div>
        </div>
        <div className="cart__summary">
          <span className="cart__summary-total">$2657</span>
          <span className="cart__summary-label">Total for 3 items</span>
          <button className="cart__checkout">Checkout</button>
        </div>
      </div>
    </>
  );
};
