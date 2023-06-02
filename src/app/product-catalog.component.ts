import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { Category } from './interfaces';
import { CategoryComponent } from './components/category.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, DragDropModule, CategoryComponent],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
})
export class ProductCatalog {
  @Input() catalog: Category[];

  catalogsDropped(event: CdkDragDrop<Category[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
