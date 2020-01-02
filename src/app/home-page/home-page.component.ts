import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {IBookResponseModel} from "../model/Book/ibook-response-model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {
  constructor(private bookService: BookService) {}
  isLoading = true;
  books;
  booksData: IBookResponseModel[];

  getBooks() {
    /* this.bookService.searchBooks(this.books).subscribe(
      data => {
        console.log(data);
        this.booksData = data;
      }
    );*/
    this.bookService.getAllBooks('harry').subscribe(
      data => {
        console.log(data);
      });
  }
}
