import { configureStore } from '@reduxjs/toolkit';
import favorites from '../features/favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    favorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
