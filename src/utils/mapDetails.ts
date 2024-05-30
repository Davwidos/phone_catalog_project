import { Item } from '../types/Product';

export function mapDetails(details: Item[]) {
  return details.reduce<Record<string, Item>>((prev, curr) => {
    return {
      ...prev,
      [curr.id]: curr,
    };
  }, {});
}
