import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';
import { startListening } from '../../app/listenerMiddleware';
import { RootState } from '../../app/store';

const getFavorites = () => {
  const favoritesString = localStorage.getItem('favorites');

  return favoritesString ? JSON.parse(favoritesString) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getFavorites() as Product[],
  reducers: {
    add: (state, action: PayloadAction<Product>) => [...state, action.payload],
    remove: (state, action: PayloadAction<number>) =>
      state.filter(p => p.id !== action.payload),
    toggle: (state, action: PayloadAction<Product>) =>
      state.some(p => p.id === action.payload.id)
        ? state.filter(p => p.id !== action.payload.id)
        : [...state, action.payload],
  },
});

export const { add, remove, toggle } = favoritesSlice.actions;

startListening({
  matcher: isAnyOf(...Object.values(favoritesSlice.actions)),
  effect: (_action, listenerApi) => {
    localStorage.setItem(
      'favorites',
      JSON.stringify((listenerApi.getState() as RootState).favorites),
    );
  },
});

export default favoritesSlice.reducer;
