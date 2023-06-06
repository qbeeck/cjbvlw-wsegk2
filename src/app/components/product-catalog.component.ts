import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { Category } from '../interfaces';
import { CategoryComponent } from './category.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, DragDropModule, CategoryComponent],
  template: `
    <div
      cdkDropList
      [cdkDropListData]="catalog"
      (cdkDropListDropped)="catalogsDropped($event)"
    >
      <div cdkDrag style="padding-left: 15px" *ngFor="let category of catalog">
        <app-category [category]="category"></app-category>
      </div>
    </div>
  `,
})
export class ProductCatalog {
  @Input() catalog!: Category[];

  catalogsDropped(event: CdkDragDrop<Category[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
