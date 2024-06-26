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
      id: 5,
      name: 'Ratan Tata',
      author: 'A.K. Gandhi',
      image: 'https://m.media-amazon.com/images/I/71ppIPqdYNL._SY522_.jpg',
      amount: 186,
    },
    {
      id: 6,
      name: 'Elon Musk',
      author: 'Walter Isaacson',
      image: 'https://m.media-amazon.com/images/I/71iWxmst49L._SY522_.jpg',
      amount: 965,
    },
    {
      id: 7,
      name: 'The 5 AM Club',
      author: 'Robin Sharma',
      image: 'https://m.media-amazon.com/images/I/618ZOX7UNNL._SY522_.jpg',
      amount: 240,
    },
    {
      id: 8,
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      image: 'https://m.media-amazon.com/images/I/81ioPZFMeUL._SY522_.jpg',
      amount: 331.69,
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

  deleteBook(bookId: number): void {
    const currentBooks = this.booksSubject.value;
    const updatedBooks = currentBooks.filter((book) => book.id !== bookId);
    this.updateLocalStorage(updatedBooks);
    alert('Book Deleted Successfully!!!');
  }

  updateLocalStorage(books: Book[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
    this.booksSubject.next(books);
  }
  updateBook(updatedBook: Book): void {
    const currentBooks = this.booksSubject.value;
    const updatedBooks = currentBooks.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      } else {
        return book;
      }
    });

    this.updateLocalStorage(updatedBooks);
    alert('Books Updated Successfully!!!');
  }

  addBook(book: Book): void {
    book.id = this.booksSubject.value.length + 1;
    const updatedBooks = [...this.booksSubject.value, book];
    this.updateLocalStorage(updatedBooks);
    alert('Book Added Successfully!!!');
  }
}
