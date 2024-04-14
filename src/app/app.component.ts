import { Component } from '@angular/core';
import { firebaseConfig } from '../firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'BooksApp';

  constructor(private authService: AuthService) {}
  ngOnInit() {
    initializeApp(firebaseConfig);
    this.authService.onInitAuthChangeListener();
  }
  sessionClear() {
    sessionStorage.clear();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
  logout() {
    this.sessionClear();
    this.authService.logout();
  }
}
