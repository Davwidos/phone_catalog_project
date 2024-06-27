import { configureStore } from '@reduxjs/toolkit';
import favorites from '../features/favorites/favoritesSlice';
import cart from '../features/cart/cartSlice';
import products from '../features/products/productsSlice';
import { listenerMiddleware } from './listenerMiddleware';
import { api } from '../services/api';

const store = configureStore({
  reducer: {
    favorites,
    cart,
    products,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      listenerMiddleware.middleware,
      api.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
