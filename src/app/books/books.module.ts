import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
import { SearchComponent } from '../search/search.component';

@NgModule({
  declarations: [BookComponent, BooksComponent, SearchComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
  providers: [BooksModule, BooksService, CartService],
})
export class BooksModule {}
