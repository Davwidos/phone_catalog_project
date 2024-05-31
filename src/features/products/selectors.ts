import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../types/Product';
import { ProductCategory } from '../../types/ProuductCategory';

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductByItemId = createSelector(
  [selectProducts, (_state, itemId: Product['itemId']) => itemId],
  (products, itemId) => products.find(p => p.itemId === itemId),
);

export const selectProductsByCategory = createSelector(
  [selectProducts, (_state, catetgory: ProductCategory) => catetgory],
  (products, category) => products.filter(p => p.category === category),
);
