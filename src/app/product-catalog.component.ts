import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';

import { Category, Product, SubCategory } from './interfaces';
import { ProductComponent } from './components';
import { SubcategoryComponent } from './components/subcategory.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    ProductComponent,
    SubcategoryComponent,
  ],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
})
export class ProductCatalog {
  @Input() catalog: Category[];

  connectSubCategories(subCategories: SubCategory[], products: Product[]) {
    const subCatogoriesList = subCategories.map((c) => `subCategory-${c.id}`);
    const productsList = products.map((c) => `product-${c.id}`);

    console.log([...subCatogoriesList, ...productsList]);
    return [...subCatogoriesList, ...productsList];
  }

  catalogsDropped(event: CdkDragDrop<Category[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
