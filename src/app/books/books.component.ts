import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

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
  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private searchService: SearchService
  ) {
    this.searchService.searchVisibility$.subscribe((isVisible) => {
      this.isSearchVisible = isVisible;
      this.isShowing = isVisible;
    });
  }

  books: Book[] = [];
  ngOnInit() {
    this.books = this.booksService.getAllBookDetails();
  }
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
    if (this.authService.isAuthenticated) {
      this.cartService.addBookToCart(book);
    } else {
      alert('Login First...');
      this.router.navigate(['./auth']);
    }
  }
  handleSearchVisibilityChange(isVisible: boolean) {
    this.isSearchVisible = isVisible;
  }
}
