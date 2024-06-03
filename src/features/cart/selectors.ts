import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectCartValue = createSelector(
  [(state: RootState) => state.cart],
  cart =>
    cart.reduce((prev, curr) => prev + curr.price * (curr.amount || 0), 0),
);

export const selectTotalItems = createSelector(
  [(state: RootState) => state.cart],
  cartItems => cartItems.reduce((total, item) => total + (item.amount || 0), 0),
);
