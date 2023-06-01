export interface Category {
  id: number;
  name: string;
  order: number;
  parentId: number | null;
  childrenItemCategories: SubCategory[];
  items: Product[];
}

export interface SubCategory {
  id: number;
  name: string;
  order: number;
  parentId: number | null;
  items: Product[];
}

export interface Product {
  id: number;
  itemCategoryId: number | null;
  parentId: number | null;
  name: string;
  order: number;
  children: SubProduct[];
}

export type SubProduct = Omit<Product, 'children'>;
