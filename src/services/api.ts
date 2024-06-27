import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemWithProduct, Product } from '../types/Product';

const API_URL = 'https://phone-catalog-project-backend.onrender.com';

interface Pagination {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}

interface PaginatedData<T> {
  data: T[];
  pagination: Pagination;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<PaginatedData<Product>, string>({
      query: searchQery => `products?${searchQery}`,
    }),
    getRecommended: builder.query<Product[], string>({
      query: id => `products/${id}/recommended`,
    }),
    getNewModels: builder.query<Product[], void>({
      query: () => 'products/new',
    }),
    getHotPrices: builder.query<Product[], void>({
      query: () => 'products/discount',
    }),
    getProductDetails: builder.query<ItemWithProduct, string>({
      query: id => `products/${id}`,
    }),
  }),
});
