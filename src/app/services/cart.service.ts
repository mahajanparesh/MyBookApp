import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { Cart } from '../types/cart';

@Injectable()
export class CartService {
  private cartItems: Cart[] = [];
  constructor() {
    const storedCartItems = sessionStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  addBookToCart(book: Book): void {
    const existingItemIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === book.id
    );
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].amount =
        (this.cartItems[existingItemIndex].amount /
          this.cartItems[existingItemIndex].quantity) *
        (this.cartItems[existingItemIndex].quantity + 1);
      this.cartItems[existingItemIndex].quantity++;
    } else {
      const cartItem: Cart = {
        id: book.id,
        image: book.image,
        name: book.name,
        author: book.author,
        amount: book.amount,
        quantity: 1,
      };
      this.cartItems.push(cartItem);
    }
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartDetails(): Cart[] {
    return JSON.parse(sessionStorage.getItem('cartItems') || '[]');
  }

  deleteBookFromCart(bookId: number): void {
    const bookIndex = this.cartItems.findIndex((item) => item.id === bookId);
    if (bookIndex !== -1) {
      this.cartItems.splice(bookIndex, 1);
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  incrementQuantity(bookId: number): void {
    const bookIndex = this.cartItems.findIndex((item) => item.id === bookId);
    this.cartItems[bookIndex].amount =
      (this.cartItems[bookIndex].amount / this.cartItems[bookIndex].quantity) *
      (this.cartItems[bookIndex].quantity + 1);
    this.cartItems[bookIndex].quantity++;
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  decrementQuantity(bookId: number): void {
    const bookIndex = this.cartItems.findIndex((item) => item.id === bookId);
    if (this.cartItems[bookIndex].quantity - 1 === 0) {
      this.deleteBookFromCart(bookId);
    } else {
      this.cartItems[bookIndex].amount =
        (this.cartItems[bookIndex].amount /
          this.cartItems[bookIndex].quantity) *
        (this.cartItems[bookIndex].quantity - 1);
      this.cartItems[bookIndex].quantity--;
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }
}
