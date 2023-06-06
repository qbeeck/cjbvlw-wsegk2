import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryComponent } from './subcategory.component';
import { ProductComponent } from './product.component';
import { Product, SubCategory } from '../interfaces';

@Component({
  selector: 'app-category-children',
  standalone: true,
  imports: [CommonModule, SubcategoryComponent, ProductComponent],
  template: `
    <app-subcategory *ngIf="item.frontType == 'subcategory'" [subCategory]="item"></app-subcategory>

    <app-product *ngIf="item.frontType == 'product'" [product]="item"></app-product>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryChildrenComponent {
  @Input() item!: SubCategory | Product;
}
