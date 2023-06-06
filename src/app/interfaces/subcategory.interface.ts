import { Product } from "./product.interface";

export interface SubCategory {
  id: number;
  frontType: 'subcategory';
  name: string;
  order: number;
  parentId: number | null;
  items: Product[];
}