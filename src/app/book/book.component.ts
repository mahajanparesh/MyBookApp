import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  ngOnInit(): void {
    const storedBooks = localStorage.getItem('book');
    if (!storedBooks) {
      localStorage.setItem('books', JSON.stringify(this.book));
    } else {
      this.book = JSON.parse(storedBooks);
    }
  }
  addToCart(): void {
    this.bookEmitter.emit(this.book);
  }
}
