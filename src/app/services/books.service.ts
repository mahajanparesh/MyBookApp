import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      amount: 310,
    },

    {
      id: 2,
      name: 'Clean Code',
      author: 'Robert C Mart',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
      amount: 700,
    },
    {
      id: 3,
      name: 'Atomic Habits',
      author: 'James Clear',
      image:
        'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
      amount: 463,
    },
    {
      id: 4,
      name: 'Ikigai',
      author: 'Francesc Miralles',
      image:
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg',
      amount: 319,
    },
    {
      id: 1,
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      amount: 310,
    },

    {
      id: 2,
      name: 'Clean Code',
      author: 'Robert C Mart',
      image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
      amount: 700,
    },
    {
      id: 3,
      name: 'Atomic Habits',
      author: 'James Clear',
      image:
        'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
      amount: 463,
    },
    {
      id: 4,
      name: 'Ikigai',
      author: 'Francesc Miralles',
      image:
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SY445_SX342_.jpg',
      amount: 319,
    },
  ];
  constructor() {}

  getAllBookDetails(): Book[] {
    return this.books;
  }
  filterBooks(bookName: string, authorName: string): Book[] {
    return this.books.filter((book) => {
      return (
        book.name.toLowerCase().includes(bookName.toLowerCase()) &&
        book.author.toLowerCase().includes(authorName.toLowerCase())
      );
    });
  }
}
