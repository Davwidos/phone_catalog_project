import React from 'react';
import './CartItem.scss';
import Delete from '../../icons/Close.svg';
import { CartItem as Product } from '../../types/CartItem';
import { useDispatch } from 'react-redux';
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
} from '../../features/cart/cartSlice';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseAmount(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseAmount(product.id));
  };

  const handleDelete = () => {
    dispatch(removeItem(product.id));
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

        <span className="cartItem__title">{product.name}</span>
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
