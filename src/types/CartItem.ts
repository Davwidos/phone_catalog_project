import { Product } from './Product';

export interface CartItem extends Product {
  id: number;
  price: number;
  amount?: number;
}
