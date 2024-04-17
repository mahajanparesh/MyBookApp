import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortByPricePipe',
})
export class SharedPipePipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!value || !value.length) return [];
    return value.slice().sort((b, a) => b.price - a.price);
  }
}
