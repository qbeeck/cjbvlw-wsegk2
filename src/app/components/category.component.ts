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

import { CategoryChildrenComponent } from "./category-children.component";
import { Category } from "../interfaces";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule,
    CategoryChildrenComponent,
  ],
  template: `
    <mat-expansion-panel expanded>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <mat-icon cdkDragHandle>drag_handle</mat-icon>

          {{ category.name }}
        </mat-panel-title>
      </mat-expansion-panel-header>

      <div style="padding-left: 15px" cdkDropListGroup>
        <div
          cdkDropList
          [cdkDropListData]="category.childrenItemCategories"
          (cdkDropListDropped)="categoryChildrensDrop($event)"
        >
          <div
            cdkDrag
            style="padding-left: 15px"
            *ngFor="let subCategory of category.childrenItemCategories"
          >
            <app-category-children [item]="subCategory"></app-category-children>
          </div>
        </div>

        <div
          cdkDropList
          [cdkDropListData]="category.items"
          (cdkDropListDropped)="categoryChildrensDrop($event)"
        >
          <div
            cdkDrag
            style="padding-left: 15px"
            *ngFor="let product of category.items"
          >
            <app-category-children [item]="product"></app-category-children>
          </div>
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
