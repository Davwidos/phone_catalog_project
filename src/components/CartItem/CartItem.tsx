import React from 'react';
import './CartItem.scss';
import Delete from '../../icons/Close.svg';
import { CartItemTemp as Product } from '../../types/CartItem';
import { NavLink } from 'react-router-dom';
import { api } from '../../services/api';

type Props = {
  cartData: Product;
};

export const CartItem: React.FC<Props> = ({ cartData }) => {
  const [deleteFromCart] = api.useDeleteFromCartMutation();
  const [updateCartItem] = api.useUpdateCartItemMutation();

  const handleIncrease = () => {
    updateCartItem({ ...cartData, quantity: cartData.quantity + 1 });
  };

  const handleDecrease = () => {
    updateCartItem({ ...cartData, quantity: cartData.quantity - 1 });
  };

  const handleDelete = () => {
    deleteFromCart(cartData.id);
  };

  const product = cartData.product;

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
            disabled={!cartData.quantity || cartData.quantity === 1}
          >
            -
          </button>

          <span className="cartItem__number">{cartData.quantity}</span>

          <button
            type="button"
            className="cartItem__btn"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="cartItem__price">
          ${product.price * (cartData.quantity || 0)}
        </div>
      </div>
    </div>
  );
};
