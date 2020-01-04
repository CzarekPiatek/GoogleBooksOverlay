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
  books;
  booksInFavoriteBookshelfIds = 'not null :)';
  booksData: IBookResponseModel[];
  startIndex = 0;

  getBooks($event) {
    this.books = $event;
    this.getTwelveBooks();
  }

  getTwelveBooks() {
    if (this.startIndex < 0) { this.startIndex = 0; }
    this.bookshelfService.getIdsFromMyBookshelf().subscribe(
      data => {
        if (data !== undefined) { this.booksInFavoriteBookshelfIds = data; }
      });
    this.bookService.getTwelveBooks(this.books, this.startIndex).subscribe(
      data => {
        this.booksData = data;
        console.log(data);
      });
  }
}
