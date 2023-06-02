import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { Category, Product, SubCategory } from '../interfaces';
import { ProductComponent } from './product.component';
import { SubcategoryComponent } from './subcategory.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    MatIconModule,
    DragDropModule,
    SubcategoryComponent,
    MatExpansionModule,
  ],
  template: `
    <mat-expansion-panel expanded>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <mat-icon cdkDragHandle>drag_handle</mat-icon>

          {{ category.name }}
        </mat-panel-title>
      </mat-expansion-panel-header>

      <div style="padding-left: 15px" cdkDropList>
        <div
          cdkDrag
          style="padding-left: 15px"
          *ngFor="let subCategory of category.childrenItemCategories"
        >
          <hr />

          <app-subcategory [subCategory]="subCategory"></app-subcategory>

          <hr />
        </div>

        <div
          cdkDrag
          style="padding-left: 15px"
          *ngFor="let product of category.items"
        >
          <hr />
          <app-product [product]="product"></app-product>
          <hr />
        </div>
      </div>
    </mat-expansion-panel>
  `,
  styles: [
    `
    :host {
      margin-left: 20px;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input() category!: Category;

  dropItems: (SubCategory | Product)[] = [];

  ngOnInit(): void {
    this.dropItems = [
      ...this.category.childrenItemCategories,
      ...this.category.items,
    ];
  }

  subcategoryDrop(event: CdkDragDrop<(SubCategory | Product)[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
