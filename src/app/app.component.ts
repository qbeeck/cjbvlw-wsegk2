import { Component } from "@angular/core";

import { Category } from "./interfaces";

@Component({
  selector: "app-root",
  template: `<app-product-catalog [catalog]="catalog"></app-product-catalog>`,
})
export class AppComponent {
  catalog: Category[] = [
    {
      id: 15461,
      frontType: "category",
      name: "Sushi | Category",
      order: 1,
      parentId: null,
      childrenItemCategories: [
        {
          id: 15462,
          frontType: "subcategory",
          name: "Nori | Subcategory",
          order: 1,
          parentId: 15461,
          items: [
            {
              id: 159859,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Product #1",
              order: 1,
              children: [],
            },
            {
              id: 159863,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Product #2",
              order: 2,
              children: [
                {
                  id: 159864,
                  frontType: "subproduct",
                  itemCategoryId: null,
                  parentId: 159863,
                  name: "Subproduct #4",
                  order: 1,
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
          name: "Product #1",
          order: 1,
          children: [
            {
              frontType: "subproduct",
              id: 159862,
              itemCategoryId: null,
              parentId: 159861,
              name: "asdas | Subproduct #1",
              order: 1,
            },
            {
              frontType: "subproduct",
              id: 159863,
              itemCategoryId: null,
              parentId: 159861,
              name: "another | Subproduct #2",
              order: 2,
            },
          ],
        },
        {
          frontType: "product",
          id: 159860,
          itemCategoryId: 15461,
          parentId: null,
          name: "Product #2",
          order: 2,
          children: [],
        },
      ],
    },

    {
      id: 15461,
      frontType: "category",
      name: "Sushi 2 | Category",
      order: 1,
      parentId: null,
      childrenItemCategories: [
        {
          id: 15462,
          frontType: "subcategory",
          name: "Nori 2 | Subcategory",
          order: 1,
          parentId: 15461,
          items: [
            {
              id: 159859,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Product #1 2",
              order: 1,
              children: [],
            },
            {
              id: 159863,
              frontType: "product",
              itemCategoryId: 15462,
              parentId: null,
              name: "Product #2 2",
              order: 2,
              children: [
                {
                  id: 159864,
                  frontType: "subproduct",
                  itemCategoryId: null,
                  parentId: 159863,
                  name: "Subproduct #4 2",
                  order: 1,
                },
              ],
            },
          ],
        },
      ],
      items: [
        {
          id: 159863,
          itemCategoryId: 15461,
          parentId: null,
          frontType: "product",
          name: "Product #1 2",
          order: 1,
          children: [
            {
              frontType: "subproduct",
              id: 159862,
              itemCategoryId: null,
              parentId: 159861,
              name: "asdas | Subproduct #1 2",
              order: 1,
            },
            {
              frontType: "subproduct",
              id: 159863,
              itemCategoryId: null,
              parentId: 159861,
              name: "another | Subproduct #2 2",
              order: 2,
            },
          ],
        },
        {
          frontType: "product",
          id: 159860,
          itemCategoryId: 15461,
          parentId: null,
          name: "Product #2 2",
          order: 2,
          children: [],
        },
      ],
    },
  ];
}
