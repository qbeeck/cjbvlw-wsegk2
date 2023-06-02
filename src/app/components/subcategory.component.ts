import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Product, SubCategory } from '../interfaces';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule, ProductComponent, MatIconModule, DragDropModule],
  template: `
    <div 
      cdkDropList 
      [cdkDropListData]="subCategory.items"
      (cdkDropListDropped)="subcategoryDrop($event)"
    >
      <mat-icon cdkDragHandle>drag_handle</mat-icon>
      {{ subCategory.name }} || SUBCATEGORY

      <div style="padding-left: 15px" cdkDrag *ngFor="let product of subCategory.items">
        <app-product
          [product]="product"
        ></app-product>
      </div>
    </div>
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
export class SubcategoryComponent {
  @Input() subCategory!: SubCategory;

  subcategoryDrop(event: CdkDragDrop<Product[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
