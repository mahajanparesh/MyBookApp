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
  isSeller: boolean = false;
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
        this.checkSeller(loginForm.email);
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
        this.checkSeller(registerForm.email);
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
    return new Promise<void>((resolve) => {
      const auth = getAuth();
      if (auth.currentUser) {
        this.isAuthenticated = true;
        resolve();
      }
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          this.isAuthenticated = true;
          this.checkSeller(user?.email || '');
        } else {
          this.isAuthenticated = false;
        }
        // this.isAuthenticated = !!user;
        // this.checkSeller(user?.email || '');
        resolve();
      });
    });
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
        this.isSeller = false;
        this.router.navigate(['auth']);
      })
      .catch((error) => {
        console.log('Something went wrong!!! ' + error);
      });
  }
  checkSeller(email: string) {
    if (email === 'seller@gmail.com') {
      this.isSeller = true;
    }
  }
}
