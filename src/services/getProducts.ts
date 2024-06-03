import { Product } from '../types/Product';
import { mapDetails } from '../utils/mapDetails';
import { getDetails } from './getDetails';

export function getProducts(): Promise<Product[]> {
  return fetch('api/products.json').then(response => response.json());
}

export function getProductsWithDetails(): Promise<Product[]> {
  return Promise.all([getProducts(), getDetails()]).then(data => {
    const [products, details] = data;
    const mapedDetails = mapDetails(details);

    return products.map(p => ({ ...p, item: mapedDetails[p.itemId] }));
  });
}
