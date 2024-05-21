import './Cart.scss';

export const Cart = () => {
  return (
    <>
      <div className="cart">
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
      <footer className="cart__footer">
        <div className="cart__footer-logo">
          <span>Nice</span>
          <span role="img" aria-label="emoji">
            👌
          </span>
          <span>Gadgets</span>
        </div>
        <a href="github-link" className="cart__footer-link">
          GITHUB
        </a>
        <a href="contacts-link" className="cart__footer-link">
          CONTACTS
        </a>
        <a href="rights-link" className="cart__footer-link">
          RIGHTS
        </a>
      </footer>
      <a className="cart__back-to-top">Back to top</a>
    </>
  );
};
