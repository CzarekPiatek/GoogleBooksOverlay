import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {IBookResponseModel} from "../model/Book/ibook-response-model";

@Component({
  selector: 'app-material-card-list',
  templateUrl: './material-card-list.component.html',
  styleUrls: ['./material-card-list.component.scss']
})
export class MaterialCardListComponent {
  constructor(private bookService: BookService) {}
  isLoading = true;
  books;
  booksData: IBookResponseModel[];
  startIndex = 0;

  getBooks($event) {
    this.books = $event;
    this.getTwelveBooks();
  }

  getTwelveBooks() {
    this.bookService.getTwelveBooks(this.books, this.startIndex).subscribe(
      data => {
        this.booksData = data;
        console.log(data);
      });
  }
}
