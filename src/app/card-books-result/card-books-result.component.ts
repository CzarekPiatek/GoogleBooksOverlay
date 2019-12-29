import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {BookService} from '../service/book.service';
import {MatTableDataSource} from '@angular/material';
import {Book} from '../book';

@Component({
  selector: 'app-card-books-result',
  templateUrl: './card-books-result.component.html',
  styleUrls: ['./card-books-result.component.css']
})
export class CardBooksResultComponent {

  constructor(private bookService: BookService) {}
  isLoading = true;
  books;
  booksData = [];
  getBooks($event) {

    this.books = $event;
    this.isLoading = true;
    this.bookService.searchBooks(this.books).subscribe(
      data => {
        console.log(data);
        this.booksData = data;
      }
    );
    this.isLoading = false;
  }
}
