import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';
import { CartItem } from '../types/CartItem';

const API_URL = 'http://localhost:3000';

interface Pagination {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginatedData<T> {
  data: T[];
  pagination: Pagination;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<PaginatedData<Product>, string>({
      query: searchQery => `products?${searchQery}`,
    }),
    getFavorites: builder.query<Product[], string>({
      query: userId => `favorites?userId=${userId}}`,
    }),
    getCartItems: builder.query<CartItem[], string>({
      query: userId => `cart?userId=${userId}`,
    }),
  }),
});
