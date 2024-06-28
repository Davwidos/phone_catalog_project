import { Product } from './Product';

export interface FavritesItem {
  id: number;
  productId: number;
  userId: number;
  product: Product;
}
