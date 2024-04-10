import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  isShowing: boolean = false;
  inputText: string = '';

  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  books: Book[] = this.booksService.getAllBookDetails();
  ngOnInit() {}
  handleClick() {
    this.isShowing = false;
  }

  handleInput(event: any) {
    this.inputText = event.target.value;
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  addToCart(book: Book) {
    this.cartService.addBookToCart(book);
  }
}
