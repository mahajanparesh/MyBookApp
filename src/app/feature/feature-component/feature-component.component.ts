import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrl: './feature-component.component.css',
})
export class FeatureComponentComponent {
  products = [
    { name: 'Product A', price: 25.99, quantity: 10 },
    { name: 'Product B', price: 15.5, quantity: 5 },
    { name: 'Product C', price: 30.75, quantity: 8 },
  ];
}
