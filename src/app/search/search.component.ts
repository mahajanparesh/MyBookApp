import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchBooks(bookName: string, authorName: string) {
    this.searchService.setSearchQuery({ bookName, authorName });
  }
}
