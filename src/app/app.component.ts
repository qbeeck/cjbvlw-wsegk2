import { Component } from "@angular/core";

import { Category } from "./interfaces";

@Component({
  selector: "app-root",
  template: `
    <app-product-catalog [catalog]="catalog"></app-product-catalog>
    <!-- <app-product-catalog-second></app-product-catalog-second> -->
  `,
})
export class AppComponent {
  catalog: Category[] = [
    {
      id: 15461,
      frontType: "category",
      name: "Drinks",
      order: 1,
      parentId: null,
      childrenItemCategories: [
        {
          id: 15462,
          frontType: "subcategory",
          name: "Beer",
          order: 1,
          parentId: 15461,
          items: [
            {
              id: 159859,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Kozel Dark",
              order: 1,
              children: [],
            },
            {
              id: 159863,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Kozel White",
              order: 2,
              children: [
                {
                  id: 159864,
                  frontType: "subproduct",
                  itemCategoryId: null,
                  parentId: 159863,
                  name: "500ml",
                  order: 1,
                },
                {
                  id: 159866,
                  frontType: "subproduct",
                  itemCategoryId: null,
                  parentId: 159863,
                  name: "1000ml",
                  order: 2,
                },
              ],
            },
          ],
        },
      ],
      items: [
        {
          id: 159861,
          itemCategoryId: 15461,
          parentId: null,
          frontType: "product",
          name: "Vodka",
          order: 1,
          children: [
            {
              frontType: "subproduct",
              id: 159862,
              itemCategoryId: null,
              parentId: 159861,
              name: "50ml",
              order: 1,
            },
            {
              frontType: "subproduct",
              id: 159863,
              itemCategoryId: null,
              parentId: 159861,
              name: "100ml",
              order: 2,
            },
          ],
        },
        {
          frontType: "product",
          id: 159860,
          itemCategoryId: 15461,
          parentId: null,
          name: "Sprite",
          order: 2,
          children: [],
        },
      ],
    },
  ];
}
