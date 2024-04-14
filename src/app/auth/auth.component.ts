import { Component } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { LoginForm, RegisterForm } from '../types/auth';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  registerForm: RegisterForm = {
    email: '',
    password: '',
    cpassword: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const signUpButton: HTMLButtonElement | null = document.getElementById(
      'signUp'
    ) as HTMLButtonElement;
    const signInButton: HTMLButtonElement | null = document.getElementById(
      'signIn'
    ) as HTMLButtonElement;
    const container: HTMLElement | null = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        if (container.classList) {
          container.classList.add('right-panel-active');
        }
      });

      signInButton.addEventListener('click', () => {
        if (container.classList) {
          container.classList.remove('right-panel-active');
        }
      });
    }
  }

  signup_submit() {
    this.authService.register(this.registerForm);
  }

  signin_submit() {
    this.authService.login(this.loginForm);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
