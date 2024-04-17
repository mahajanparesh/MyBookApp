import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrencyFormat',
})
export class CustomCurrencyFormatPipe implements PipeTransform {
  transform(
    value: number,
    currencySymbol: string = '$',
    decimalCount: number = 2,
    decimalSeparator: string = '.',
    thousandsSeparator: string = ','
  ): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    // Format currency
    const formattedValue = value
      .toFixed(decimalCount)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    return currencySymbol + formattedValue;
  }
}
