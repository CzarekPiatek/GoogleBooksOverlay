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

  getBooks($event) {
    this.books = $event;
    this.isLoading = true;
    /* this.bookService.searchBooks(this.books).subscribe(
      data => {
        console.log(data);
        this.booksData = data;
      }
    );*/
    this.bookService.getAllBooks(this.books).subscribe(
      data => {
        this.booksData = data;
        console.log(data);
      });
    this.isLoading = false;
  }
}
