import { Component } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  currentTab: string = 'View Books';
  function_name: string = '';
  books: Book[] = [];
  single_book: Book = {
    id: 0,
    image: '',
    name: '',
    author: '',
    amount: 0,
  };
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.function_name = 'Add Book';
    this.booksService.getAllBookDetails().subscribe((books: Book[]) => {
      this.books = books;
    });
    this.clearBook();
  }

  toggleTab(tab: string) {
    if (tab === 'View Books') {
      this.function_name = 'Add Book';
    }
    this.currentTab = tab;
    this.clearBook();
  }
  editBookBtn(tab: string, book: Book) {
    this.currentTab = 'Add Book';
    this.function_name = 'Edit Book';
    this.single_book = book;
  }
  isActiveTab(tab: string): boolean {
    return this.currentTab === tab;
  }

  deleteBook(book: Book) {
    this.booksService.deleteBook(book.id);
  }
  editBook(book: Book) {
    this.booksService.updateBook(book);
    this.currentTab = 'View Books';
    this.function_name = 'Add Book';
    this.clearBook();
  }

  addBook(book: Book) {
    this.booksService.addBook(book);
    this.currentTab = 'View Books';
    this.function_name = 'Add Book';
    this.clearBook();
  }
  clearBook() {
    this.single_book = {
      id: 0,
      image: '',
      name: '',
      author: '',
      amount: 0.0,
    };
  }
}
