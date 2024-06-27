import { ProductDetails } from './ProductDetails';

export interface ProductWithCamera extends ProductDetails {
  camera: string;
  zoom: string;
}
