import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class BooksService {
  private localStorageKey = 'booksData';
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );
  public books$: Observable<Book[]> = this.booksSubject.asObservable();
  books_array: Book[] = [
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
  constructor() {
    this.loadBooksFromLocalStorage();
  }
  private loadBooksFromLocalStorage(): void {
    const booksData = localStorage.getItem(this.localStorageKey);
    if (booksData) {
      const books: Book[] = JSON.parse(booksData);
      this.booksSubject.next(books);
    }
  }
  saveBooksToLocalStorage(): void {
    const storedBooks = JSON.parse(
      localStorage.getItem(this.localStorageKey) as string
    );
    if (!storedBooks) {
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.books_array)
      );
      this.booksSubject.next(this.books_array);
    }
  }
  getAllBookDetails(): Observable<Book[]> {
    return this.books$;
  }
  filterBooks(bookName: string, authorName: string): Observable<Book[]> {
    return this.books$.pipe(
      map((books: Book[]) => {
        return books.filter((book) => {
          return (
            book.name.toLowerCase().includes(bookName.toLowerCase()) &&
            book.author.toLowerCase().includes(authorName.toLowerCase())
          );
        });
      })
    );
  }
}
