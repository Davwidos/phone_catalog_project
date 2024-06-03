import { ProductDetails } from '../types/ProductDetails';
import { ProductCategory } from '../types/ProuductCategory';

export function createProductLink(
  category: ProductCategory,
  namespaceId: ProductDetails['namespaceId'],
  capacity: ProductDetails['capacity'],
  color: ProductDetails['color'],
) {
  return `/${category}/${namespaceId}-${capacity}-${color}`
    .toLocaleLowerCase()
    .replaceAll(/\s/g, '-');
}
