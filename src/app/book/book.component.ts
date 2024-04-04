import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  ngOnInit(): void {
    const storedBooks = localStorage.getItem('book');
    if (!storedBooks) {
      localStorage.setItem('books', JSON.stringify(this.book));
    } else {
      this.book = JSON.parse(storedBooks);
    }
  }
  addToCart(book: any): void {
    let cart: any[] = JSON.parse(sessionStorage.getItem('cart') || '[]');
    cart.push(book);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}
