import { Item } from '../types/Product';

export function getDetails(): Promise<Item[]> {
  return Promise.all([
    fetch('api/phones.json').then(response => response.json()),
    fetch('api/tablets.json').then(response => response.json()),
    fetch('api/accessories.json').then(response => response.json()),
  ]).then(data => data.flat());
}
