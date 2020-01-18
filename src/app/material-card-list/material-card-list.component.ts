import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {IBookResponseModel} from '../model/Book/ibook-response-model';
import {BookshelfService} from '../service/bookshelf.service';

@Component({
  selector: 'app-material-card-list',
  templateUrl: './material-card-list.component.html',
  styleUrls: ['./material-card-list.component.scss']
})
export class MaterialCardListComponent {
  constructor(private bookService: BookService, private bookshelfService: BookshelfService) {}
  basicSearchBooksTitle;
  advancedSearchBooksValues;
  booksInFavoriteBookshelfIds = 'brak szelfów';
  booksData: IBookResponseModel[];
  startIndex = 0;

  getBooks($event) {
    this.basicSearchBooksTitle = $event;
    this.getFromBasicSearchTwelveBooks();
  }
  getAdvancedSearchBooksValues($event) {
    this.advancedSearchBooksValues = $event;
    this.getFromAdvancedSearchTwelveBooks();
  }
  checkFavorites() {
    console.log(this.basicSearchBooksTitle);
    console.log(this.startIndex);
    if (this.startIndex < 0) { this.startIndex = 0; }
    this.bookshelfService.getBooksFromMyBookshelf(0).subscribe(
      data => {
        if (data) { this.booksInFavoriteBookshelfIds = data; } else {
          this.booksInFavoriteBookshelfIds = 'brak ksiazek';
        }
      });
  }
  getFromBasicSearchTwelveBooks() {
    this.checkFavorites();
    this.bookService.getBasicSearchTwelveBooks(this.basicSearchBooksTitle, this.startIndex).subscribe(
      data => {
        this.booksData = data;
        console.log(data);
      });
  }
  getFromAdvancedSearchTwelveBooks() {
    this.checkFavorites();
    console.log(this.advancedSearchBooksValues);
    this.bookService.getAdvancedSearchTwelveBooks(
      this.advancedSearchBooksValues.firstFormGroup.title,
      this.startIndex,
      this.advancedSearchBooksValues.firstFormGroup.filter,
      this.advancedSearchBooksValues.firstFormGroup.langRestrict,
      this.advancedSearchBooksValues.secondFormGroup.maxAllowedMaturityRating,
      this.advancedSearchBooksValues.firstFormGroup.orderBy,
      this.advancedSearchBooksValues.secondFormGroup.printType,
      this.advancedSearchBooksValues.secondFormGroup.projection
    ).subscribe(
      data => {
        this.booksData = data;
        console.log(data);
      });
  }
}
