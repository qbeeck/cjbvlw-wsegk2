import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SubProduct } from '../interfaces';

@Component({
  selector: 'app-subproduct',
  standalone: true,
  imports: [DragDropModule, MatIconModule],
  template: `
    <mat-icon cdkDragHandle>drag_handle</mat-icon>
    {{ subProduct.name }} || SUBPRODUCT
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubProductComponent {
  @Input() subProduct!: SubProduct;
}
