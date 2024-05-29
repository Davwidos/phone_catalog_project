import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

const getFavorites = () => {
  const favoritesString = localStorage.getItem('favourites');

  return favoritesString ? JSON.parse(favoritesString) : [];
};

export const updateLocalStorage = createAsyncThunk(
  'favorites/localstorage',
  () => {},
);

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
  extraReducers: builder => {
    builder.addCase(updateLocalStorage.fulfilled, state => {
      localStorage.setItem('favourites', JSON.stringify(state));
    });
  },
});

export const { add, remove, toggle } = favoritesSlice.actions;

export default favoritesSlice.reducer;
