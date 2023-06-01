import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

import { Category, SubCategory } from './interfaces';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
})
export class ProductCatalog {
  @Input() catalog: Category[];

  @ViewChild(MatAccordion) accordion: MatAccordion;

  connectDropListCategories(f: SubCategory[], second: Category) {
    return f
      .filter((cat) => cat.id !== second.id)
      .map((cat) => `subCategories-${cat.id}`);
  }
}
