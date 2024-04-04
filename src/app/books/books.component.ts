import { Component } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      amount: 310,
    },

    {
      name: 'Clean Code',
      author: 'Robert C Mart',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
      amount: 700,
    },
    {
      name: 'Atomic Habits',
      author: 'James Clear',
      image:
        'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
      amount: 463,
    },
    {
      name: 'Ikigai',
      author: 'Francesc Miralles',
      image:
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg',
      amount: 319,
    },
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      amount: 310,
    },

    {
      name: 'Clean Code',
      author: 'Robert C Mart',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
      amount: 700,
    },
    {
      name: 'Atomic Habits',
      author: 'James Clear',
      image:
        'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
      amount: 463,
    },
    {
      name: 'Ikigai',
      author: 'Francesc Miralles',
      image:
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg',
      amount: 319,
    },
  ];

  isShowing: boolean = false;
  inputText: string = '';
  handleClick() {
    // alert('Button Click Event');
    this.isShowing = false;
  }

  handleInput(event: any) {
    this.inputText = event.target.value;
  }

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }
}
