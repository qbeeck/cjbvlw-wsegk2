import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";

import { Category } from "../interfaces";
import { SubcategoryComponent } from "./subcategory.component";
import { ProductComponent } from "./product.component";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule,
    ProductComponent,
    SubcategoryComponent,
  ],
  template: `
    <mat-expansion-panel expanded>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <mat-icon cdkDragHandle>drag_handle</mat-icon>

          {{ category.name }}
        </mat-panel-title>
      </mat-expansion-panel-header>

      <div
        cdkDropList
        [cdkDropListData]="items"
        (cdkDropListDropped)="categoryChildrensDrop($event)"
      >
        <div
          cdkDrag
          style="padding-left: 15px"
          *ngFor="let item of items"
        >
          <app-subcategory *ngIf="item.frontType == 'subcategory'" [subCategory]="item"></app-subcategory>

          <app-product *ngIf="item.frontType == 'product'" [product]="item"></app-product>
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

  items: any;

  ngOnInit(): void {
    this.items = [
      ...this.category.childrenItemCategories,
      ...this.category.items,
    ];
  }

  categoryChildrensDrop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
