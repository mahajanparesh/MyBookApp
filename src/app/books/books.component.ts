import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  isShowing: boolean = false;
  inputText: string = '';
  isSearchVisible = false;
  @Output() searchVisibilityChange = new EventEmitter<boolean>();
  books: Book[] = [];
  searchSubscription!: Subscription;

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.books = this.booksService.getAllBookDetails();

    // Subscribe to search query changes
    this.searchSubscription = this.searchService
      .getSearchQuery()
      .subscribe((query) => {
        this.filterBooks(query);
      });

    // Subscribe to search visibility changes
    this.searchService.searchVisibility$.subscribe((isVisible) => {
      this.isSearchVisible = isVisible;
      this.isShowing = isVisible;
    });
  }

  filterBooks(query: { bookName: string; authorName: string }) {
    // Filter books based on the search query
    // Assuming you have a method in your BooksService to filter books
    this.books = this.booksService.filterBooks(
      query.bookName,
      query.authorName
    );
  }

  handleClick() {
    this.isShowing = false;
  }

  handleInput(event: any) {
    this.inputText = event.target.value;
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
    if (this.isShowing && !this.isSearchVisible) {
      this.books = this.booksService.getAllBookDetails();
    }
  }

  addToCart(book: Book) {
    if (this.authService.isAuthenticated) {
      this.cartService.addBookToCart(book);
    } else {
      alert('Login First...');
      this.router.navigate(['./auth']);
    }
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.searchSubscription.unsubscribe();
  }
}
