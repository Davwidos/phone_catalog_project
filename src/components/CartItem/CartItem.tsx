import React, { useState, useEffect } from 'react';
import './CartItem.scss';
import img from '../../images/Product.png';
import Delete from '../../icons/Close.svg';

type Props = {
  id: number;
  price: number;
  quantity: number;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
};

export const CartItem: React.FC<Props> = ({
  id,
  price,
  quantity,
  onDelete,
  onQuantityChange,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;

    setItemQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = itemQuantity > 1 ? itemQuantity - 1 : 1;

    setItemQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
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
            disabled={itemQuantity === 1}
          >
            -
          </button>

          <span className="cartItem__number">{itemQuantity}</span>

          <button
            type="button"
            className="cartItem__btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="cartItem__price">${price * itemQuantity}</div>
      </div>
    </div>
  );
};
