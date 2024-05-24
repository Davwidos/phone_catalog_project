import React, { useState } from 'react';
import './CartItem.scss';
import img from '../../images/Product.png';
import Delete from '../../icons/Close.svg';

type Props = {
  id: number;
  price: number;
  onDelete: (id: number) => void;
};

export const CartItem: React.FC<Props> = ({ id, onDelete, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleDelete = () => {
    onDelete(id);
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

        <img src={img} alt="Phone" className="cartItem__img" />

        <span className="cartItem__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023) | id: {id}
        </span>
      </div>

      <div className="cartItem__calculation">
        <div className="cartItem__quantity">
          <button
            type="button"
            className="cartItem__btn"
            onClick={handleDecrease}
            disabled={quantity === 1}
          >
            -
          </button>

          <span className="cartItem__number">{quantity}</span>

          <button
            type="button"
            className="cartItem__btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="cartItem__price">${price * quantity}</div>
      </div>
    </div>
  );
};
