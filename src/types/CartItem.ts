import { Product } from './Product';

export interface CartItem extends Product {
  id: number;
  price: number;
  amount?: number;
}

export interface CartItemTemp {
  id: number;
  quantity: number;
  product: Product;
  userId: number;
  productId: number;
}
