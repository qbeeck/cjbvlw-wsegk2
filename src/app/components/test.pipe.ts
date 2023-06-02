import { Pipe, PipeTransform } from '@angular/core';
import { Product, SubCategory } from '../interfaces';

@Pipe({ name: 'test', standalone: true })
export class TestPipe implements PipeTransform {
  transform(
    value: SubCategory[],
    second: Product[]
  ): (SubCategory | Product)[] {
    return [...value, ...second];
  }
}
