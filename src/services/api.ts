import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemWithProduct, Product } from '../types/Product';

const API_URL = 'http://localhost:3000';

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
    getProductDetails: builder.query<ItemWithProduct, string>({
      query: id => `products/${id}`,
    }),
  }),
});
