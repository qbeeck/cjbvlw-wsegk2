import { Product } from "./product.interface";
import { SubCategory } from "./subcategory.interface";

export interface Category {
  id: number;
  frontType: 'category';
  name: string;
  order: number;
  parentId: number | null;
  childrenItemCategories: SubCategory[];
  items: Product[];
}