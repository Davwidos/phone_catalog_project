import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../types/Product';
import { ProductCategory } from '../../types/ProuductCategory';
import { ProductDetails } from '../../types/ProductDetails';

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductByItemId = createSelector(
  [selectProducts, (_state, itemId: Product['itemId']) => itemId],
  (products, itemId) => products.find(p => p.itemId === itemId),
);

export const selectProductsByCategory = createSelector(
  [selectProducts, (_state, catetgory: ProductCategory) => catetgory],
  (products, category) => products.filter(p => p.category === category),
);

export const selectUnicqueProducts = createSelector(
  [(products: Product[]) => products],
  products => {
    const existingNameSpaceId = new Set<ProductDetails['namespaceId']>();

    return products.filter(p => {
      if (!p.item || existingNameSpaceId.has(p.item.namespaceId)) {
        return false;
      }

      existingNameSpaceId.add(p.item.namespaceId);

      return true;
    });
  },
);

export const selectUniqueProductsByCategory = createSelector(
  [selectProductsByCategory],
  products => selectUnicqueProducts(products),
);
