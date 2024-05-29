import { configureStore } from '@reduxjs/toolkit';
import favorites from '../features/favorites/favoritesSlice';
import { listenerMiddleware } from './listenerMiddleware';

const store = configureStore({
  reducer: {
    favorites,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
