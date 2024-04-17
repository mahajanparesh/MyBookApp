import { Component } from '@angular/core';
import { firebaseConfig } from '../firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SearchService } from './services/search.service';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'BooksApp';

  constructor(
    private authService: AuthService,
    private router: Router,
    private searchService: SearchService,
    private booksService: BooksService
  ) {}
  ngOnInit() {
    initializeApp(firebaseConfig);
    this.authService.onInitAuthChangeListener();
    this.booksService.saveBooksToLocalStorage();
  }
  sessionClear() {
    sessionStorage.clear();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
  logout() {
    this.authService.logout();
    sessionStorage.clear();
    localStorage.removeItem('booksData');
    window.location.reload();
    this.router.navigate(['/auth']);
  }

  cart() {
    if (!this.isAuthenticated()) {
      alert('Login First...');
      this.router.navigate(['./auth']);
    }
  }
  isSeller() {
    return this.authService.isSeller;
  }
  toggleSearch() {
    this.searchService.toggleSearchVisibility();
  }
}
