import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../interfaces';
import { SubProductComponent } from './subproduct.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SubProductComponent, MatIconModule, DragDropModule],
  template: `
    <div cdkDropList>
      <mat-icon cdkDragHandle>drag_handle</mat-icon>
      {{ product.name }} || PRODUCT

      <div style="padding-left: 15px"  cdkDrag *ngFor="let subProduct of product.children">
        <app-subproduct
          [subProduct]="subProduct"
        ></app-subproduct>
      </div>
    </div>
  `,
  styles: [
    `
    :host {
      margin-left: 20px;
    }

    .subproducts-list {
      padding: 10px;
      border: 1px solid black;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: Product;
}