import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../types/auth';
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  constructor(private router: Router) {}

  login(loginForm: LoginForm) {
    const auth = getAuth();
    this.isLoading = true;
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredential) => {
        // Signed in
        this.isLoading = false;
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
        alert('Signin Successful!!! ' + userCredential.user.email);
        // ...
      })
      .catch((error) => {
        alert('error while Signing In' + error);
        this.isLoading = false;
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  register(registerForm: RegisterForm) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      registerForm.email,
      registerForm.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        this.isLoading = false;
        this.isAuthenticated = true;
        this.router.navigate(['']);
        alert('Signup Successful!!!');
      })
      .catch((error) => {
        this.isLoading = false;
        alert('error while Signing Up' + error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  onInitAuthChangeListener() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User | null) => {
      this.isAuthenticated = !!user; // If user exists, isAuthenticated is true
    });
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
        this.router.navigate(['auth']);
      })
      .catch((error) => {
        console.log('Something went wrong!!! ' + error);
      });
  }
}
