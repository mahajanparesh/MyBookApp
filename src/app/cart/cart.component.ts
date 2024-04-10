import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { Cart } from '../types/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  cart: Cart[] = JSON.parse('[]');
  sessionClear() {
    sessionStorage.clear();
  }

  deleteBook(bookId: number): void {
    this.cartService.deleteBookFromCart(bookId);
  }
  getDetails() {
    this.cart = this.cartService.getCartDetails();
    console.log(this.cart);
    return this.cart;
  }

  incrementQuantity(bookId: number): void {
    this.cartService.incrementQuantity(bookId);
  }
  decrementQuantity(bookId: number): void {
    this.cartService.decrementQuantity(bookId);
  }
}
