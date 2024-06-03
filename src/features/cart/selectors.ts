import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectCartValue = createSelector(
  [(state: RootState) => state.cart],
  cart =>
    cart.reduce((prev, curr) => prev + curr.price * (curr.amount || 0), 0),
);
