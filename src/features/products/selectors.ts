import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Product } from '../../types/Product';
import { ProductCategory } from '../../types/ProuductCategory';
import { ProductDetails } from '../../types/ProductDetails';
import { shuffleArray } from '../../utils/shuffleArray';

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

export const selectNewModels = createSelector([selectProducts], products =>
  shuffleArray(products.filter(p => p.year >= 2022)),
);

export const selectHotPrices = createSelector([selectProducts], products =>
  shuffleArray(products.filter(p => p.fullPrice - p.price > 50)),
);

export const selectRecomended = createSelector([selectProducts], products => {
  const referenceModels = products.slice(0, 10);

  return shuffleArray(
    products.filter(p =>
      referenceModels.some(
        model => model.itemId.substring(0, 15) === p.itemId.substring(0, 15),
      ),
    ),
  );
});
