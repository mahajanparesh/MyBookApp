import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchVisibilitySubject = new BehaviorSubject<boolean>(false);
  searchVisibility$ = this.searchVisibilitySubject.asObservable();

  private searchQuerySubject: BehaviorSubject<{
    bookName: string;
    authorName: string;
  }> = new BehaviorSubject({ bookName: '', authorName: '' });

  toggleSearchVisibility() {
    this.searchVisibilitySubject.next(!this.searchVisibilitySubject.value);
  }
  constructor() {}

  setSearchQuery(query: { bookName: string; authorName: string }) {
    this.searchQuerySubject.next(query);
  }

  getSearchQuery(): Observable<{ bookName: string; authorName: string }> {
    return this.searchQuerySubject.asObservable();
  }
}
