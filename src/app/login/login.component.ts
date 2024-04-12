import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor() {}

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
}
