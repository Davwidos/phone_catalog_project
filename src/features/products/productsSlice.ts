import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';
import { getProductsWithDetails } from '../../services/getProducts';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (): Promise<Product[]> => {
    const response = getProductsWithDetails();

    return response;
  },
);

export interface State {
  products: Product[];
  pending: boolean;
  error: boolean;
}

const initialState: State = {
  products: [] as Product[],
  pending: false,
  error: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => ({
        ...state,
        products: action.payload,
        pending: false,
      }))
      .addCase(fetchProducts.pending, state => ({ ...state, pending: true }))
      .addCase(fetchProducts.rejected, state => ({
        ...state,
        pending: false,
        error: true,
      }));
  },
});

export default productsSlice.reducer;
