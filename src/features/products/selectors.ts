import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../types/Product';

type CheckFuncion<T> = (el: T) => boolean;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProduct = createSelector(
  [selectProducts, (_state, checkFn: CheckFuncion<Product>) => checkFn],
  (products, checkFn) => products.find(checkFn),
);

export const selectFilterdProducts = createSelector(
  [selectProducts, (_state, checkFn: CheckFuncion<Product>) => checkFn],
  (products, checkFn) => products.filter(checkFn),
);
