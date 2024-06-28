import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';
import { CartItemTemp } from '../types/CartItem';

const API_URL = 'https://phone-catalog-project-backend.onrender.com';

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
  tagTypes: ['Cart', 'Favs'],
  endpoints: builder => ({
    getProducts: builder.query<PaginatedData<Product>, string>({
      query: searchQery => `products?${searchQery}`,
    }),
    getFavorites: builder.query<Product[], string>({
      query: userId => `/favorites?userId=${userId}`,
      providesTags: ['Favs'],
    }),
    getCartItems: builder.query<CartItemTemp[], string>({
      query: userId => `/cart?userId=${userId}`,
      providesTags: ['Cart'],
    }),
    postQueryCart: builder.mutation<CartItemTemp, Partial<CartItemTemp>>({
      query: body => ({ url: `/cart`, method: 'POST', body }),
      invalidatesTags: ['Cart'],
    }),
    deleteFromCart: builder.mutation<void, number>({
      query: id => ({ url: `/cart/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Cart'],
    }),
    postQueryFavorites: builder.mutation<Product[], Partial<Product>>({
      query: body => ({ url: `/favorites`, method: 'POST', body }),
      invalidatesTags: ['Favs'],
    }),
    deleteFromFavourites: builder.mutation<void, number>({
      query: id => ({ url: `/favorites/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Favs'],
    }),
    updateCartItem: builder.mutation<CartItemTemp, CartItemTemp>({
      query: body => ({ url: `/cart/${body.id}`, method: 'PUT', body }),
      invalidatesTags: ['Cart'],
    }),
  }),
});
