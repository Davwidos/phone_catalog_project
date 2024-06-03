import React from 'react';
import './CartItem.scss';
import Delete from '../../icons/Close.svg';
import { useCart } from '../../provider/CartProvider';
import { CartItem as Product } from '../../types/CartItem';
import { NavLink } from 'react-router-dom';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const { decreaseAmount, removeItem, increaseAmount } = useCart();

  const handleIncrease = () => {
    increaseAmount(product.id);
  };

  const handleDecrease = () => {
    decreaseAmount(product.id);
  };

  const handleDelete = () => {
    removeItem(product.id);
  };

  return (
    <div className="cartItem">
      <div className="cartItem__mobail-top">
        <button
          type="button"
          className="cartItem__delete-btn"
          onClick={handleDelete}
        >
          <img src={Delete} alt="Delete" />
        </button>

        <img src={product.image} alt="Phone" className="cartItem__img" />

        <NavLink
          className="cartItem__title"
          to={`/${product.category}/${product.itemId}`}
        >
          {product.name}
        </NavLink>
      </div>

      <div className="cartItem__calculation">
        <div className="cartItem__quantity">
          <button
            type="button"
            className="cartItem__btn"
            onClick={handleDecrease}
            disabled={!product.amount || product.amount === 1}
          >
            -
          </button>

          <span className="cartItem__number">{product.amount}</span>

          <button
            type="button"
            className="cartItem__btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="cartItem__price">
          ${product.price * (product.amount || 0)}
        </div>
      </div>
    </div>
  );
};
