import { AccesoryDetails } from './AccesoryDetails';
import { PhoneDetails } from './PhoneDetails';
import { ProductCategory } from './ProuductCategory';
import { TabletDetails } from './TabletDetails';

export type Item = PhoneDetails | TabletDetails | AccesoryDetails;

export interface Product {
  id: number;
  category: ProductCategory;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  item?: Item;
}
