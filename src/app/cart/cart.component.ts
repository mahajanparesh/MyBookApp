import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cart = cartItems;
      this.calculateTotalAmount();
    });
  }

  deleteBook(bookId: number): void {
    this.cartService.deleteBookFromCart(bookId);
    this.getDetails();
  }

  incrementQuantity(bookId: number): void {
    this.cartService.incrementQuantity(bookId);
    this.getDetails();
  }

  decrementQuantity(bookId: number): void {
    this.cartService.decrementQuantity(bookId);
    this.getDetails();
  }

  private getDetails(): void {
    this.cart = this.cartService.getCartDetails();
    this.calculateTotalAmount();
  }

  private calculateTotalAmount(): void {
    this.totalAmount = this.cart.reduce(
      (total, currentItem) => total + currentItem.amount,
      0
    );
  }
}
