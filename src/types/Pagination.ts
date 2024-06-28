export interface Pagination {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginatedData<T> {
  data: T[];
  pagination: Pagination;
}
