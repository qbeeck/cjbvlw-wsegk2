import { SubProduct } from "./subproduct.interface";

export interface Product {
  id: number;
  frontType: 'product';
  itemCategoryId: number | null;
  parentId: number | null;
  name: string;
  order: number;
  children: SubProduct[];
}
