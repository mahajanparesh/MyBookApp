import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  searchBooks(bookName: string, authorName: string) {
    console.log(bookName + ' ' + authorName);
    this.searchService.setSearchQuery({ bookName, authorName });
  }
}
