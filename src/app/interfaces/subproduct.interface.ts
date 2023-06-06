export interface SubProduct {
  id: number;
  frontType: 'subproduct';
  itemCategoryId: number | null;
  parentId: number | null;
  name: string;
  order: number;
}